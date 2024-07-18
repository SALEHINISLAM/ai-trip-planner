import React, { useState } from "react";
import PropTypes from "prop-types";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { selectBudgetOptions, SelectTravelsList } from "@/Constants/Options";

const CreateTrip = (props) => {
  const [place, setPlace] = useState();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

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
    document.getElementById("destination").classList.add("hidden");
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
          <Input placeholder="Example: 3days" type="number" />
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
                className="bg-gray-200 rounded-xl p-4 hover:cursor-pointer hover:shadow-xl"
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
                className="bg-gray-200 rounded-xl p-4 hover:cursor-pointer hover:shadow-xl"
                key={index}
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
    </div>
  );
};

CreateTrip.propTypes = {};

export default CreateTrip;
