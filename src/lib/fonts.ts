import {
  IBM_Plex_Mono as FontMono,
  Inter as FontSans,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"], // Add weights you need
});

// Make IBM Plex Mono the default
export const fontDefault = FontMono({
  subsets: ["latin"],
  variable: "--font-default",
  weight: ["400", "500", "600", "700"],
});