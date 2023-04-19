import Link from 'next/link'
import React,{useState,useEffect} from 'react'
import {IoLogoInstagram,IoLogoFacebook,IoLogoWhatsapp,IoMdMail,IoIosStar} from "react-icons/io"

const Reviews = ({rating,insta,name} : any) => {

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
         {Stars}
        </div>
    
      </div>

      <div className='h-36 overflow-scroll px-10 w-full text-white'>
        <div className='flex gap-5 items-center py-2'>
        <img className='rounded-full w-10 h-10 object-cover' 
        src="data:image/jpeg;base64,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"/>
        <p className='text-sm'>Amar Pousie</p>

        </div>

        <p className='text-[8px] lg:text-xs text-slate-400'>{`We were very happy with ${name} and LiveWire 
         help with the event.
         ${name} went off. Brought 
         a lot of energy to the crowd and didn't give us 
         any problems with booking. He was also a good time 
         after the show and took pictures with people
         after the event which was cool. Overall,
         very happy with the event it was our most 
         successful one in years.`}
        </p>

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