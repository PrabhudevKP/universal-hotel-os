export type HotelFeatureKey="concierge"|"housekeeping"|"restaurant"|"roomService"|"spa"|"pool"|"gym"|"laundry"|"minibar"|"taxi"|"localGuide"|"celebrations"|"events"|"offers";

export type HotelGuestMenuItem={
  key:string;
  label:string;
  description:string;
  route:string;
  feature?:HotelFeatureKey;
};

export type HotelConfig={
  identity:{slug:string;name:string;displayName:string;tagline:string;logo:string};
  branding:{primary:string;primarySoft:string;accent:string;background:string;surface:string;text:string;muted:string;border:string};
  location:{address:string;city:string;country:string;latitude?:number;longitude?:number};
  contact:{phone?:string;email?:string;website?:string};
  features:Record<HotelFeatureKey,boolean>;
  guestExperience:{menuItems:HotelGuestMenuItem[]};
  timings:Record<string,{label:string;start?:string;end?:string}>;
};
