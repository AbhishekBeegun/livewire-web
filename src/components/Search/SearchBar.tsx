import React from 'react'
import { useState } from 'react'
import {IoSearch} from 'react-icons/io5'

//in form button is submit by default

const SearchBar = () => {

    const [SearchInput, setSearchInput] = useState<any | null>()

    function handleClick(){
        console.log({SearchInput})
    }
  return (
    <>
        <form className='flex items-center gap-2'>
            <input
            className='w-full px-4 py-1 rounded-full text-xs text-white bg-black border' 
            placeholder='Looking For . . .' 
            value={SearchInput}
            onChange={(e) => setSearchInput(e.target.value)} />
            <button onClick={() => handleClick()}>
            <IoSearch size={20}/>
            </button>
        </form>
    </>    
  )
}

export default SearchBar