import React from 'react'
import Header from './Components/Header'
import Reviews from './Components/Reviews'
import About from './Components/About'
import PVM from './Components/PVM'
import HeadDetails from '../BasicLayout/HeadDetails'

const ArtistDetails = ({ARD} :any) => {
  return (
    <>
    <HeadDetails title={ARD.name} />
    <Header
    name={ARD.name}
    rating={ARD.rating}
    minPrice={ARD.minPrice}
    maxPrice={ARD.maxPrice}
    location={ARD.location}
    cover={ARD.coverPhoto}
    main={ARD.mainPhoto}
    />
    <About
    name={ARD.name}
    desc={ARD.artistDescription}
    />
    <Reviews
    name={ARD.name}
    rating={ARD.rating}
    insta={ARD.socialLinks}
    />
    <PVM
    photos={ARD.gridPhoto}
    video={ARD.videoLinks}
    deezer={ARD.deezerId}/> 
         
    </>
  )
}

export default ArtistDetails