import React from 'react'
import {IoMdClose} from "react-icons/io"
import TitleControl from './components/TitleControl'
import BackgroundImg from './components/BackgroundImg'
import ImgControl from './components/ImgControl'
import LocationControl from './components/LocationControl'

const Sidebar = (
  {setShowSidebar,
  setBkImg,
  TitleSize,setTitleSize,
  ImgScale,setImgScale,
  ElocationSize,setElocationSize} : any) => {
  return (
    <div className='fixed top-0 left-0 h-screen w-96 z-50
     bg-red-200 flex flex-col items-center'>
        <button
        className='p-4 bg-white rounded-lg' 
        onClick={() => setShowSidebar(false)}>
          <IoMdClose size={20} />
        </button>

        <BackgroundImg setBkImg={setBkImg}/>

        <TitleControl 
        TitleSize={TitleSize} setTitleSize={setTitleSize}/>

        <ImgControl 
        ImgScale={ImgScale} setImgScale={setImgScale} />

        <LocationControl ElocationSize={ElocationSize} setElocationSize={setElocationSize} />
    </div>
  )
}

export default Sidebar