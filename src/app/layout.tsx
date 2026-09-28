import type {Metadata} from "next"; import "./globals.css"; import {hotelConfig} from "@/config/hotel";
export const metadata:Metadata={title:hotelConfig.identity.displayName,description:"Universal Hotel OS guest experience"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}