import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Sidebar from '~/components/PosterMaker/Sidebar'
import OpenSidebar from '~/components/PosterMaker/OpenSidebar'
import Templateone from '~/components/PosterMaker/Template/Templateone'

const Postermaker = () => {

    const [ShowSidebar, setShowSidebar] = useState(true);
    
    const [BkImg, setBkImg] = useState<any>(
"https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2826.jpg"
    )
    const [Title, setTitle] = useState<any>("THE WEEKND")
    const [TitleSize, setTitleSize] = useState(80)
    const [TitleColor, setTitleColor] = useState("#F40000")

    const [ImgPoster, setImgPoster] = useState<any>(
     "https://o.remove.bg/downloads/d93d778b-d617-4d8b-91ed-586ff8edfd4f/photo_202110_07_GENERAL-BRIANZIFF_THEWEEKND_800_1-WITH-BEAUTY-crop-1-removebg-preview.png"
      )
    const [ImgScale, setImgScale] = useState(1.6)

    const [Elocation, setElocation] = useState<any>("Cote D'Or, St Pierre")
    const [ElocationSize, setElocationSize] = useState(40)
    const [ElocationColor, setElocationColor] = useState("#F40000")



    const [Edate, setEdate] = useState("SUNDAY 31 FEB 2025")
    const [EdateSize, setEdateSize] = useState(20)
    const [EdateColor, setEdateColor] = useState("#F40000")

    

   
  return (
    <div className='flex flex-col py-16 justify-center items-center'>
        <OpenSidebar setShowSidebar={setShowSidebar} />

        {ShowSidebar ? 
        <>
        <Sidebar 
        setShowSidebar={setShowSidebar}
        setBkImg={setBkImg}
        Title={Title} setTitle={setTitle}
        TitleSize={TitleSize} setTitleSize={setTitleSize}
        setTitleColor={setTitleColor}
        ImgPoster={ImgPoster} setImgPoster={setImgPoster}
        ImgScale={ImgScale} setImgScale={setImgScale}
        Elocation={Elocation} setElocation={setElocation}
        ElocationSize={ElocationSize} setElocationSize={setElocationSize}
        setElocationColor={setElocationColor}
        setEdateColor={setEdateColor}
        setEdateSize={setEdateSize} EdateSize ={EdateSize}/>
        </>
         : <></>
        }

        <Templateone 
        BkImg={BkImg}    
        Title={Title} setTitle={setTitle}
        TitleSize={TitleSize} TitleColor={TitleColor}
        ImgPoster={ImgPoster}
        ImgScale={ImgScale}
        Elocation={Elocation} setElocation={setElocation}
        ElocationSize={ElocationSize}
        ElocationColor={ElocationColor}
        Edate={Edate} setEdate={setEdate}
        EdateSize ={EdateSize}
        />
  </div>


  )
}

export default Postermaker