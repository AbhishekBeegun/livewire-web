import React from 'react'

const PosterImg = ({ImgPoster ,ImgScale} :any) => {
 
  return (
    <div>
      <img style={{
        scale : `${ImgScale}`,
      }} 
      src={ImgPoster.src} alt='ImgPoster' className='w-full h-full z-10 rounded-full' />
    </div>
  )
}

export default PosterImg