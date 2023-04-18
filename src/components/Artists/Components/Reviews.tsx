import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import {IoLogoInstagram,IoLogoFacebook,IoLogoWhatsapp,IoMdMail,IoIosStar} from "react-icons/io"

const Reviews = ({rating,insta} : any) => {

  const ratin = rating

  const [Stars] = useState<any>([])


    for(let i = 0 ; i < rating ; i++){
      Stars.push(
      <IoIosStar key={i} size={15} color="gold"/>)
    }


  function handleSocial(){
    <Link href={`${insta}`} />
  }

  return (
    <div className="px-2 py-2 bg-black lg:px-96">
    {/* reviews and social */}
    
     
      <div className="flex flex-row items-center justify-between px-4 py-2 bg-white rounded-t-lg">
        <p 
        className="font-semibold text-black">Reviews</p>
        <div className="flex flex-row gap-2 items-center">
         {/* {Stars} */}
        </div>
    
      </div>

      <div className="flex flex-row items-center justify-evenly gap-1 py-4">
        
        <Link href={`${insta}`} rel="noopener noreferrer" target="_blank"
        className="border border-white rounded-lg py-2 px-6 hover:scale-110 transition-all"
        >
          <IoLogoInstagram size={24} color="white" />      
        </Link>

        
        <Link href={`${insta}`} rel="noopener noreferrer" target="_blank"
           className="border border-white rounded-lg py-2 px-6 hover:scale-110 transition-all">
        
        <IoMdMail name="email" size={24} color="white" />   
       
        </Link>
        

        <Link href={`${insta}`} rel="noopener noreferrer" target="_blank" 
        className="border border-white rounded-lg py-2 px-6 hover:scale-110 transition-all">
          
          <IoLogoFacebook  size={24} color="white" />
     
         </Link>
         <Link href={`${insta}`} rel="noopener noreferrer" target="_blank"
          className="border border-white rounded-lg py-2 px-6 hover:scale-110 transition-all">
          
          <IoLogoWhatsapp  size={24} color="white" />
     
         </Link>

      </div>
    
    </div>

  )
}

export default Reviews