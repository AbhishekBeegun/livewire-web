import React from 'react'
import logo from '../../../public/logo-r.png'
import Image from 'next/image'
import {IoSearch,IoMenu} from 'react-icons/io5'
import Link from 'next/link'


const Navbar = () => {
  return (
    <nav className='fixed z-50 top-0 w-full flex justify-evenly items-center bg-black text-white py-3  backdrop-blur-sm'>
    <Link href={"/"} >
    <button
     className='scale-150 flex items-center '>
        <Image className="h-[25px] w-[30px]" src={logo} alt="LiveWire"/>
    </button>
    </Link>
    <div><IoSearch size={20}/></div>
    <div><IoMenu size={20}/></div>
    </nav>
  )
}

export default Navbar