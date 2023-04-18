import React from 'react'
import ArtistDetails from '~/components/Artists/ArtistDetails'
import {getApolloClient} from '~/lib/apollo-client'
import { ARTIST_DETAILS } from '~/lib/Queries'


const Slug = () => {
  return (
    <>
        <ArtistDetails/>
    </>
  )
}

export default Slug

//need to make params for slug -----


// export async function getStaticProps() {

//   const apolloClient = getApolloClient();

//   const data = await apolloClient.query({
//     query: LOCALARTIST_QUERY
//   });

//   const ARD = data?.data.artist.map((artist: any) =>{
//     return{
//       ...artist
//     }
//   });

//   return { 
//     props: {
//       ARD
//     }
//   }
// }