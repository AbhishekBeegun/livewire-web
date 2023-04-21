import React from 'react'

const PosterTitle = (
  {Title,setTitle,
  TitleSize} : any) => {
  return (
    <div className='text-center' >

    <input
    style={{
      fontSize :`${TitleSize}px`,
      color : '#f44000'
    }}
     className='bg-transparent text-center'
     value={Title}
    placeholder='Enter Title'
    onChange={(e) => setTitle(e.target.value)}  />
    </div>
  )
}

export default PosterTitle