import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo-r.png'



const Banner = () => {
  return (
    <div className='h-[40vh] flex flex-col justify-center items-center bg-black'>
    <Image className='h-32 w-32 animate-pulse' src={logo} alt="LiveWire"/>
    <p className='text-white text-xs lg:text-lg text-center px-8'>
    LiveWire is the easiest way to book tickets for live music and artist for private parties, colleges, bars, weddings & more.
    </p>
    </div>
  )
}

export default Banner