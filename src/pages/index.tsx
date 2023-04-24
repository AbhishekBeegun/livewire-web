import React from 'react'
import { type NextPage } from "next";
import Head from "next/head";
import FirstScreen from "~/components/FirstScreen/FirstScreen";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LiveWire</title>
        <meta name="description" content="LiveWire - WEB" />
        <link rel="icon" href="/logo-r.png" />
      </Head>

      <FirstScreen/>    
    </>
  );
};

export default Home;
