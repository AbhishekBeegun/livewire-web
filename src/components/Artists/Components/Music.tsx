import React from 'react'
import Image from 'next/image'
import DeezerPlaylist from './DeezerPlaylist'

const Music = () => {
  return (
    <div className="py-4 px-2 bg-black lg:px-96 ">
       
       <div className="px-4 py-3 flex flex-row justify-between items-center bg-white rounded-t-lg">
        <p className="font-semibold text-black">Music</p> 
        
        {/* <Image className="w-20 h-full" 
        src="https://download.logo.wine/logo/Deezer/Deezer-Logo.wine.png"
        alt="Deezer"/>   */}
        {/* <Text className="font-semibold text-xs text-slate-700">SetTimout = 15 sec</Text>  */}
       </div>
      <DeezerPlaylist />
      {/* deezerID={deezerID} */}

        
      </div>
  )
}

export default Music