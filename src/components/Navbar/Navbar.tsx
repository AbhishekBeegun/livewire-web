import React from 'react'
import logo from '../../../public/logo-r.png'
import Image from 'next/image'
import Link from 'next/link'
import SearchBar from '../Search/SearchBar'
import Menu from '../Menu/Menu'


const Navbar = () => {
  return (
    <nav className='fixed z-50 top-0 w-full flex justify-evenly items-center bg-black  text-white py-3 bg-opacity-50  backdrop-blur-sm'>
    <Link href={"/explore"} >
    <button
     className='scale-150 flex items-center'>
        <Image className="h-[25px] w-[30px]" src={logo} alt="LiveWire"/>
    </button>
    </Link>
    <>
      <SearchBar/>
    </>
    <>
    <Menu/>
    </>
    </nav>
  )
}

export default Navbar