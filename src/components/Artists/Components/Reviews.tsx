import React from 'react'
import {IoLogoInstagram,IoLogoFacebook,IoLogoWhatsapp,IoMdMail,IoIosStar} from "react-icons/io"

const Reviews = () => {
  return (
    <div className="px-2 py-2 bg-black lg:px-96">
    {/* reviews and social */}
    
     
      <div className="flex flex-row items-center justify-between px-4 py-2 bg-white rounded-t-lg">
        <p 
        className="font-semibold text-black">Reviews</p>
        <div className="flex flex-row gap-2 items-center">
        <IoIosStar color='gold'/>
        <IoIosStar color='gold'/>
        <IoIosStar color='gold'/>
        <IoIosStar color='gold'/>
        <IoIosStar color='gold'/>
        </div>
    
      </div>

      <div className="flex flex-row items-center justify-evenly gap-1 py-4">
        <button 
        className="border border-white rounded-lg py-2 px-6 hover:scale-110 transition-all"
        onClick={() => {}}>
          <IoLogoInstagram size={24} color="white" />      
        </button>

        <div onClick={() => {}}>
        <div className="border border-white rounded-lg py-2 px-6 hover:scale-110 transition-all">
        
        <IoMdMail name="email" size={24} color="white" />   
       
        </div>
        </div>

        <div className="border border-white rounded-lg py-2 px-6 hover:scale-110 transition-all">
          
          <IoLogoFacebook  size={24} color="white" />
     
         </div>
         <div className="border border-white rounded-lg py-2 px-6 hover:scale-110 transition-all">
          
          <IoLogoWhatsapp  size={24} color="white" />
     
         </div>

      </div>
    
    </div>

  )
}

export default Reviews