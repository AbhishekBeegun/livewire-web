import React, { useEffect, useState } from 'react'

const BackgroundImg = ({setBkImg} : any) => {

  const [CurrentImg, setCurrentImg] = useState<any>()
  return (
    <div className='flex flex-col items-center border-y w-full'>
    <p className='text-xl py-2'>Set Background image URL only</p>
    <form>
    <input className='w-full px-4 py-2 border rounded-lg text-lg bg-transparent'
    placeholder='Enter URL'
    onChange={(e) => {setBkImg(e.target.value),setCurrentImg(e.target.value) }}
    />
    </form>

    <div className='w-full h-full flex items-center justify-center py-2 px-2'>
      <img className='w-full h-full object-contain'
       src={CurrentImg} alt='No BackGround image'/>
    </div>
    </div>
  )
}

export default BackgroundImg

function preventDefault() {
  throw new Error('Function not implemented.')
}
