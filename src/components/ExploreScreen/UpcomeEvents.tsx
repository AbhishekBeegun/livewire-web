import React from 'react'
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css';
import EventCard from '../Events/EventCard';

const UpcomeEvents = () => {
    const arry = ["1", "2", "3","4","5","6","7","8","9","10"]

  return (
    <div className='flex flex-col justify-center pb-10 px-2 py-2 lg:py-8 lg:px-64 bg-black text-white'>
         
        <div className='flex justify-between w-full items-baseline'>
        <h1 className='py-2 text-xl'>Upcoming Events</h1>
        <p className='text-xs'>Show All</p>
        </div>

     <Swiper
  
      spaceBetween={10}
      slidesPerView={1.2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 1.5,
        },
      }}
    >
    {arry.map( o => (
        <SwiperSlide>
          <EventCard />
        </SwiperSlide>
    ))}
    </Swiper>

      
    </div>
  )
}

export default UpcomeEvents