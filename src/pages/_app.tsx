// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }


// src/pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

import "@/styles/globals.css";
import "aos/dist/aos.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Init AOS once on client
  useEffect(() => {
    let mounted = true;
    (async () => {
      const AOS = (await import("aos")).default;
      if (mounted) AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      {/* Global defaults; override per-page with next/head inside each page */}
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}