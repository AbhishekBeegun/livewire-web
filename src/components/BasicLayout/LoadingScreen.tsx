import React from 'react'
import Image from 'next/image'
import logo from '../../../public/logo-r.png'

const LoadingScreen = () => {
  return (
    <div className='h-[100vh] w-screen flex justify-center items-center bg-black transition-all'>
    <Image className='h-32 w-32 animate-pulse' src={logo} alt="LiveWire"/>
    </div>
  )
}

export default LoadingScreen