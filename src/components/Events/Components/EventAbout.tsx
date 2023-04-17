import React from 'react'
import { useState } from 'react'
import {AiFillHeart} from "react-icons/ai"
import {IoIosArrowUp,IoIosArrowDown} from "react-icons/io"
import BuyTicketsModal from './BuyTicketsModal'


const EventAbout = () => {

  const [ShowMore, setShowMore] = useState<Boolean>(false)

  const [ShowModal, setShowModal] = useState(false)

  function handleWish(){
    alert("Wishlist not setup")
  }

  function handleShowMore(){
    setShowMore(!ShowMore)
  }

  function handleModal(){
    setShowModal(!ShowModal)
  }
  return (
    <div className="bg-black lg:px-96">
        {/* like heart or book artist */}
        <div className="flex flex-row justify-center py-2 gap-8 lg:gap-48">
         
          <button 
          className="px-3 py-2 rounded-lg hover:scale-110 transition-all"
          onClick={() => handleWish()}>
      
            <AiFillHeart size={25} color="red" />
   
          </button>

          <button 
          className="bg-white px-16 text-black font-semibold rounded-full hover:scale-110 transition-all"
          onClick={() => handleModal()}>
            Buy Tickets        
          </button>
        </div>

        {
          ShowModal ? 
          <BuyTicketsModal setShowModal={setShowModal}/>
          : <></>
        }

        {/* about section */}
        <div className="px-4">
          <p  
          className="text-lg font-semibold text-white py-2">About</p>
          {ShowMore ? 
          <div className="w-full h-[10vh] overflow-hidden">
            <p className="text-gray-500 text-xs">artistDescription</p>
          </div> :
           <div className="w-full h-auto overflow-hidden">
             <p 
             className="text-gray-500 text-xs">artistDescriptionfull</p>
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

export default EventAbout