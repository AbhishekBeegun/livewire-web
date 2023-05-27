import React from 'react'
import {IoLogoInstagram,IoLogoFacebook} from "react-icons/io"
import {IoLogoAndroid} from 'react-icons/io5'
import Link from 'next/link'

const Footer = () => {
    const company = [
        {
          page :"career",
          text : "Career"
        },
        {
          page :"privacy",
          text : "Privacy Policy"
        },
        {
          page :"Termsservice",
          text : "Terms Of Service"
        },
        {
          page :"cookies",
          text : "Cookies Policy"
        }
      ]
    
      return (
        <div className="bg-[#FE9D1A] px-4 py-4 flex flex-row justify-between lg:justify-around flex-wrap gap-2">
          {/* company list and policy */}
            {/* company */}
            <div className='flex flex-col'>
              <p className="text-white font-semibold text-sm">COMPANY</p>
              {company.map((item) =>
                <p key={item.page} 
                className="text-black font-semibold py-1">{item.text}</p>
              )}
            </div>
    
            {/* otherpage */}
            <div className='text-right text-black'>
              <p className="text-white font-semibold text-sm">PRODUCTS</p>
              <p className="font-semibold py-1">
                Artist Booking
              </p>
              <p className="font-semibold py-1">
                Event Tickets
              </p>
            </div>
        
            {/* socials */}
            <div className='w-full'>
    
            <div className="flex flex-row justify-between items-center lg:justify-around gap-2 py-1 text-black">
            <p className="text-white font-semibold text-sm text-right">SOCIAL</p>
            <span className='flex gap-5'>
                <IoLogoInstagram color='white'/>         
                <IoLogoFacebook color='white' />
            </span>


            <button className="px-2 py-1 lg:px-4 lg:py-2 flex justify-center items-center gap-2 bg-white rounded-full font-semibold hover:scale-105 transition-all text-xs lg:text-base text-black">
               <IoLogoAndroid size={20}/> 
              <Link target='_blank' href={"https://drive.google.com/uc?export=download&id=1zKVjFDRMgqftN3eYA0HEGF12dLEc9Bsn"}

              >Download LiveWire Apk</Link>
            </button>
            </div>
    
            <p className="font-semibold text-xs py-2 text-center">2023 Abhishek Beegun.ALL rights reversed.</p>
            
            
            </div>
    
    
          </div>
    
      )
}

export default Footer