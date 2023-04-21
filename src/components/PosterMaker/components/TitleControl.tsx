import React from 'react'

const TitleControl = (
  {TitleSize,setTitleSize} : any) => {
  return (
    <div className='border-b flex flex-col items-center w-full'>
    <p className='text-2xl py-2'>Title Font Size</p>
    <p className='text-xl'>{TitleSize} px</p>
    <input
    className="py-2"
     type='range' step="2" min="25" max="125"
    value={TitleSize}
    onChange={(e) => setTitleSize(e.target.value)} />
    </div>
  )
}

export default TitleControl