import React from 'react'
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css';
import EventCard from '../Events/EventCard';
import Link from 'next/link';

const UpcomeEvents = ({UPE} : any) => {

  return (
    <div className='flex flex-col justify-center pb-10 px-2 py-2 lg:py-8 lg:px-64 bg-black text-white'>
         
        <div className='flex justify-between w-full items-baseline'>
        <h1 className='py-2 text-xl'>Upcoming Events</h1>
        <Link href={'/AllEvents'}
         className='text-xs hover:scale-110 transition-all'>Show All</Link>
        </div>

     <Swiper
  
      spaceBetween={10}
      slidesPerView={1.2}

      breakpoints={{
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 1.5,
        },
      }}
    >

{UPE && UPE.length > 0 && UPE.map( (event: any) => {
  return(
    <div key={event?.slug}>

    <SwiperSlide>
     
      <EventCard event = {event}/>
    
    </SwiperSlide>
    </div>
  )}
)}

    </Swiper>

      
    </div>
  )
}

export default UpcomeEvents