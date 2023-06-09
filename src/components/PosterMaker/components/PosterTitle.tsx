import React from 'react'

const PosterTitle = (
  {Title,
  TitleSize,TitleColor} : any) => {
  return (
    <div className='text-center'>

      <p style={{
      fontSize :`${TitleSize}px`,
      color : `${TitleColor}`
    }}>
      {Title}
      </p>
    </div>
  )
}

export default PosterTitle