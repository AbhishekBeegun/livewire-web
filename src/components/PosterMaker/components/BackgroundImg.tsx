import React, { useEffect, useState } from 'react'

const BackgroundImg = ({setBkImg} : any) => {

  const [CurrentImg, setCurrentImg] = useState<any>()
  return (
    <div className='flex flex-col justify-center w-full h-full items-center border-y py-4 '>
    <p className='text-xl py-4'>SET BACKGROUND IMAGE</p>
    <p>----- URL ONLY -----</p>
    <form className='py-4'>
    <input className='w-full px-4 py-2 border rounded-lg text-lg bg-transparent'
    placeholder='Enter URL'
    onChange={(e) => {setBkImg(e.target.value),setCurrentImg(e.target.value) }}
    />
    </form>

    <div className='w-full h-full flex items-center justify-center py-2 px-2'>
      <img className='w-full h-full object-contain border'
       src={CurrentImg} alt=''/>
    </div>
    </div>
  )
}

export default BackgroundImg
