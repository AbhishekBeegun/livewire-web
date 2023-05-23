import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import {AiFillHeart} from "react-icons/ai"
import {IoIosArrowUp,IoIosArrowDown} from "react-icons/io"


const About = ({desc,name} : any) => {

  const [ShowMore, setShowMore] = useState<boolean>(true)

  function handleWish(){
    alert("Wishlist not setup")
  }

  function handleShowMore(){
    setShowMore(!ShowMore)
  }
  return (
    <div className="bg-black lg:px-96">
        {/* like heart or book artist */}
        <div className="flex flex-row justify-center py-2  gap-8 lg:gap-48">
         
          <button 
          className="px-3 py-2 rounded-lg hover:scale-110 transition-all"
          onClick={() => handleWish()}>
      
            <AiFillHeart size={25} color="red" />
   
          </button>

          <Link 
          href={`mailto:abhishekbeegun0642@gmail.com?subject=Quotation for Booking ${name}&body=Need Quote for ${name}`}
          className="bg-white flex justify-center items-center px-20 rounded-full hover:scale-110 transition-all"
          >
          
              <p className="text-black font-semibold">Book</p>              
     
          </Link>
        </div>

        {/* about section */}
        <div className="px-4">
          <p  
          className="text-lg font-semibold text-white py-2">About</p>
          
          
          {ShowMore ? 
          <div className="w-full h-[8vh] overflow-hidden">
            <p className="text-gray-500 text-xs lg:text-sm">{desc}</p>
          </div> :
           <div className="w-full h-auto overflow-hidden">
             <p 
             className="text-gray-500 text-xs lg:text-sm">{desc}</p>
           </div>}


          <button className='w-full' 
          onClick={() => handleShowMore()}>
                {ShowMore ? 
                <div className="flex flex-row items-center justify-center py-2 gap-2 hover:scale-110 transition-all ">
                <p
                className="font-semibold text-white text-xs lg:text-base">Show more</p>
                <IoIosArrowDown size={12} color="white" />
                </div>:
                <div className="flex flex-row items-center justify-center gap-2 hover:scale-110 transition-all">
                <p
                className="font-semibold text-white py-2 text-xs lg:text-base">Show less</p>
                <IoIosArrowUp size={12} color="white" />
                </div>}


          </button>
        </div>

    </div>
  )
}

export default About