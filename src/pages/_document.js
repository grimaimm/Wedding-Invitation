import { josefinSans } from "@/styles/font";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
  return (
    <Html lang="en" data-theme="dark">
      <Head>
        <meta name="author" content="aimdev" />
        <meta name="language" content="id" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large"
        />
        <meta
          name="title"
          content="Undangan Pernikahan Aan dan Indri"
        />
        <meta
          name="description"
          content="Website Undangan Pernikahan Aan dan Indri"
        />
        <meta
          name="keywords"
          content="undangan, wedding, undangan digital, undangan online, wedding invitation, template undangan, template undangan pernikahan, undangan pernikahan, template undangan online, wedding invitation github, template website, template website undangan pernikahan"
        />
        <meta
          property="og:title"
          content="Undangan Pernikahan Aan dan Indri"
        />
        <meta
          property="og:description"
          content="Website Undangan Pernikahan Aan dan Indri"
        />
        <meta
          property="og:keywords"
          content="undangan, wedding, undangan digital, undangan online, wedding invitation, template undangan, template undangan pernikahan, undangan pernikahan, template undangan online, wedding invitation github, template website, template website undangan pernikahan"
        />
        <meta
          property="og:image"
          content={`${baseUrl}images/bg.png`}
        />
        <meta
          property="og:image:secure_url"
          content={`${baseUrl}images/bg.png`}
        />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:image:alt"
          content="Website Undangan Pernikahan Aan dan Indri"
        />
        <meta property="og:image:width" content={980} />
        <meta property="og:image:height" content={980} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:url" content={`${baseUrl}`} />
        <meta
          property="og:site_name"
          content="Website Undangan Pernikahan Aan dan Indri"
        />
        <link
          rel="preload"
          href="/images/bg.png"
          as="image"
          type="image/png"
          crossorigin="anonymous"
        />
      </Head>
      <body className={`antialiased ${josefinSans.className} bg-black`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
