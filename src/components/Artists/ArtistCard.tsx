import React from 'react'
import { useRouter } from 'next/router';
import {AiFillStar,AiFillHeart} from "react-icons/ai"

const ArtistCard = () => {

  const router = useRouter()

  function handleWish(){
    alert("wishlist not set up")
  }

  const handleCardPress = () => {
    router.push(`/artist-details/${1}`);  
  };

  return (
    <div className="h-[220px] lg:h-[350px] bg-slate-400 rounded-lg  ">

      <div typeof='button' className="flex flex-col justify-between h-full cursor-pointer" 
      onClick={() => handleCardPress()}>
       

          <div className="flex flex-row justify-between items-center p-2 w-full">
            {/* rating */}
            <div className="flex flex-row items-center justify-center gap-1">
            <p className="text-sm text-white">5</p>
            <AiFillStar size={20} color='gold' />
            </div>

            
              {/* add to favorite */}
             <button onClick={() => handleWish()}>
              <AiFillHeart size={20} color='red' />
             </button>
     

          </div>
           {/* ArtistName */}
          <p className="text-white font-semibold text-xl px-2 py-2">WaKa flow</p>
           
   

        </div>
    
  </div>
  )
}

export default ArtistCard