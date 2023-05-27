import React , {useState , useEffect}from 'react'
import Banner from '~/components/ExploreScreen/Banner'
import FeaturedArtist from '~/components/ExploreScreen/FeaturedArtist'
import LocalTalent from '~/components/ExploreScreen/LocalTalent'
import UpcomeEvents from '~/components/ExploreScreen/UpcomeEvents'
import {getApolloClient} from '~/lib/apollo-client'
import { LOCALARTIST_QUERY } from '~/lib/Queries'
import { ARTIST_QUERY } from '~/lib/Queries'
import { EVENT_QUERY } from '~/lib/Queries'
import Image from 'next/image'
import logo from '../../public/logo-r.png'
import HeadDetails from '~/components/BasicLayout/HeadDetails'
import LoadingScreen from '~/components/BasicLayout/LoadingScreen'

const explore = ({LA,FA,UPE} : any) => {

 const [FakeLoading, setFakeLoading] = useState(true)

 const [LocalArtist, setLocalArtist] = useState()

 const [FeaturedArtists, setFeaturedArtists] = useState()

 const [UpcomEvents, setUpcomEvents] = useState()

 useEffect(() => {
   setLocalArtist(LA)
   setFeaturedArtists(FA)
   setUpcomEvents(UPE)

   setFakeLoading(false)
 }, [])
 
  return (
    <>

    <HeadDetails title={"Explore"}/>
    {!FakeLoading ? 

    <>
    <Banner/>
    <LocalTalent LA={LocalArtist}/>
    <FeaturedArtist FA={FeaturedArtists}/>
    <UpcomeEvents UPE={UpcomEvents}/>
    </>
    :
    <LoadingScreen/>
    } 
    </>
  )
}

export default explore


export async function getStaticProps() {

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: LOCALARTIST_QUERY
  });

  const data1 = await apolloClient.query({
    query: ARTIST_QUERY
  });
  const data2 = await apolloClient.query({
    query: EVENT_QUERY
  });



  const LA = data?.data.artists.map((artist: any) =>{
    return{
      ...artist,
        path: `/artist-details/${artist.slug}`
    }
  });

  const FA = data1?.data.artists.map((artist: any) =>{
    return{
      ...artist
    }
  });

  const UPE = data2?.data.events.map((event: any) =>{
    return{
      ...event
    }
  });
    return { 
      props: {
        LA,
        FA,
        UPE
      }
    }

    
}