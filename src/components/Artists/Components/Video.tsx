import React from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


const Video = ({video} : any) => {

  return (
    <div className="py-4 px-2 bg-black lg:px-96 w-full">
       
    <div className="px-4 py-2 bg-white rounded-t-lg">
     <p 
     className="font-semibold text-black">Video</p>   
     </div>
   
     <div className=''>
     <LiteYouTubeEmbed 
     poster="maxresdefault"
        id={video[0]}
        title='' />
 
     </div>
     <div className=''>
     <LiteYouTubeEmbed 
        poster="maxresdefault"
        id={video[1]}
        title='' />
 
     </div>
   


    </div>
  )
}

export default Video