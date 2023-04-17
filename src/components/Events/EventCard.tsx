import React from 'react'
import { useRouter } from 'next/router';
import {AiFillHeart} from "react-icons/ai"


const EventCard = () => {

  const router = useRouter()

  function handleWish(){
    alert("wishlist not set up")
  }

  const handleCardPress = () => {
    router.push(`/event-details/${1}`);  
  };
  return (
    <div className="h-[200px] lg:h-[300px] bg-slate-500 rounded-lg">
      {/* backgroundImage */}


        <div typeof='button' 
        className="flex flex-col justify-between h-full w-full p-2 cursor-pointer"        
        onClick={() => handleCardPress()}> 


              <div className="flex flex-row justify-between w-full">
   
                {/* {item.artist.map( (item) => ( */}
                <div className="h-[30px] w-[30px]">
                  <img className="w-full h-full rounded-full object-cover"
                   src='https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/diCWSI2ASGiXAWkYx07p'/>
                </div>
                {/* ))} */}

                {/* addtofavorite */}
               <button onClick={() => handleWish()}>
                <AiFillHeart size={25} color="red" />
               </button>
              </div>

              {/* EventName */}
              <p className="text-white font-semibold text-xl px-2 py-2">Coldplay Event</p>
        </div>
    </div>
  )
}

export default EventCard