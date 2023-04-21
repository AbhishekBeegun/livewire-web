import React from 'react'

const DateControl = ({setEdateSize, EdateSize} : any)  => {
  return (
    <div className='border-b flex flex-col items-center w-full text-2xl py-2'>  
    <p className='py-2'>Date font Size</p>
    <p className='text-xl py-2'>{EdateSize} px</p>
    <input
    type='range' step="1" min="20" max="50"
    value={EdateSize}
    onChange={(e) => setEdateSize(e.target.value)} />
    </div>
  )
}

export default DateControl