import type {HotelConfig} from "@/types/hotel";

export type GuestSessionStatus="active"|"checked_out";

export type GuestSession={
  sessionId:string;
  hotel:HotelConfig;
  roomId:string;
  roomNumber:string;
  guestName:string;
  status:GuestSessionStatus;
  checkIn:string;
  checkOut?:string;
  qrToken:string;
};
