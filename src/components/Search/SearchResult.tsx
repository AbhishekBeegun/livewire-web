import React from 'react'
import ArtistCard from '../Artists/ArtistCard'
import {Swiper, SwiperSlide}  from 'swiper/react'
import 'swiper/css';

const SearchResult = ({artist} :any) => {

  return (

    <div className='flex flex-col justify-center px-2 py-20 h-screen bg-black lg:py-8 lg:px-64  text-white'>
         
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

{artist && artist.length > 0 && artist.map( (artist: any) => {
return(
<SwiperSlide>
  
 <ArtistCard artist={artist}/>

</SwiperSlide>
)}
)}

</Swiper>

  
    </div>
  )
}

export default SearchResult