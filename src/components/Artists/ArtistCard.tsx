import React from 'react'
import { useRouter } from 'next/router';
import {AiFillStar,AiFillHeart} from "react-icons/ai"

const ArtistCard = ({artist} :any ) => {

  const router = useRouter()

  function handleWish(){
    alert("wishlist not set up")
  }

  const handleCardPress = () => {
    router.push(`/artist-details/${artist?.slug}`);  
  };

  return (
    <div className="h-[220px] lg:h-[350px] rounded-lg relative hover:opacity-60 transition-all">

      <img src={artist?.mainPhoto?.url} className='object-cover absolute w-full h-full -z-10 opacity-95 lg:opacity-80 rounded-lg' alt="Img" />       
      <div typeof='button' className="flex flex-col justify-between h-full cursor-pointer" 
      onClick={() => handleCardPress()}>


          <div className="flex flex-row justify-between items-center p-2 w-full">
            {/* rating */}
            <div className="flex flex-row items-center justify-center gap-1">
            <p className="text-sm text-white">{artist?.rating}</p>
            <AiFillStar size={20} color='gold' />
            </div>

            
              {/* add to favorite */}
             <button onClick={() => handleWish()}>
              <AiFillHeart size={20} color='red' />
             </button>
     

          </div>
           {/* ArtistName */}
          <p className="text-white font-semibold text-xl px-2 py-2">{artist?.name}</p>
           
   

        </div>
    
  </div>
  )
}

export default ArtistCard