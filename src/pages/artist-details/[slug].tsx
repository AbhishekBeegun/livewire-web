import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'
import ArtistDetails from '~/components/Artists/ArtistDetails'
import LoadingScreen from '~/components/BasicLayout/LoadingScreen'
import {getApolloClient} from '~/lib/apollo-client'
import { ARTIST_DETAILS } from '~/lib/Queries'


const Slug = ({ARD} : any ) => {

  return (
    <>
    {ARD ?
        <ArtistDetails ARD={ARD}/>
    : <LoadingScreen />}
    </>
  )
}

export default Slug


export async function getStaticProps({ params = {} } = {}) {
 
  const {slug} = params as Params;
 
   const apolloClient = getApolloClient();
 
   const data = await apolloClient.query({
     query: ARTIST_DETAILS
     ,
    variables: {
      slug: slug,
    }
      
   });
 
 
  const ARD = data?.data.artist
     return { 
       props: {
        ARD
       }
     }
 }
 
 export async function getStaticPaths() {
   return {
     paths: [],
     fallback: 'blocking'
   }
 }
