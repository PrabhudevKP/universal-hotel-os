import type {HotelConfig} from "@/types/hotel";

export const hotelConfig:HotelConfig={
  identity:{
    slug:"anemos-demo",
    name:"Anemos Boutique Living and Spa",
    displayName:"Anemos Boutique Living and Spa",
    tagline:"Boutique living and spa guest experience",
    logo:"/hotel/logo.svg"
  },
  branding:{
    primary:"#6b1f36",
    primarySoft:"#f5e9ed",
    accent:"#c59b6d",
    background:"#f8f7f5",
    surface:"#fff",
    text:"#242321",
    muted:"#77736f",
    border:"#e6e1dc"
  },
  location:{
    address:"127/1 Vithaldas Waddo, Morjim, Pernem, Goa 403512",
    city:"Morjim",
    country:"India"
  },
  contact:{},
  features:{
    concierge:true,
    housekeeping:true,
    restaurant:true,
    roomService:true,
    spa:true,
    pool:true,
    gym:true,
    laundry:true,
    minibar:true,
    taxi:true,
    localGuide:true,
    celebrations:true,
    events:true,
    offers:true
  },
  guestExperience:{
    menuItems:[
      {key:"house-wifi",label:"House & Wi-Fi",description:"Property information, Wi-Fi and stay essentials",route:"/guest/house-wifi"},
      {key:"guest-services",label:"Guest Services",description:"Request help and in-room services",route:"/guest/guest-services"},
      {key:"local-guide",label:"Goa Guide",description:"Explore places, directions and local recommendations",route:"/guest/local-guide",feature:"localGuide"},
      {key:"contact",label:"Contact",description:"Reach the property team",route:"/guest/contact"},
      {key:"property-offers",label:"Property & Offers",description:"Discover facilities, experiences and current offers",route:"/guest/property-offers",feature:"offers"},
      {key:"policies",label:"Policies",description:"Review important stay information",route:"/guest/policies"},
      {key:"food-beverage",label:"Food & Beverage",description:"Dining, breakfast and room service",route:"/guest/restaurant",feature:"restaurant"}
    ]
  },
  timings:{
    breakfast:{label:"Breakfast",start:"07:30",end:"10:30"},
    restaurant:{label:"Restaurant",start:"12:00",end:"22:30"},
    spa:{label:"Spa",start:"11:00",end:"21:00"}
  }
};
