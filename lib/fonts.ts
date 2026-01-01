// Add Figtree + Poppins fonts to TIC website
import { Figtree, Inter, Poppins } from "next/font/google";

export const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});
