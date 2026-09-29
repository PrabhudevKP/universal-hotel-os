import type {HotelConfig} from "@/types/hotel";

type GuestMenuProps={
  hotel:HotelConfig;
};

const icons:Record<string,string>={
  "house-wifi":"⌁",
  "guest-services":"✦",
  "local-guide":"⌖",
  contact:"☎",
  "property-offers":"◇",
  policies:"▤",
  "food-beverage":"♨"
};

export function GuestMenu({hotel}:GuestMenuProps){
  return (
    <section className="guest-menu">
      <div className="section-heading">
        <div>
          <div className="eyebrow">EXPLORE</div>
          <h3>Guest menu</h3>
        </div>
      </div>

      <div className="guest-menu-grid">
        {hotel.guestExperience.menuItems
          .filter(item=>!item.feature||hotel.features[item.feature])
          .map(item=>(
            <a className="guest-menu-card" href={item.route} key={item.key}>
              <span className="guest-menu-icon" aria-hidden="true">{icons[item.key]??"•"}</span>
              <span className="guest-menu-copy">
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </span>
              <span className="guest-menu-arrow" aria-hidden="true">→</span>
            </a>
          ))}
      </div>
    </section>
  );
}
