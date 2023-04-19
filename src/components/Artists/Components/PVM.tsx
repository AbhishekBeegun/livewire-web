import React from 'react'
import Picture from './Picture'
import Video from './Video'
import Music from './Music'

const PVM = ({photos,video,deezer} : any) => {
  return (
    <>
    <Picture grid={photos}/>
    <Video video={video}/>
    {/* <Music deezerID={deezer}/> */}
    </>
  )
}

export default PVM