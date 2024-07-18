export const SelectTravelsList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole travels in exploration',
        icon: '/single-trip.png',
        people: '1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two travels in tandem',
        icon: '/couple-trip.png',
        people: '2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon: '/Family-trip.png',
        people: '3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrilled-seeks',
        icon: '/friend-trip.png',
        people: '5 to 10 People'
    },
]

export const selectBudgetOptions=[
    {
        id:1,
        title: 'Cheap',
        desc: 'Stay conscious of costs',
        icon: '/cheap-price.png'
    },
    {
        id:2,
        title: 'Moderate',
        desc: 'Keep cost on the average side',
        icon: '/moderate-cost.png'
    },
    {
        id:3,
        title: 'Luxury',
        desc: 'Do not worry about cost',
        icon: '/luxury-cost.png'
    },
]

export const AiPrompt=`Generate Travel Plan for 
Location: Jhenaidah, Bangladesh for 
3 Days for Couple with a Cheap Budget , 
Give me a Hotels options list with Hotel Name, 
Hotel Address, Price, Hotel Image Url, Geo Coordinates, 
Ticket Pricing, Ratings, description, 
suggest itinerary with place name, place details, 
place image url, time travel each of location for 3 
days with each day plan with best time to visit in json format`