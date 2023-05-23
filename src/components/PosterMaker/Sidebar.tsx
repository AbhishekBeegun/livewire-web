import React, { useState } from 'react'
import logo from "../../../public/logo-r.png"
import Image from 'next/image'
import {IoMdClose} from "react-icons/io"
import {MdImagesearchRoller,MdImage,MdTitle,
MdLocationOn,MdDateRange,MdQuestionMark} from "react-icons/md"
import TitleControl from './components/TitleControl'
import BackgroundImg from './components/BackgroundImg'
import ImgControl from './components/ImgControl'
import LocationControl from './components/LocationControl'
import DateControl from './components/DateControl'

const Sidebar = (
  {setShowSidebar,
  setBkImg,
  Title,setTitle,
  TitleSize,setTitleSize,setTitleColor,
  ImgPoster, setImgPoster,
  ImgScale,setImgScale,
  Elocation,setElocation,
  ElocationSize,setElocationSize,
  setElocationColor,
  setEdateSize, EdateSize,
  Edate, setEdate,
  setEdateColor} : any) => {


    const [ShowTitle, setShowTitle] = useState<any>(true)
    const [ShowBckImg, setShowBckImg] = useState<any>(false)
    const [ShowImgPoster, setShowImgPoster] = useState<any>(false)
    const [ShowElocation, setShowElocation] = useState<any>(false)
    const [ShowEdate, setShowEdate] = useState<any>(false)

   function ClickTitle(){
    setShowTitle(true)
    setShowBckImg(false)
    setShowImgPoster(false)
    setShowElocation(false)
    setShowEdate(false)
   }
   function ClickBckImg(){
    setShowTitle(false)
    setShowBckImg(true)
    setShowImgPoster(false)
    setShowElocation(false)
    setShowEdate(false)
   }
   function ClickImgPoster(){
    setShowTitle(false)
    setShowBckImg(false)
    setShowImgPoster(true)
    setShowElocation(false)
    setShowEdate(false)
   }

   function ClickElocation(){
    setShowTitle(false)
    setShowBckImg(false)
    setShowImgPoster(false)
    setShowElocation(true)
    setShowEdate(false)
   }
   function ClickEdate(){
    setShowTitle(false)
    setShowBckImg(false)
    setShowImgPoster(false)
    setShowElocation(false)
    setShowEdate(true)
   }



  return (
    <div className='fixed top-0 left-0 lg:h-screen lg:w-[30vw] z-50
     flex flex-row items-center bg-black text-white overflow-scroll'>
        <button
        className='p-2 absolute top-2 right-4 bg-white rounded-lg' 
        onClick={() => setShowSidebar(false)}>
          <IoMdClose size={20} color='black' />
        </button>

        <div className='flex flex-col items-center px-4 h-screen text-2xl text-black gap-10 border-r'>
        <button className='w-12 h-auto'>
          <Image src={logo} alt="Logo" />
        </button>

        <button
        title='TITLE'
        onClick={ClickTitle} 
        className='p-2 rounded-lg focus:bg-orange-400 bg-white flex items-center'><MdTitle/><span className='text-sm'>Title</span></button>

        <button 
        title='BACKGROUND IMAGE'
        onClick={ClickBckImg}
        className='p-2 rounded-lg focus:bg-orange-400 bg-white flex items-center'><MdImagesearchRoller/><span className='text-sm'>Background</span></button>

        <button 
        title='POSTER IMAGE'
        onClick={ClickImgPoster}
        className='p-2 rounded-lg focus:bg-orange-400 bg-white flex items-center'><MdImage/> <span className='text-sm'>Poster Image</span></button>

        <button 
        title='EVENT LOCATION'
        onClick={ClickElocation}
        className='p-2 rounded-lg focus:bg-orange-400 bg-white flex items-center'><MdLocationOn/> <span className='text-sm'>Location Title</span></button>

        <button 
        title='EVENT DATE'
        onClick={ClickEdate}
        className='p-2 rounded-lg focus:bg-orange-400 bg-white flex items-center'><MdDateRange/> <span className='text-sm'>Date Title</span></button>

        <button 
        title='ISSUES TO FIX'
        className='p-2 rounded-lg focus:bg-orange-400 bg-white'><MdQuestionMark/></button>



        </div>


        {ShowTitle ? 
        <TitleControl 
        Title={Title} setTitle={setTitle}
        TitleSize={TitleSize} setTitleSize={setTitleSize}
        setTitleColor={setTitleColor}/>
        : 
        <></>
        }
        
        
        
        {ShowBckImg ? 
        <BackgroundImg 
        setBkImg={setBkImg}/>
        :
        <></>
        }
       
    
    

        {ShowImgPoster ? 
        <ImgControl 
        ImgPoster={ImgPoster} setImgPoster={setImgPoster}
        ImgScale={ImgScale} setImgScale={setImgScale} />
        : 
        <></>
        }
         
        {ShowElocation ?
        <LocationControl 
        Elocation={Elocation} setElocation={setElocation}
        ElocationSize={ElocationSize} setElocationSize={setElocationSize}
        setElocationColor={setElocationColor} />
        :
        <></>
        }
        
        
        {ShowEdate ? 
        <DateControl 
        Edate={Edate} setEdate={setEdate}
        setEdateSize={setEdateSize} EdateSize ={EdateSize}
        setEdateColor={setEdateColor}
        />
        :
        <></>
        }
        
    </div>
  )
}

export default Sidebar