import React from 'react'

const PosterDate = ({Edate,EdateColor ,EdateSize} : any ) => {
  return (
    <div className='text-center w-full z-30' >
    <p
    style={{
      fontSize :`${EdateSize}px`,
      color : `${EdateColor}`
    }}
    >
    {Edate}
    </p>
    </div>
  )
}

export default PosterDate