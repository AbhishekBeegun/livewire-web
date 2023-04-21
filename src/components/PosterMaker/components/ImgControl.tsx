import React from 'react'

const ImgControl = ({ImgScale,setImgScale} : any) => {
  return (
    <div className='border-b flex flex-col items-center w-full text-2xl py-2'>  
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