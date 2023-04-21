import React from 'react'

const PosterLocation = ({
  Elocation, setELocation,
  ElocationSize,
} : any) => {
  return (
    <div className='text-center w-full z-20' >
    <input
    style={{
      fontSize :`${ElocationSize}px`,
      color : "#FECACA"
    }}
    placeholder='Enter Event Location'
    className='bg-transparent text-center w-full'
    value={Elocation}
    onChange={(e) => setELocation(e.target.value)}  />
    </div>
  )
}

export default PosterLocation