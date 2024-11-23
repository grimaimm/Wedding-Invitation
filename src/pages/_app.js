import React, { useEffect } from "react";
import AOS from "aos";
import {
  cedarvilleCursive,
  josefinSans,
  notoNaskhArabic,
  onestSans,
  sacramento,
} from "@/styles/font";
import "@/styles/globals.css";
import "@/styles/animation.css";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
      // once: true,
    });
  }, []);

  return (
    <>
      <style jsx global>
        {`
          html {
            --onestSans-font: ${onestSans.style.fontFamily};
            --notoNaskhArabic-font: ${notoNaskhArabic.style.fontFamily};
            --sacramento-font: ${sacramento.style.fontFamily};
            --cedarvilleCursive-font: ${cedarvilleCursive.style.fontFamily};
            --josefinSans-font: ${josefinSans.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
