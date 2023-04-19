import React from 'react'
import { useRouter } from 'next/router';

const EventArtists = ({artist} : any ) => {

  const router = useRouter()

  const handleCardPress = () => {
    router.push(`/artist-details/${artist?.slug}`);  
  };
  return (
    <div className='bg-black px-2 lg:px-96'>
    <div className="px-4 py-2 bg-white rounded-t-lg">
    <p 
    className="font-semibold text-black">Event Artists</p>   
  </div>

    <div typeof='button' onClick={() => handleCardPress()}
     className="flex flex-row justify-center gap-10 w-full items-center px-10 py-4 cursor-pointer">

     <div className="h-[90px] w-[90px]">
     <img
     className="h-full w-full rounded-full object-cover" 
     src={`${artist?.mainPhoto.url}`}/>
     </div>

    
      <p className="text-base font-semibold text-white">{artist?.name}</p>
     

     </div>
      </div>
  )
}

export default EventArtists