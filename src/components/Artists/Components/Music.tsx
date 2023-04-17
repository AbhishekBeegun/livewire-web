import React from 'react'
import Image from 'next/image'

const Music = () => {
  return (
    <div className="py-4 px-2 bg-black lg:px-96 ">
       
       <div className="px-4 py-1 flex flex-row justify-between items-center bg-white rounded-t-lg">
        <p className="font-semibold text-black">Music</p> 
        
        <img className="w-14 h-auto object-cover" 
        src="https://download.logo.wine/logo/Deezer/Deezer-Logo.wine.png"
      
        alt="Deezer"/> 
         
       </div>
      {/* <DeezerPlaylist /> */}
      {/* deezerID={deezerID} */}

        
      </div>
  )
}

export default Music