import React from 'react'
import EventHeader from './Components/EventHeader'
import EventAbout from './Components/EventAbout'
import EventLocation from './Components/EventLocation'
import EventTickets from './Components/EventTickets'
import EventArtists from './Components/EventArtists'
import EventMusicVideo from './Components/EventMusicVideo'
import HeadDetails from '../BasicLayout/HeadDetails'

const EventDetails = ({EVD} : any) => {
  return (
    <>
    <HeadDetails title={EVD.title}/>
    <EventHeader
    cover={EVD.poster}
    title={EVD.title}
    locationT={EVD.locationTitle}
    date={EVD.date}/>

    <EventAbout
    nmrl={EVD.nmltickets}
    vip={EVD.viptickets}
    vvip={EVD.abovevip}
    title={EVD.title}
    desc={EVD.eventdescription}/>

    <EventArtists
    artist={EVD.artist[0]}/>
    <EventLocation
    locationT={EVD.locationTitle}
    coord={EVD.location}/>
    <EventTickets
    nmrl={EVD.nmltickets}
    vip={EVD.viptickets}
    vvip={EVD.abovevip}/>
    <EventMusicVideo
    artist={EVD.artist[0]}
    />
    </>
  )
}

export default EventDetails