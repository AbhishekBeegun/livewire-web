import Link from 'next/link'
import React, { useState } from 'react'

const ImgControl = (
  {ImgScale,setImgScale,
   setImgPoster} : any) => {


    const [CurrentPoster, setCurrentPoster] = useState<any>()
    function example1 (){
      setImgPoster("https://media.graphassets.com/output=format:png/resize=height:800,fit:max/9FRGqzHS7GalvkCzrk4W"),
      setCurrentPoster("https://media.graphassets.com/output=format:png/resize=height:800,fit:max/9FRGqzHS7GalvkCzrk4W")
    }
    function example2(){
      setImgPoster("https://media.graphassets.com/output=format:png/resize=height:800,fit:max/Kgfx9pKQ4usIAdzxyfgh"),
      setCurrentPoster("https://media.graphassets.com/output=format:png/resize=height:800,fit:max/Kgfx9pKQ4usIAdzxyfgh")
    }

  return (
    <div className='border-b flex flex-col h-full w-full p-2'>  
    
    {/* img poster */}
    <div>
      <Link className='py-1 px-2 rounded-lg bg-red-500 text-xs'
       href={"https://www.remove.bg"} target='_blank'>Remove Background from image click here</Link>
    </div>
    <p className='text-xl py-2'>Set Poster Image --URL only--</p>
    <form>
    <input className='w-full px-4 py-2 border rounded-lg text-lg bg-transparent'
    placeholder='Paste URL here'
    onChange={(e) => {setImgPoster(e.target.value),setCurrentPoster(e.target.value) }}
    />
    </form>

    <div className='w-full flex items-center justify-center py-2'>
      <img className='w-full border object-contain'
       src={CurrentPoster} alt="" />
    </div>

    {/* img scaler  */}   
    
    
    <div className='flex justify-evenly border-b py-2'>
    <p className='text-xl py-2'>Image Scale - {ImgScale}</p>
    <input type='range' 
    className='py-2'
    value={ImgScale}
    min={0.5} max={2.5} step={0.1}
    onChange={(e) => setImgScale(e.target.value)}
    />
    </div>

    <div className='py-4 flex gap-5'>
      <button 
      className='px-4 py-2 border rounded-lg'
      onClick={ () => example1()}>Example 1</button>

      <button 
      className='px-4 py-2 border rounded-lg'
      onClick={ () => example2()}>Example 2</button>
    </div>
  

     
    </div>
  )
}

export default ImgControl