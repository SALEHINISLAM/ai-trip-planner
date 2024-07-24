import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import axios from "axios";
import { Input } from "@/components/ui/input";
import {
  AiPrompt,
  selectBudgetOptions,
  SelectTravelsList,
} from "@/Constants/Options";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { chatSession } from "@/Service/AIModel";
import { Skeleton } from "@/components/ui/skeleton";

const CreateTrip = (props) => {
  const [loader, setLoader] = useState(false);
  const [place, setPlace] = useState();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [formData, setFormData] = useState([]);
  const { toast } = useToast();
  const [aiJson, setAiJson]=useState();
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const OngenerateTrip = async () => {
    setLoader(!loader);
    const days = document.getElementById("days").value;
    console.log(days);
    if (days > 5) {
      toast({
        title: "More than 5 days is not allowed",
        description: "Please select less than or equal to 5 days...",
      });
      return;
    }
    const FinalPrompt = AiPrompt.replace("Jhenaidah", place)
      .replace("3", days)
      .replace("Cheap", formData?.budget)
      .replace("Couple", formData?.traveler)
      .replace("3", days);
    //console.log(FinalPrompt);
    const result = await chatSession.sendMessage(FinalPrompt);
    const aiText=await axios(result?.response?.text());
    setAiJson(aiText.data)
    console.log(aiText.data);
  };
  const fetchSuggestions = async (q) => {
    if (q.length < 3) return;
    //query must larger than 3 letter
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://barikoi.xyz/v2/api/search/autocomplete/place?api_key=bkoi_496aeba6d652ca51f1017c271cc83522bd6bd8691715ccc72b045ab7283cb4e2&q=${q}`,
      headers: {},
    };
    try {
      const response = await axios(config);
      if (response.data && response.data.places) {
        setSuggestions(response.data.places);
      }
      //axios need to add data extra one
      else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    fetchSuggestions(value);
  };

  const handleSuggestionOnClick = (suggestion) => {
    setQuery(suggestion.address);
    setSuggestions([]);
    setPlace(suggestion.district);
    //document.getElementById("destination").classList.add("hidden");
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-5xl font-bold mt-8">
        Tell us your travel preferences
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information and our trip planner will generate a
        customized itinerary based on your preferences.
      </p>
      <div className="mt-8">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your destination of choice?
          </h2>
          {/* As I don't have any api so I can't use google map api */}
          {/* <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}></GooglePlacesAutocomplete> */}
          {/* <input type="text" value={query} onChange={handleChange} placeholder="Location..." name="" id="destination"/> */}
          <Input
            value={query}
            onChange={handleChange}
            placeholder="Location..."
            name=""
          />
          <ul id="destination">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionOnClick(suggestion)}
                className="hover:cursor-pointer"
              >
                {suggestion.address}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>
          <Input placeholder="Example: 3days" type="number" id="days" />
        </div>

        <div className="">
          <h2 className="text-xl my-3 font-medium">What is your Budget?</h2>
          <p>
            The budget is exclusively allocated for activities and dining
            purpose
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center mx-auto items-center gap-3">
            {selectBudgetOptions.map((item, index) => (
              <div
                key={index}
                className={`bg-gray-200 rounded-xl p-4 hover:cursor-pointer hover:shadow-xl 
                ${
                  formData?.budget == item.title &&
                  "shadow-lg border-2 border-black"
                }`}
                onClick={() => handleInputChange("budget", item.title)}
              >
                <figure className="p-6 flex justify-center">
                  <img src={item.icon} alt="" className="w-10" />
                </figure>
                <h2 className="text-xl font-semibold text-center">
                  {item.title}
                </h2>
                <h3 className="text-base text-center text-gray-500">
                  {item.desc}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <h2 className="text-xl my-3 font-medium">
            Who do you plan on traveling with on your next adventure ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center mx-auto items-center gap-3">
            {SelectTravelsList.map((item, index) => (
              <div
                className={`bg-gray-200 rounded-xl p-4 hover:cursor-pointer hover:shadow-xl 
                ${
                  formData?.traveler == item.people &&
                  "shadow-lg border-2 border-black"
                }`}
                key={index}
                onClick={() => handleInputChange("traveler", item.people)}
              >
                <figure className="p-6 flex justify-center">
                  <img src={item.icon} alt="" className="w-10" />
                </figure>
                <h2 className="text-xl font-semibold text-center">
                  {item.title}
                </h2>
                <h3 className="text-base text-center text-gray-500">
                  {item.desc}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-center mb-10">
        <Button onClick={() => OngenerateTrip()}>Generate Trip</Button>
      </div>
      <div
        className={`justify-center mx-auto w-full ${
          loader ? "flex" : "hidden"
        } `}
      >
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[200px] w-[300px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
      <div className="">

      </div>
    </div>
  );
};

CreateTrip.propTypes = {};

export default CreateTrip;
