import Layout from "../Components/Layout";
import ScrollToSection from "../Components/ScrollToSection";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ScrollToSection />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
