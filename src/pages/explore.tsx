import React , {useState , useEffect}from 'react'
import Banner from '~/components/ExploreScreen/Banner'
import FeaturedArtist from '~/components/ExploreScreen/FeaturedArtist'
import LocalTalent from '~/components/ExploreScreen/LocalTalent'
import UpcomeEvents from '~/components/ExploreScreen/UpcomeEvents'
import {getApolloClient} from '~/lib/apollo-client'
import { LOCALARTIST_QUERY } from '~/lib/Queries'
import { ARTIST_QUERY } from '~/lib/Queries'

const explore = ({LA,FA} : any) => {
 const [LocalArtist, setLocalArtist] = useState()

 const [FeaturedArtists, setFeaturedArtists] = useState()

 useEffect(() => {
   setLocalArtist(LA)
   setFeaturedArtists(FA)

 }, [])
 
  return (
    <>
    <Banner/>
    <LocalTalent LA={LocalArtist}/>
    <FeaturedArtist FA={FeaturedArtists}/>
    <UpcomeEvents/>
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



  const LA = data?.data.artists.map((artist: any) =>{
    return{
      ...artist
    }
  });

  const FA = data1?.data.artists.map((artist: any) =>{
    return{
      ...artist
    }
  });
    return { 
      props: {
        LA,
        FA
      }
    }
}