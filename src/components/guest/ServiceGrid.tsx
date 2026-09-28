import type {HotelConfig} from "@/types/hotel";
import {HOTEL_MODULES} from "@/core/modules";

type ServiceGridProps={
  hotel:HotelConfig;
};

export function ServiceGrid({hotel}:ServiceGridProps){
  return (
    <div className="service-grid">
      {HOTEL_MODULES
        .filter(module=>hotel.features[module.key])
        .map(module=>(
          <a className="service-card" href={module.route} key={module.key}>
            <strong>{module.label}</strong>
            <span>{module.description}</span>
          </a>
        ))}
    </div>
  );
}
