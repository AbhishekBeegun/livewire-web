import React from 'react'

const LocationControl = (
  {ElocationSize,setElocationSize} : any) => {
  return (
    <div className='border-b flex flex-col items-center w-full text-2xl py-2'>  
    <p className='py-2'>Location font Size</p>
    <p className='text-xl py-2'>{ElocationSize} px</p>
    <input type='range' step="1" min="20" max="80"
    value={ElocationSize}
    onChange={(e) => setElocationSize(e.target.value)} />
    </div>
  )
}

export default LocationControl