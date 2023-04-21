import React from 'react'

const PosterLocation = ({
  Elocation, setELocation,
  ElocationSize,
} : any) => {
  return (
    <div className='text-center' >
    <p style={{
      fontSize :`${ElocationSize}px`,
    }}>
    {Elocation}
    </p>
    <input value={Elocation}
    onChange={(e) => setELocation(e.target.value)}  />
    </div>
  )
}

export default PosterLocation