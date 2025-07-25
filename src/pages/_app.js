import Head from "next/head";
import Layout from "../Components/Layout";
import ScrollToSection from "../Components/ScrollToSection";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kazeem | Portfolio</title>
        <meta name="portfolio" content="Kazeem | Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/1.jpg" />
        <link rel="icon" href="/5.jpg" />
      </Head>
      <Layout>
        <ScrollToSection />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
