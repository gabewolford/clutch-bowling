import { Inter } from "next/font/google";
import "animate.css";
import "./globals.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

const inter = Inter({
  weight: ["variable"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Clutch Bowling",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-svh flex flex-col mx-auto relative ${inter.className}`}
      >
        <TheHeader />
        {children}
        <TheFooter />
      </body>
    </html>
  );
}
