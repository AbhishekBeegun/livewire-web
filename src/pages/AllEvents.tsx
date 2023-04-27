import React, { useState } from 'react'
import HeadDetails from '~/components/BasicLayout/HeadDetails'
import EventCard from '~/components/Events/EventCard'
import { ALLEVENT_QUERY } from '~/lib/Queries'
import {getApolloClient} from '~/lib/apollo-client'


const AllEvents = ({ALLEV} : any) => {

    const [ALLEVENTS] = useState(ALLEV)

  return (
    
    <div className='flex flex-row bg-black gap-4 items-center justify-center w-screen flex-wrap py-16 px-4 lg:px-20'>
     <HeadDetails title={"All Events"}/>
{ALLEVENTS && ALLEVENTS.length > 0 && ALLEVENTS.map( (event: any) => {
  return(
      <div 
      key={event?.slug}

      className='w-full lg:w-[400px] z-10 py-2'>  
      <EventCard event = {event}/>
    </div>
  )}
)}

    </div>
  )
}

export default AllEvents


export async function getStaticProps() {

    const apolloClient = getApolloClient();
  
    const data = await apolloClient.query({
      query: ALLEVENT_QUERY
    });
    
  
    const ALLEV = data?.data.events.map((event: any) =>{
        return{
          ...event
        }
      });
  
      return { 
        props: {
         ALLEV
        }
      }
  
      
  }