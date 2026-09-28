import {hotelConfig} from "@/config/hotel";
import type {GuestSession} from "@/types/guest-session";

type MockQrRecord={
  hotelSlug:string;
  roomId:string;
  roomNumber:string;
  guestName:string;
};

const MOCK_QR_RECORDS:Record<string,MockQrRecord>={
  "demo-room-token":{
    hotelSlug:hotelConfig.identity.slug,
    roomId:"room-111",
    roomNumber:"111",
    guestName:"Demo Guest",
  },
  "anemos-room-111":{
    hotelSlug:hotelConfig.identity.slug,
    roomId:"room-111",
    roomNumber:"111",
    guestName:"Demo Guest",
  },
};

export function resolveMockGuestSession(token:string):GuestSession|null{
  const record=MOCK_QR_RECORDS[token];
  if(!record) return null;

  return {
    sessionId:`mock-${token}`,
    hotel:hotelConfig,
    roomId:record.roomId,
    roomNumber:record.roomNumber,
    guestName:record.guestName,
    status:"active",
    checkIn:"2026-09-28T14:00:00+05:30",
    qrToken:token,
  };
}
