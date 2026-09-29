import {resolveHotel} from "@/core/tenant/registry";
import {resolveMockGuestSession} from "@/core/session/mock";
import {notFound} from "next/navigation";

type GuestSectionProps={
  params:Promise<{section:string}>;
  searchParams:Promise<{token?:string}>;
};

const sectionContent:Record<string,{title:string;description:string;items:string[]}>={
  "house-wifi":{
    title:"House & Wi-Fi",
    description:"Stay essentials and property information.",
    items:["Wi-Fi access information will be loaded from the hotel's configuration.","House information and facility timings will appear here.","Production will connect this section to live hotel content."]
  },
  "guest-services":{
    title:"Guest Services",
    description:"Request assistance during your stay.",
    items:["Housekeeping requests","Room assistance","Laundry and minibar requests","Transportation and other guest services"]
  },
  "local-guide":{
    title:"Goa Guide",
    description:"Explore nearby places and get directions.",
    items:["Restaurants and cafés","Beaches and attractions","Directions and local recommendations","Live maps integration will be added in the next guide phase"]
  },
  contact:{
    title:"Contact",
    description:"Reach the hotel team when you need assistance.",
    items:["Reception / front desk","Guest relations","Emergency assistance","Contact details will be loaded from hotel configuration"]
  },
  "property-offers":{
    title:"Property & Offers",
    description:"Discover the property and available experiences.",
    items:["Property facilities","Current hotel offers","Experiences and activities","Availability and booking will be connected to the operations backend"]
  },
  policies:{
    title:"Policies",
    description:"Important information for your stay.",
    items:["Check-in and check-out","Property rules","Cancellation and booking policies","Policies will be maintained by hotel administrators"]
  },
  restaurant:{
    title:"Food & Beverage",
    description:"Dining, breakfast and room service.",
    items:["Breakfast","Restaurant","Room service","Menus and ordering will be connected to the hotel's live catalog"]
  },
  "room-service":{
    title:"Room Service",
    description:"In-room dining and service requests.",
    items:["Browse room service menu","Place an order","Track order status","Clearance requests after dining"]
  },
  housekeeping:{
    title:"Housekeeping",
    description:"Room cleaning and assistance requests.",
    items:["Request room cleaning","Request towels or amenities","Request maintenance assistance","Track request status"]
  },
  spa:{
    title:"Spa",
    description:"Explore treatments and appointments.",
    items:["Treatments","Available time slots","Booking","Booking status"]
  },
  pool:{
    title:"Pool",
    description:"Pool information and policies.",
    items:["Pool timings","Pool guidelines","Facilities and services"]
  },
  gym:{
    title:"Gym",
    description:"Fitness facility information.",
    items:["Gym timings","Facility information","Usage guidelines"]
  },
  laundry:{
    title:"Laundry",
    description:"Laundry pickup and delivery.",
    items:["Laundry service","Pickup request","Delivery status"]
  },
  minibar:{
    title:"Mini Bar",
    description:"Mini bar inventory and requests.",
    items:["Available items","Request replenishment","View request status"]
  },
  taxi:{
    title:"Taxi",
    description:"Transportation requests.",
    items:["Airport transfer","Local taxi","Pickup details","Request status"]
  },
  celebrations:{
    title:"Celebrations",
    description:"Special occasions and arrangements.",
    items:["Birthday arrangements","Anniversary arrangements","Room decoration","Special requests"]
  },
  events:{
    title:"Events",
    description:"Property events and activities.",
    items:["Upcoming activities","Property events","Participation details"]
  },
  offers:{
    title:"Offers",
    description:"Property promotions and packages.",
    items:["Current offers","Packages","Experiences"]
  },
  concierge:{
    title:"Ask Concierge",
    description:"Your conversational hotel assistant.",
    items:["Ask about hotel facilities","Ask for local recommendations","Ask about dining","Request hotel services"]
  }
};

export default async function GuestSectionPage({params,searchParams}:GuestSectionProps){
  const {section}=await params;
  const {token}=await searchParams;
  const session=token?resolveMockGuestSession(token):null;
  const hotel=session?.hotel??await resolveHotel();

  const content=sectionContent[section];
  if(!content) notFound();

  return (
    <main className="guest-shell">
      <div className="guest-container guest-section-page">
        <a className="back-link" href={session?`/guest?token=${encodeURIComponent(session.qrToken)}`:"/guest"}>← Back to guest home</a>

        <header className="guest-section-header">
          <div className="eyebrow">{hotel.identity.displayName.toUpperCase()} GUEST EXPERIENCE</div>
          <h1>{content.title}</h1>
          <p className="muted">{content.description}</p>
        </header>

        <section className="card guest-section-card">
          <div className="section-heading">
            <div>
              <div className="eyebrow">AVAILABLE</div>
              <h3>{hotel.identity.displayName}</h3>
            </div>
            {session&&<span className="status-dot">Room {session.roomNumber}</span>}
          </div>

          <div className="guest-section-list">
            {content.items.map(item=><div className="guest-section-item" key={item}><span>•</span><strong>{item}</strong></div>)}
          </div>

          <div className="demo-boundary">
            <strong>Next integration layer</strong>
            <span>This section is intentionally UI-only for now. Live hotel data, requests and bookings will come from the shared backend instead of hardcoded page data.</span>
          </div>
        </section>
      </div>

      <nav className="guest-bottom-nav" aria-label="Guest navigation">
        <a href="/guest"><span>⌂</span>Home</a>
        <a className={section==="concierge"?"active":""} href="/guest/concierge"><span>✦</span>Concierge</a>
        <a className={section==="guest-services"?"active":""} href="/guest/guest-services"><span>▦</span>Services</a>
        <a className={["contact","policies","property-offers","house-wifi"].includes(section)?"active":""} href="/guest/contact"><span>•••</span>More</a>
      </nav>
    </main>
  );
}
