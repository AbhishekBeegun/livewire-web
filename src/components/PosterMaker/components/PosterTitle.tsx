import React from 'react'

const PosterTitle = (
  {Title,setTitle,
  TitleSize} : any) => {
  return (
    <div className='text-center' >
    <p style={{
      fontSize :`${TitleSize}px`,
    }}>
    {Title}
    </p>
    <input value={Title}
    onChange={(e) => setTitle(e.target.value)}  />
    </div>
  )
}

export default PosterTitle