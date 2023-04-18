import React from 'react'
import { useRouter } from 'next/router';
import {AiFillHeart} from "react-icons/ai"


const EventCard = ({event} : any) => {
  const router = useRouter()

  function handleWish(){
    alert("wishlist not set up")
  }

  const handleCardPress = () => {
    router.push(`/event-details/${event?.slug}`);   
  };
  return (
    <div className="h-[200px] lg:h-[300px] rounded-lg relative hover:opacity-60 transition-all">
      {/* backgroundImage */}
      <img src={event?.poster.url} alt='Ëvent'
      className='object-cover absolute w-full h-full -z-10 opacity-80 rounded-lg' />       



        <div typeof='button' 
        className="flex flex-col justify-between h-full w-full p-2 cursor-pointer"        
        onClick={() => handleCardPress()}> 


              <div className="flex flex-row justify-between w-full">
   
                {event.artist.map( (item : any) => (
                <div className="h-[30px] w-[30px]">
                  <img className="w-full h-full rounded-full object-cover"
                   src={item?.mainPhoto.url}/>
                </div>
                ))}

                {/* addtofavorite */}
               <button onClick={() => handleWish()}>
                <AiFillHeart size={25} color="red" />
               </button>
              </div>

              {/* EventName */}
              <p className="text-white font-semibold text-xl px-2 py-2">{event?.title}</p>
        </div>
    </div>
  )
}

export default EventCard