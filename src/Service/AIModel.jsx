/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
    
    export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Jhenaidah, Bangladesh for 3 Days for Couple with a Cheap Budget , Give me a Hotels options list with Hotel Name, Hotel Address, Price, Hotel Image Url, Geo Coordinates, Ticket Pricing, Ratings, description, suggest itinerary with place name, place details, place image url, time travel each of location for 3 days with each day plan with best time to visit in json format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"trip_name\": \"Jhenaidah: A Budget-Friendly Getaway for Couples\",\n  \"destination\": \"Jhenaidah, Bangladesh\",\n  \"duration\": 3,\n  \"budget\": \"cheap\",\n  \"travelers\": \"couple\",\n  \"hotels\": [\n    {\n      \"name\": \"Hotel Rajbari\",\n      \"address\": \"78J6+2VR, Jhenaidah Sadar, Jhenaidah\",\n      \"price\": \"BDT 1500 - 2000\",\n      \"image_url\": \"https://www.google.com/search?q=Hotel+Rajbari+Jhenaidah&tbm=isch&ved=2ahUKEwiYqN76o7_4AhV_wAIHHVxNC10Q2-cCegQIABAA&oq=Hotel+Rajbari+Jhenaidah&gs_lcp=CgNpbWcQA1C94wZYy5gCYJgCaAB4AIABAIgBAJIBAJgBAaABAQ&sclient=img&ei=936SYoKNHs-F9QOE6qy4Bg&bih=667&biw=1366&hl=en#imgrc=m9O7Z2o2lF_gNM\",\n      \"geo_coordinates\": \"23.5554, 89.2183\",\n      \"ratings\": \"3.5\",\n      \"description\": \"A basic, budget-friendly hotel with comfortable rooms and a restaurant. It's located near the central market.\"\n    },\n    {\n      \"name\": \"Hotel Seven Hills\",\n      \"address\": \"R6V6+R7G, Jhenaidah Sadar, Jhenaidah\",\n      \"price\": \"BDT 1200 - 1800\",\n      \"image_url\": \"https://www.google.com/search?q=Hotel+Seven+Hills+Jhenaidah&tbm=isch&ved=2ahUKEwiYqN76o7_4AhV_wAIHHVxNC10Q2-cCegQIABAA&oq=Hotel+Seven+Hills+Jhenaidah&gs_lcp=CgNpbWcQA1C94wZYy5gCYJgCaAB4AIABAIgBAJIBAJgBAaABAQ&sclient=img&ei=936SYoKNHs-F9QOE6qy4Bg&bih=667&biw=1366&hl=en#imgrc=0qQ3W9j2Y5W7CM\",\n      \"geo_coordinates\": \"23.5562, 89.2168\",\n      \"ratings\": \"3\",\n      \"description\": \"A no-frills hotel with clean, functional rooms. It's located close to the bus station.\"\n    },\n    {\n      \"name\": \"Hotel Green View\",\n      \"address\": \"78M5+6R8, Jhenaidah Sadar, Jhenaidah\",\n      \"price\": \"BDT 1000 - 1500\",\n      \"image_url\": \"https://www.google.com/search?q=Hotel+Green+View+Jhenaidah&tbm=isch&ved=2ahUKEwiYqN76o7_4AhV_wAIHHVxNC10Q2-cCegQIABAA&oq=Hotel+Green+View+Jhenaidah&gs_lcp=CgNpbWcQA1C94wZYy5gCYJgCaAB4AIABAIgBAJIBAJgBAaABAQ&sclient=img&ei=936SYoKNHs-F9QOE6qy4Bg&bih=667&biw=1366&hl=en#imgrc=qK66pR_2Kq_2OM\",\n      \"geo_coordinates\": \"23.5549, 89.2197\",\n      \"ratings\": \"2.5\",\n      \"description\": \"A basic guesthouse offering simple accommodations and a budget-friendly option.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"title\": \"Exploring the Historical Heart of Jhenaidah\",\n      \"places\": [\n        {\n          \"name\": \"Lalbagh Kuthi (The Palace)\",\n          \"details\": \"A magnificent 19th-century palace built by a wealthy zamindar, featuring beautiful architecture and intricate details.\",\n          \"image_url\": \"https://www.google.com/search?q=Lalbagh+Kuthi+Jhenaidah&tbm=isch&ved=2ahUKEwiYqN76o7_4AhV_wAIHHVxNC10Q2-cCegQIABAA&oq=Lalbagh+Kuthi+Jhenaidah&gs_lcp=CgNpbWcQA1C94wZYy5gCYJgCaAB4AIABAIgBAJIBAJgBAaABAQ&sclient=img&ei=936SYoKNHs-F9QOE6qy4Bg&bih=667&biw=1366&hl=en#imgrc=55h3B34R92x7LM\",\n          \"time\": \"Morning (9:00 AM - 12:00 PM)\",\n          \"travel_time\": \"15 minutes from your hotel\"\n        },\n        {\n          \"name\": \"Jhenaidah Museum\",\n          \"details\": \"A museum showcasing artifacts and exhibits related to the history and culture of Jhenaidah.\",\n          \"image_url\": \"https://www.google.com/search?q=Jhenaidah+Museum&tbm=isch&ved=2ahUKEwiYqN76o7_4AhV_wAIHHVxNC10Q2-cCegQIABAA&oq=Jhenaidah+Museum&gs_lcp=CgNpbWcQA1C94wZYy5gCYJgCaAB4AIABAIgBAJIBAJgBAaABAQ&sclient=img&ei=936SYoKNHs-F9QOE6qy4Bg&bih=667&biw=1366&hl=en#imgrc=j1H5hW93nQh_7M\",\n          \"time\": \"Afternoon (1:00 PM - 4:00 PM)\",\n          \"travel_time\": \"10 minutes from Lalbagh Kuthi\"\n        },\n        {\n          \"name\": \"Jhenaidah Shahi Mosque\",\n          \"details\": \"A historic mosque built in the Mughal architectural style, known for its beautiful arches and intricate details.\",\n          \"image_url\": \"https://www.google.com/search?q=Jhenaidah+Shahi+Mosque&tbm=isch&ved=2ahUKEwiYqN76o7_4AhV_wAIHHVxNC10Q2-cCegQIABAA&oq=Jhenaidah+Shahi+Mosque&gs_lcp=CgNpbWcQA1C94wZYy5gCYJgCaAB4AIABAIgBAJIBAJgBAaABAQ&sclient=img&ei=936SYoKNHs-F9QOE6qy4Bg&bih=667&biw=1366&hl=en#imgrc=23a1Z8f9Y4Q0RM\",\n          \"time\": \"Evening (5:00 PM - 7:00 PM)\",\n          \"travel_time\": \"10 minutes from the museum\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"title\": \"Rural Charm and Natural Beauty\",\n      \"places\": [\n        {\n          \"name\": \"Jhenaidah's Village Life\",\n          \"details\": \"Take a leisurely walk or bicycle ride through the villages surrounding Jhenaidah, experiencing the simple charm of rural Bangladesh.\",\n          \"image_url\": \"https://www.google.com/search?q=Rural+Bangladesh+Images&tbm=isch&ved=2ahUKEwiYqN76o7_4AhV_wAIHHVxNC10Q2-cCegQIABAA&oq=Rural+Bangladesh+Images&gs_lcp=CgNpbWcQA1C94wZYy5gCYJgCaAB4AIABAIgBAJIBAJgBAaABAQ&sclient=img&ei=936SYoKNHs-F9QOE6qy4Bg&bih=667&biw=1366&hl=en#imgrc=hWjD3N5v8m86rM\",\n          \"time\": \"Morning (8:00 AM - 11:00 AM)\",\n          \"travel_time\": \"Depends on the village, but typically 30 minutes by bicycle\"\n        },\n        {\n          \"name\": \"Jhenaidah's Local Market\",\n          \"details\": \"Experience the vibrant atmosphere of a local market, browsing through fresh produce, spices, and local handicrafts.\",\n          \"image_url\": \"https://www.google.com/search?q=Local+Market+Bangladesh&tbm=isch&ved=2ahUKEwiYqN76o7_4AhV_wAIHHVxNC10Q2-cCegQIABAA&oq=Local+Market+Bangladesh&gs_lcp=CgNpbWcQA1C94wZYy5gCYJgCaAB4AIABAIgBAJIBAJgBAaABAQ&sclient=img&ei=936SYoKNHs-F9QOE6qy4Bg&bih=667&biw=1366&hl=en#imgrc=b2X83O-h95o1QM\",\n          \"time\": \"Afternoon (12:00 PM - 2:00 PM)\",\n          \"travel_time\": \"10 minutes from your hotel\"\n        },\n        {\n          \"name\": \"Madhupur Forest (if time permits)\",\n          \"details\": \"A beautiful forest area located near Jhenaidah, ideal for a peaceful nature walk.\",\n          \"image_url\": \"https://www.google.com/search?q=Madhupur+Forest&tbm=isch&ved=2ahUKEwiYqN76o7_4AhV_wAIHHVxNC10Q2-cCegQIABAA&oq=Madhupur+Forest&gs_lcp=CgNpbWcQA1C94wZYy5gCYJgCaAB4AIABAIgBAJIBAJgBAaABAQ&sclient=img&ei=936SYoKNHs-F9QOE6qy4Bg&bih=667&biw=1366&hl=en#imgrc=97B_vH94a9hTmM\",\n          \"time\": \"Late Afternoon (3:00 PM - 5:00 PM)\",\n          \"travel_time\": \"Around 45 minutes from Jhenaidah\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n      \"title\": \"Culinary Delights and Relaxation\",\n      \"places\": [\n        {\n          \"name\": \"Jhenaidah's Local Cuisine\",\n          \"details\": \"Enjoy a delicious meal at one of Jhenaidah's local restaurants, sampling the region's specialties like 'Hilsa' fish curry and 'Biryani'.\",\n          \"image_url\": \"https://www.google.com/search?q=Jhenaidah+Food&tbm=isch&ved=2ahUKEwiYqN76o7_4AhV_wAIHHVxNC10Q2-cCegQIABAA&oq=Jhenaidah+Food&gs_lcp=CgNpbWcQA1C94wZYy5gCYJgCaAB4AIABAIgBAJIBAJgBAaABAQ&sclient=img&ei=936SYoKNHs-F9QOE6qy4Bg&bih=667&biw=1366&hl=en#imgrc=jW2H406C-C0VTM\",\n          \"time\": \"Morning (9:00 AM - 11:00 AM)\",\n          \"travel_time\": \"5 minutes from your hotel\"\n        },\n        {\n          \"name\": \"Relax at the Hotel\",\n          \"details\": \"Spend the afternoon relaxing at your hotel, enjoying a quiet afternoon or reading a book.\",\n          \"image_url\": null,\n          \"time\": \"Afternoon (12:00 PM - 4:00 PM)\",\n          \"travel_time\": \"N/A\"\n        },\n        {\n          \"name\": \"Evening Stroll\",\n          \"details\": \"Take a leisurely evening stroll through Jhenaidah's streets, enjoying the peaceful atmosphere.\",\n          \"image_url\": null,\n          \"time\": \"Evening (5:00 PM - 7:00 PM)\",\n          \"travel_time\": \"N/A\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Note:**\n\n* Prices for hotels are approximate and may vary depending on the season and availability.\n* You can book accommodations directly through websites like Booking.com or Agoda.com.\n* The itinerary is a suggestion and can be customized according to your interests and preferences.\n* Remember to check opening hours and entrance fees for attractions before visiting.\n* You can use local transportation like rickshaws or buses to get around Jhenaidah.\n* Be sure to carry enough cash as card payments may not be widely accepted.\n* Enjoy your trip to Jhenaidah!\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());