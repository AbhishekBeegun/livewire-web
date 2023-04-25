import Link from 'next/link'
import React from 'react'
import { IoLogoAndroid } from 'react-icons/io5'
import HeadDetails from '~/components/BasicLayout/HeadDetails'

const Mobilefeature = () => {
  return (
    <>
    <HeadDetails title={"Android only"}/>
    <div className='bg-black h-screen w-screen flex flex-col gap-10 items-center justify-center'>
    <p className='uppercase text-white text-lg font-semibold'>user tickets and deezer playlist are available only on the android app</p>  
    <button className="px-4 py-2 flex justify-center items-center gap-2 bg-white rounded-full font-semibold hover:scale-105 transition-all text-black">
               <IoLogoAndroid size={20}/> 
               <Link target='_blank' href={"https://drive.google.com/uc?export=download&id=1zKVjFDRMgqftN3eYA0HEGF12dLEc9Bsn"}

>Download LiveWire Apk</Link>
            </button>  
    </div>
    </>
  )
}

export default Mobilefeature