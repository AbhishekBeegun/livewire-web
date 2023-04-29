import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {IoLogoAndroid} from 'react-icons/io5'
import mckup from "../../../public/image1.webp"


const FirstScreen = () => {
  return (
    <main className="flex flex-col lg:flex-row justify-evenly items-center h-[100vh] w-screen bg-black ">
        <div className="flex items-center justify-center h-[40%] lg:h-full w-full lg:w-full">
         <Image src={mckup} alt='' className='w-full h-full object-contain' />
        </div>


        <div className="flex flex-col justify-evenly lg:justify-center lg:gap-7 items-center text-white px-4 py-4 lg:px-32 text-center h-[60%] lg:w-[60%]">

          <h1 className="text-3xl lg:text-4xl font-bold">Download <span className='text-[#fd9c18]'>LiveWire</span> to start booking artists.</h1>
          <p className=" text-xs lg:text-xl font-semibold text-gray-300">LiveWire is the easiest way to book tickets for live music and artist for private parties, colleges, bars, weddings & more.</p>
          <div className="flex flex-col gap-5">

            
            <Link href={"/explore"}
             className="px-4 py-2 rounded-full text-[#fd9c18] border border-[#fd9c18] font-semibold hover:scale-105 transition-all">
                Continue to LiveWire - Web
            </Link>
            
            <button className="px-4 py-2 flex justify-center items-center gap-2 bg-white rounded-full font-semibold hover:scale-105 transition-all text-black">
               <IoLogoAndroid size={20}/> 
              <Link target='_blank' href={"https://drive.google.com/uc?export=download&id=1zKVjFDRMgqftN3eYA0HEGF12dLEc9Bsn"}

              >Download LiveWire Apk</Link>
            </button>
          </div>
        </div>      
      </main>    
  )
}

export default FirstScreen