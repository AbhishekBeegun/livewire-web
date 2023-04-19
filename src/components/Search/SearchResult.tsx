import React from 'react'
import ArtistCard from '../Artists/ArtistCard'

const SearchResult = ({artist} :any) => {
  return (
    <div className='h-screen pt-10 flex flex-col w-[500px]'>

        <ArtistCard artist={artist}/>        
    </div>
  )
}

export default SearchResult