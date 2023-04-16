import React from 'react'
import Banner from '~/components/ExploreScreen/Banner'
import FeaturedArtist from '~/components/ExploreScreen/FeaturedArtist'
import LocalTalent from '~/components/ExploreScreen/LocalTalent'
import UpcomeEvents from '~/components/ExploreScreen/UpcomeEvents'

const explore = () => {
  return (
    <>
    <Banner/>
    <LocalTalent/>
    <FeaturedArtist/>
    <UpcomeEvents/>
    </>
  )
}

export default explore