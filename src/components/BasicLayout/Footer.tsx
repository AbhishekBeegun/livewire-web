import React from 'react'
import {IoLogoInstagram,IoLogoFacebook} from "react-icons/io"

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
        <div className="bg-gray-800 px-4 py-4 flex flex-row justify-between lg:justify-around flex-wrap gap-2">
          {/* company list and policy */}
            {/* company */}
            <div className='flex flex-col'>
              <p className="text-slate-500 font-semibold text-sm">COMPANY</p>
              {company.map((item) =>
                <p className="text-white font-semibold py-1">{item.text}</p>
              )}
            </div>
    
            {/* otherpage */}
            <div className='text-right'>
              <p className="text-slate-500 font-semibold text-sm">PRODUCTS</p>
              <p className="text-white font-semibold py-1">
                Artist Booking
              </p>
              <p className="text-white font-semibold py-1">
                Event Tickets
              </p>
            </div>
        
            {/* socials */}
            <div className='w-full'>
    
            <div className="flex flex-row justify-between lg:justify-around gap-2 py-1">
            <p className="text-slate-500 font-semibold text-sm text-right">SOCIAL</p>
            <span className='flex gap-5'>
                <IoLogoInstagram color='white'/>         
                <IoLogoFacebook color='white' />
            </span>
            </div>
    
            <p className="text-white font-semibold text-xs py-2 px-4">2023 Abhishek Beegun.ALL rights reversed.</p>
            
            
            </div>
    
    
          </div>
    
      )
}

export default Footer