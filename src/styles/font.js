import {
  Onest,
  Noto_Naskh_Arabic,
  Sacramento,
  Cedarville_Cursive,
  Josefin_Sans
} from "next/font/google";

export const onestSans = Onest({
  variable: "--onestSans-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: "--notoNaskhArabic-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["400", "500", "600", "700"],
});

export const sacramento = Sacramento({
  variable: "--sacramento-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["400"],
});

export const cedarvilleCursive = Cedarville_Cursive({
  variable: "--cedarvilleCursive-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["400"],
});


export const josefinSans = Josefin_Sans({
  variable: "--josefinSans-font",
  subsets: ["latin"],
  display: "fallback",
  weight: ["300", "400", "500", "600", "700"],
});