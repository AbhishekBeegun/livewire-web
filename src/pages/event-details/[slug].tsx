import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'
import EventDetails from '~/components/Events/EventDetails'
import { EVENT_DETAILS } from '~/lib/Queries'
import { getApolloClient } from '~/lib/apollo-client'

const Slug = ({EVD} : any) => {

  console.log(EVD)
  return (
    <>
        <EventDetails EVD={EVD}/>
    </>
  )
}

export default Slug

export async function getStaticProps({ params = {} } = {}) {
 
  const {slug} = params as Params;
 
   const apolloClient = getApolloClient();
 
   const data = await apolloClient.query({
     query: EVENT_DETAILS
     ,
    variables: {
      slug: slug,
    }
      
   });
 
 
  const EVD = data?.data.event
     return { 
       props: {
       EVD
       }
     }
 }
 
 export async function getStaticPaths() {
   return {
     paths: [],
     fallback: 'blocking'
   }
 }
