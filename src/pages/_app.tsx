import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";
import "~/styles/globals.css";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "~/components/BasicLayout/Footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </SessionProvider>
  );
};

export default MyApp;
