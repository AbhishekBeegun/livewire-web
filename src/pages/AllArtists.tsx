import React, { useState } from 'react'
import ArtistCard from '~/components/Artists/ArtistCard'
import {getApolloClient} from '~/lib/apollo-client'
import { ALLARTIST_QUERY } from '~/lib/Queries'

const AllArtists = ({ALL}:any) => {

    const [ALLARTISTS] = useState(ALL)


  return (
    <div className='flex flex-row bg-black gap-4 items-center justify-center flex-wrap py-16 px-2 lg:px-20'>
  {ALLARTISTS && ALLARTISTS.length > 0 && ALLARTISTS.map( (artist: any) => {
  return(
      
    <div 
    key={artist?.slug}
    className='w-[150px] lg:w-[250px] z-10'>   
        <ArtistCard artist={artist}/>
     </div>    
  
   
  )}
)}
    </div>
  )
}

export default AllArtists

export async function getStaticProps() {

    const apolloClient = getApolloClient();
  
    const data = await apolloClient.query({
      query: ALLARTIST_QUERY
    });
    
  
    const ALL = data?.data.artists.map((artist: any) =>{
      return{
        ...artist,
          path: `/artist-details/${artist.slug}`
      }
    });
  
      return { 
        props: {
         ALL
        }
      }
  
      
  }