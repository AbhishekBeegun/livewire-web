import React from 'react'
import {BiMenuAltLeft} from "react-icons/bi"

const OpenSidebar = ({setShowSidebar} : any) => {
  return (
    <button
    onClick={() => setShowSidebar(true)} 
    className='fixed z-50 p-2 top-1 left-10 text-white rounded-lg'>
    <BiMenuAltLeft size={25} />
    </button>
  )
}

export default OpenSidebar