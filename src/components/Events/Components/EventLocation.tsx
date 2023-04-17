import React from 'react'
import {HiMapPin} from "react-icons/hi2"

const EventLocation = () => {
  return (
    <div className="w-full bg-black px-2 py-2 lg:px-96">
    <div className="px-4 py-2 bg-white rounded-t-lg">
          <p  
          className="font-semibold text-black">
            Event location
          </p>
     </div>

     <div className='py-4 flex flex-col gap-2 text-white justify-center items-center'>
      
       <p className=''>Event Location</p>
       <div className='flex gap-2 items-center underline'>
       <HiMapPin size={20}/>
       <span>See on Google Map</span>
       {/* http://www.google.com/maps/place/-20.2469969,57.4210979 */}
       </div>
     </div>

    </div>

  )
}

export default EventLocation