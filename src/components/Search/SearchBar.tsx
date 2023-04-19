import React from 'react'
import { useState } from 'react'
import {IoSearch} from 'react-icons/io5'
import Link from 'next/link'
import { useRouter } from 'next/router'

//in form button is submit by default

const SearchBar = () => {

   const router = useRouter()



    const [SearchInput, setSearchInput] = useState<any | null>()
  

  return (
    <>
        <form className='flex items-center gap-2'>
            <input
            className='w-full px-4 py-1 rounded-full text-xs bg-black border border-[#FE9D1A]' 
            placeholder='Looking For . . .' 
            value={SearchInput}
            onChange={(e) => setSearchInput(e.target.value)} />
            
            <Link 
            href={`/search-query/${SearchInput}`} >
            <IoSearch size={20}/>
            </Link>
        </form>
    </>    
  )
}

export default SearchBar