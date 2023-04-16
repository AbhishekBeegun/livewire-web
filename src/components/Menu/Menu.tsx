import React from 'react'
import { useState } from 'react'
import {IoMenu,IoClose} from 'react-icons/io5'

const Menu = () => {

    const [Show, setShow] = useState<Boolean>(false)

    function handleClick(){
        setShow(!Show)
    }

  return (
    <>
    {!Show ? 
    <button onClick={() => handleClick()}>
        <IoMenu size={20}/>
    </button>
     : 
     <button onClick={() => handleClick()}>
         <IoClose size={20} />
     </button>
    }

    {Show ?
    <div className='w-full fixed top-12 h-[50vh] bg-red-500 opacity-80'>

    </div> : <></>
    }
    </>
  )
}

export default Menu