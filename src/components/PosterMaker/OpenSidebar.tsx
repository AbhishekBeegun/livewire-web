import React from 'react'
import {BiMenuAltLeft} from "react-icons/bi"

const OpenSidebar = ({setShowSidebar} : any) => {
  return (
   
    <div
    onClick={() => setShowSidebar(true)} 
    className='fixed z-50 p-2 top-1 left-10 text-white rounded-lg animate-bounce'>
    <div className='absolute top-4 h-6 w-6 rounded-full bg-orange-600 animate-ping'></div>

    <BiMenuAltLeft size={40} />
    </div>

    
  )
}

export default OpenSidebar