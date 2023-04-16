import React from 'react'
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css';
const LocalTalent = () => {

    const arry = ["1", "2", "3","4","5","6","7","8","9","10"]
  return (
    <div className='flex flex-col justify-center px-2 py-2 lg:py-8 lg:px-64 bg-black text-white'>
         
        <div className='flex justify-between w-full items-baseline'>
        <h1 className='py-2 text-xl'>Local Talents</h1>
        <p className='text-xs'>Show All</p>
        </div>

     <Swiper
  
      spaceBetween={10}
      slidesPerView={2.2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2.5,
        },
      }}    
    >
    {arry.map( o => (
        <SwiperSlide>
            <div className='h-[200px] lg:h-[300px] bg-slate-500 flex justify-center rounded-lg items-center'>
            <h1>{o}</h1>
            </div>
        </SwiperSlide>
    ))}
    </Swiper>

      
    </div>
  )
}

export default LocalTalent