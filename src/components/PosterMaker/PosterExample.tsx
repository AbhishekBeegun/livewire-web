import React from 'react'
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css';

const PosterExample = () => {
  return (
    <div
    className='h-[600px] w-[600px]'
    >
     <Swiper        
        spaceBetween={1}
        slidesPerView={1.7}
  
        breakpoints={{
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 1.7,
          },
        }}
      >
  

      <SwiperSlide>
        <div className='h-[550px] w-[400px]'>
            <img 
            className='object-contain w-full h-full'
            src='https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/MRWNsW2bRjW4oFCiCv7y' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' h-[550px] w-[400px]'>
            <img 
            className='object-contain w-full h-full'
            src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/Q3j72d1aSFiuJSFFwmwv"
            />
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className=' h-[550px] w-[400px]'>
           <img 
            className='object-contain w-full h-full'
            src="https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/O783JCkSMyYgBXVRojXg"
            />
        </div>
      </SwiperSlide>

      </Swiper>

      <p>Work in Progress</p>
    </div>
  )
}

export default PosterExample