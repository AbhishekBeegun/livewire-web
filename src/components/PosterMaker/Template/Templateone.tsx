import React from 'react'
import Image from 'next/image'
import PosterTitle from '../components/PosterTitle'
import PosterImg from '../components/PosterImg'
import PosterLocation from '../components/PosterLocation'
import PosterDate from '../components/PosterDate'
import logo from "../../../../public/logo-r.png"
const Templateone = (
  {BkImg,
  Title,setTitle,
  TitleSize,TitleColor,
  ImgPoster,ImgScale,
  Elocation, ElocationColor,
  ElocationSize,
  Edate,setEdate ,
  EdateSize} : any) => {

  return (
    <div className='flex flex-col overflow-hidden justify-evenly items-center w-[600px] h-[850px] border'>
      
      <img className='absolute w-[600px] h-[850px] -z-10 object-cover'
       src={BkImg} alt='backimg' />
      
      <PosterTitle 
      Title={Title} setTitle={setTitle}
      TitleSize={TitleSize} TitleColor={TitleColor}/>
      
      <PosterImg 
      ImgPoster={ImgPoster} 
      ImgScale={ImgScale}/>
      
      <PosterLocation
      Elocation={Elocation}
      ElocationSize={ElocationSize} 
      ElocationColor={ElocationColor}/>

      <PosterDate Edate={Edate} setEdate={setEdate}
       EdateSize ={EdateSize}/>

       <div className='w-16 h-auto z-50'>
        <Image src={logo} alt="" />
       </div>


    </div>
  )
}

export default Templateone