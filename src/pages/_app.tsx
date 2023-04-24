import React from "react";
import "~/styles/globals.css";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/BasicLayout/Footer";

const MyApp = ({Component, pageProps} :any) => {
  return (
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
};

export default MyApp;
