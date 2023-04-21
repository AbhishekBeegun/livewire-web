import React from 'react'
import {VscLayoutSidebarLeft} from "react-icons/vsc"

const OpenSidebar = ({setShowSidebar} : any) => {
  return (
    <button
    onClick={() => setShowSidebar(true)} 
    className='fixed z-50 p-2 top-1 left-10 border rounded-lg bg-white'>
    <VscLayoutSidebarLeft size={20} />
    </button>
  )
}

export default OpenSidebar