import React from 'react'
import { type NextPage } from "next";
import FirstScreen from "~/components/FirstScreen/FirstScreen";
import HeadDetails from '~/components/BasicLayout/HeadDetails';


const Home: NextPage = () => {
  return (
    <>
    <HeadDetails title={"LiveWire - WEB"} />
      <FirstScreen/>    
    </>
  );
};

export default Home;
