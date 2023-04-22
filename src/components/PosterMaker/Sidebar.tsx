import React from 'react'
import {IoMdClose} from "react-icons/io"
import TitleControl from './components/TitleControl'
import BackgroundImg from './components/BackgroundImg'
import ImgControl from './components/ImgControl'
import LocationControl from './components/LocationControl'
import DateControl from './components/DateControl'

const Sidebar = (
  {setShowSidebar,
  setBkImg,
  TitleSize,setTitleSize,
  ImgPoster, setImgPoster,
  ImgScale,setImgScale,
  ElocationSize,setElocationSize,
  setEdateSize, EdateSize} : any) => {
  return (
    <div className='fixed top-0 left-0 h-screen w-96 z-50
     flex flex-col items-center bg-black text-white overflow-scroll'>
        <button
        className='p-2 bg-white rounded-lg' 
        onClick={() => setShowSidebar(false)}>
          <IoMdClose size={20} color='black' />
        </button>

        <BackgroundImg setBkImg={setBkImg}/>

        <TitleControl 
        TitleSize={TitleSize} setTitleSize={setTitleSize}/>

        <ImgControl 
        ImgPoster={ImgPoster} setImgPoster={setImgPoster}
        ImgScale={ImgScale} setImgScale={setImgScale} />

        <LocationControl 
        ElocationSize={ElocationSize} setElocationSize={setElocationSize} />
        

        <DateControl 
        setEdateSize={setEdateSize} EdateSize ={EdateSize}
        />
    </div>
  )
}

export default Sidebar