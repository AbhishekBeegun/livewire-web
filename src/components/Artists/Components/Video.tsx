import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


const Video = () => {


  return (
    <div className="py-4 px-2 bg-black lg:px-96 w-full">
       
    <div className="px-4 py-2 bg-white rounded-t-lg">
     <p 
     className="font-semibold text-black">Video</p>   
     </div>
   
     <div className=''>
     <LiteYouTubeEmbed 
     poster="hqdefault"
        id="S8ZUB9z8OGA"
        title='' />
 
     </div>
     <div className=''>
     <LiteYouTubeEmbed 
        poster="hqdefault"
        id="wjJKYwMSRAo"
        title='' />
 
     </div>
   


    </div>
  )
}

export default Video