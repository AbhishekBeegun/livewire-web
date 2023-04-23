import Link from 'next/link'
import React, { useState } from 'react'

const ImgControl = (
  {ImgScale,setImgScale,
  ImgPoster, setImgPoster} : any) => {


    const [CurrentPoster, setCurrentPoster] = useState<any>()
  return (
    <div className='border-b flex flex-col items-center h-full w-full text-2xl py-2'>  
    
    {/* img poster */}
    <div>
      <Link className='py-1 px-2 rounded-lg bg-red-500 text-sm'
       href={"https://www.remove.bg"} target='_blank'>Remove Background from image click here</Link>
    </div>
    <p className='text-xl py-2'>Set Poster Image --URL only--</p>
    <form>
    <input className='w-full px-4 py-2 border rounded-lg text-lg bg-transparent'
    placeholder='Enter URL here'
    onChange={(e) => {setImgPoster(e.target.value),setCurrentPoster(e.target.value) }}
    />
    </form>

    <div className='w-full flex items-center justify-center py-2'>
      <img className='w-full h-full object-contain border'
       src={CurrentPoster} alt=''/>
    </div>

    {/* img scaler  */}   
    
    
    <p className='py-2'>Image Scale</p>
    <p className='text-xl py-2'>Scale = {ImgScale}</p>
    <input type='range' 
    className='py-2'
    value={ImgScale}
    min={0.5} max={2.5} step={0.1}
    onChange={(e) => setImgScale(e.target.value)}
     />

     
    </div>
  )
}

export default ImgControl