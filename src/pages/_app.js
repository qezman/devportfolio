import Head from "next/head";
import Layout from "../Components/Layout";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kazeem | Portfolio</title>
        <meta name="portfolio" content="Kazeem | Portfolio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
        />
        <meta property="og:image" content="/logo.svg" />
        <link rel="icon" href="/logo.svg" />
        <meta name="theme-color" content="#1f2937" />
        <meta
          name="description"
          content="Kazeem Jimoh - Cloud Engineer Portfolio"
        />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <div className={`${inter.variable} font-sans`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer
            position="top-right"
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="colored"
          />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
