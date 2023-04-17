import React from 'react'
import EventHeader from './Components/EventHeader'
import EventAbout from './Components/EventAbout'
import EventLocation from './Components/EventLocation'
import EventTickets from './Components/EventTickets'
import EventArtists from './Components/EventArtists'
import EventMusicVideo from './Components/EventMusicVideo'

const EventDetails = () => {
  return (
    <>
    <EventHeader/>
    <EventAbout/>
    <EventLocation/>
    <EventTickets/>
    <EventArtists/>
    <EventMusicVideo/>
    </>
  )
}

export default EventDetails