import Link from 'next/link'
import React from 'react'
import {IoLogoAndroid} from 'react-icons/io'

const FirstScreen = () => {
  return (
    <main className="flex flex-col lg:flex-row justify-evenly items-center h-screen w-screen bg-black ">
        <div className="flex items-center justify-center h-[45%] lg:w-[45%] bg-[#FE9D1A]">
          <video className="w-auto h-full object-fill" 
          autoPlay
          loop
        //   src="https://res.cloudinary.com/dn29xlaeh/video/upload/q_auto:good/marketing/BeatGig_Clips_1_cipxyq.mp4"
        />
        </div>


        <div className="flex flex-col justify-evenly lg:justify-center lg:gap-7 items-center text-white px-4 py-4 lg:px-32 text-center h-[55%] lg:w-[55%]">

          <h1 className="text-3xl lg:text-4xl font-bold">Download <span className='text-[#fd9c18]'>LiveWire</span> to start booking artists.</h1>
          <p className=" text-xs lg:text-xl font-semibold text-gray-300">LiveWire is the easiest way to book tickets for live music and artist for private parties, colleges, bars, weddings & more.</p>
          <div className="flex flex-col gap-2">
            <button className="px-4 py-2 flex items-center gap-2 bg-white rounded-full font-semibold hover:scale-105 transition-all text-[#a4c639]">
               <IoLogoAndroid size={20}/> 
              <p>Download Android App</p>
            </button>

            
            <Link href={"/explore"}>
            <button className="px-4 py-2 font-semibold hover:scale-105 transition-all">
                Continue to LiveWire
            </button>
            </Link>
          </div>
        </div>      
      </main>    
  )
}

export default FirstScreen