import React from 'react'

const EventArtists = () => {
  return (
    <div className='bg-black px-2 lg:px-96'>
    <div className="px-4 py-2 bg-white rounded-t-lg">
    <p 
    className="font-semibold text-black">Event Artists</p>   
  </div>

    <div typeof='button' onClick={() => {}}
     className="flex flex-row justify-center gap-10 w-full items-center px-10 py-4 cursor-pointer">

     <div className="h-[90px] w-[90px]">
     <img
     className="h-full w-full rounded-full object-cover" 
     src='https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/wnG68p24R66K78iBnqpE'/>
     </div>

    
      <p className="text-base font-semibold text-white">Coldplay</p>
     

     </div>
      </div>
  )
}

export default EventArtists