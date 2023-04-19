import Link from 'next/link'
import React , {useState} from 'react'
import { useEffect } from 'react'
import {HiMapPin} from "react-icons/hi2"

const EventLocation = ({coord,locationT} : any) => {

  const [lat, setlat] = useState()
  const [log, setlog] = useState()


  useEffect(() => {
    setlat(coord.latitude)
    setlog(coord.longitude  )
  })
  

  return (
    <div className="w-full bg-black px-2 py-2 lg:px-96">
    <div className="px-4 py-2 bg-white rounded-t-lg">
          <p  
          className="font-semibold text-black">
            Event location
          </p>
     </div>

     <div className='py-4 flex flex-col gap-5 text-white justify-center items-center'>
      
       <p className=''>{locationT}</p>
       <div className='flex gap-2 items-center underline'>
       <HiMapPin size={20}/>

       <Link target='_blank' 
       href={`http://www.google.com/maps/place/${lat},${log}`}>
       See on Google Map
       </Link>
       </div>
     </div>

    </div>

  )
}

export default EventLocation