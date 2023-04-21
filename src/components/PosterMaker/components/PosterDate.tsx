import React from 'react'

const PosterDate = ({Edate,setEdate ,EdateSize} : any ) => {
  return (
    <div className='text-center w-full z-30' >
    <input
    style={{
      fontSize :`${EdateSize}px`,
      color : "#FECACA"
    }}
    placeholder='Enter Event Date'
    className='bg-transparent text-center w-full'
    value={Edate}
    onChange={(e) => setEdate(e.target.value)}  />
    </div>
  )
}

export default PosterDate