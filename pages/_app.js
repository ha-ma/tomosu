import Layout from "../components/Layout";
import BottomContact from "../components/BottomContact";
import BottomSNS from "../components/BottomSNS";
import Footer from "../components/Footer";
import "../styles/reset.scss";
import "../styles/custom-labels.css";
import ROuter, { Router } from "next/router";
import Loading from "../components/Loading";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => setLoading(true));
  Router.events.on("routeChangeComplete", (url) => setLoading(false));

  return (
    <>
      <Loading loading={loading} />
      <Layout>
        <Component {...pageProps} />
        {/* <BottomContact /> */}
        <BottomSNS />
        <Footer />
      </Layout>
    </>
  );
}
export default MyApp;
