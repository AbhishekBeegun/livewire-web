import React from 'react'
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css';
import ArtistCard from '../Artists/ArtistCard';
import Link from 'next/link';

const FeaturedArtist = ({FA} :any) => {

  return (
    <div className='flex flex-col justify-center px-2 py-2 lg:py-8 lg:px-64 bg-black text-white'>
         
        <div className='flex justify-between w-full items-baseline'>
        <h1 className='py-2 text-xl'>Featured</h1>
        <Link href={'/AllArtists'} 
        className='text-xs hover:scale-110 transition-all'>Show All</Link>
        </div>

     <Swiper
        
      spaceBetween={10}
      slidesPerView={2.2}

      breakpoints={{
        // when window width is >= 768px
        768: {
          width: 768,
          slidesPerView: 2.5,
        },
      }}
    >
{FA && FA.length > 0 && FA.map( (artist: any) => {
  return(
     <div key={artist?.slug}>
    <SwiperSlide>
     <ArtistCard artist={artist}/>
    </SwiperSlide>
     </div>
  )}
)}
    </Swiper>

      
    </div>
  )
}

export default FeaturedArtist