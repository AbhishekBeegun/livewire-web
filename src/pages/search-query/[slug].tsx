import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'
import SearchResult from '~/components/Search/SearchResult'
import { SEARCHARTIST_QUERY } from '~/lib/Queries'
import { getApolloClient } from '~/lib/apollo-client'

const Slug = ({SR} : any) => {
   
  return (
    <>
    <SearchResult artist={SR} />
    </>
  )
}

export default Slug

export async function getStaticProps({ params = {} } = {}) {
 
    const {slug} = params as Params;
   
     const apolloClient = getApolloClient();
   
     const data = await apolloClient.query({
       query: SEARCHARTIST_QUERY
       ,
      variables: {
        slug: slug,
      }
        
     });
   
   
     const SR = data?.data.artists.map((artist: any) =>{
        return{
          ...artist,
        }
      });
      return { 
        props: {
       SR
      }
   }
   
}
   export async function getStaticPaths() {
     return {
       paths: [],
       fallback: 'blocking'
     }
   }