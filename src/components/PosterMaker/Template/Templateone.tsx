import React from 'react'
import PosterTitle from '../components/PosterTitle'
import PosterImg from '../components/PosterImg'
import PosterLocation from '../components/PosterLocation'
import PosterDate from '../components/PosterDate'

const Templateone = (
  {BkImg,
  Title,setTitle,
  TitleSize,
  ImgPoster,ImgScale,
  Elocation, setElocation,
  ElocationSize,
  Edate,setEdate ,
  EdateSize} : any) => {

  return (
    <div className='flex flex-col overflow-hidden justify-evenly items-center w-[600px] h-[850px] border'>
      
      <img className='absolute w-[600px] h-[850px] -z-10 object-cover'
       src={BkImg} alt='backimg' />
      
      <PosterTitle 
      Title={Title} setTitle={setTitle}
      TitleSize={TitleSize}/>
      
      <PosterImg 
      ImgPoster={ImgPoster} 
      ImgScale={ImgScale}/>
      
      <PosterLocation
      Elocation={Elocation} setELocation={setElocation}
      ElocationSize={ElocationSize} />

      <PosterDate Edate={Edate} setEdate={setEdate}
       EdateSize ={EdateSize}/>
    </div>
  )
}

export default Templateone