import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {IoIosPlay} from "react-icons/io"
import {IoIosPause} from "react-icons/io"


const DeezerPlay = ({deezerID} : any) => {

    const [Playlistdata, setPlaylistdata] = useState<any>()

    const [isPlaying, setisPlaying] = useState()


    const options = {
        method: 'GET',
        url: `https://api.deezer.com/artist/${deezerID}/top?limit=5`,
        headers: {
          'X-RapidAPI-Key': process.env.DEEZER_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
          'Content-Type': 'application/json'
          
        }
      };


      const fetchData = async () => {


        try {
            const response = await axios.request(options)
            setPlaylistdata(response.data.data)
       

        } catch (error){
            console.log(error);
            alert("Error fetching data")
            
        } 
      }

      useEffect(() => {
        fetchData();
      }, [])

  return (
    <>
     <div>
      {Playlistdata && Playlistdata?.map((item : any) => {
        return (
          <div key={item?.id}
          onClick={()=>{} }
          className="w-full h-auto flex flex-row items-center justify-between border px-4 py-1">
            <div className="h-[80px] w-[80px]" >
              <img className="w-full h-full rounded-full"
              src={ `${item?.album.cover_medium}`}
              />
            </div>

            <p 
            className="text-white font-semibold text-xs">{item?.title}</p>
              {isPlaying ? 
              <IoIosPause  size={15} color="white"/>      
               :<IoIosPlay size={13} color="white" />      
              }
          </div>
        )
      })}
     </div>
    </>
  )
}

export default DeezerPlay