import {hotelConfig} from "@/config/hotel";
import type {HotelConfig} from "@/types/hotel";

export async function resolveHotel(input?:{host?:string;token?:string}):Promise<HotelConfig>{
  void input;
  return hotelConfig;
}
