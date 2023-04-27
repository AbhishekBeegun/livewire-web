import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import {IoMenu,IoClose} from 'react-icons/io5'
import {MdDashboard} from "react-icons/md"

const Menu = () => {

    const [Show, setShow] = useState<boolean>(false)

    function handleClick(){
        setShow(!Show)
    }

  return (
    <>
    {!Show ? 
    <button onClick={() => handleClick()}>
        {/* <div className='absolute top-4 h-4 w-4 rounded-full bg-red-600 animate-ping'></div> */}
        <IoMenu size={20}/>
    </button>
     : 
     <button onClick={() => handleClick()}>
         <IoClose size={20} />
     </button>
    }

    {Show ?
    <div className='fixed bg-black flex flex-col gap-2 px-4 py-2 border top-12 right-0 rounded-lg lg:right-48 w-full lg:w-96'>
      
      <p className='text-lg'>Setting and Tools</p>

   
      
      <Link
      onClick={() => handleClick()}
      className='flex relative justify-around items-center py-4 bg-orange-500 rounded-lg'
       href={"/postermaker"}>
        <MdDashboard size={40}/>
        <p>Poster Maker</p>
        <span className='text-xs'>(Desktop Only)</span>

        <p className='absolute top-0 right-0 p-1 text-xs bg-red-500  rounded-lg animate-ping'>New</p>
      </Link>

      <Link href={"/Mobilefeature"}
      onClick={() => handleClick()}
      className='py-4 flex justify-around items-center bg-red-500 rounded-lg'>
        <HiOutlineUserCircle size={40} />
        <p>User Tickets</p>
      </Link>

      
    </div> : <></>
    }
    </>
  )
}

export default Menu