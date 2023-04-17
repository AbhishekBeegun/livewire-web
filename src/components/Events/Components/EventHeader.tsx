import React from 'react'
import {AiFillStar} from "react-icons/ai"


const EventHeader = () => {
  return (
    <div className="h-[40vh] lg:h-[90vh] w-full m-auto bg-black relative ">
    <img className='w-full h-full object-cover' 
    src='https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/p8UlsflkQnKuSvPzMq0w' />
  

      <div className="absolute bg-gradient-to-t from-black bottom-0 left-0 flex flex-row h-[120px] lg:h-[200px] w-full items-center justify-center ">
        
              
        {/* event name & Rating location */}
        <div className="flex flex-col justify-evenly items-center px-8">
        {/* event name */}
         <div>
          <h1  
          className="text-lg lg:text-4xl font-semibold text-center text-white">Coldplay - Music of the Spheres World Tour.

          </h1>
         </div>

        {/* rating anf location */}
        <div className="flex flex-row gap-5 items-baseline justify-center py-1">
          {/* rating */}
          <div className="flex flex-row items-center justify-center gap-1">
            <p 
            className="text-sm lg:text-lg font-semibold text-white">rating</p>
            <AiFillStar color="gold"/>
          </div>

          {/* location */}
          <div>
            <p  
            className="text-xs lg:text-lg text-white">location</p>
          </div>

        </div>

        <>
        <p  
            className="text-xs lg:text-lg text-white">ldate</p>
        </>
        </div>

      </div>

      
  </div>
  )
}

export default EventHeader