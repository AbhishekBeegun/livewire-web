import React from 'react'

const PosterLocation = ({
  Elocation,
  ElocationSize,ElocationColor,
} : any) => {
  return (
    <div className='text-center w-full z-20' >

    <p
      style={{
        fontSize :`${ElocationSize}px`,
        color : `${ElocationColor}`
        }}
    >
      {Elocation}
    </p>



    {/* <input
    style={{
      fontSize :`${ElocationSize}px`,
      color : "#F40000"
    }}
    placeholder='Enter Event Location'
    className='bg-transparent text-center w-full'
    value={Elocation}
    onChange={(e) => setELocation(e.target.value)}  /> */}
    </div>
  )
}

export default PosterLocation