import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChromePicker, SketchPicker } from 'react-color'
import Sidebar from '~/components/PosterMaker/Sidebar'
import OpenSidebar from '~/components/PosterMaker/OpenSidebar'
import Templateone from '~/components/PosterMaker/Template/Templateone'
import lilpump from "../../public/PosterMaker/lil_pump-removebg-preview.png"

const img = lilpump

const Postermaker = () => {

    const [ShowSidebar, setShowSidebar] = useState(true);
    
    const [BkImg, setBkImg] = useState<any>(
"https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2826.jpg"
    )
    const [Title, setTitle] = useState<any>("THE WEEKND")
    const [TitleSize, setTitleSize] = useState(80)

    const [ImgPoster, setImgPoster] = useState<any>(
      "https://o.remove.bg/downloads/a2f3377f-7f08-41d9-8b0f-938bc1353f42/photo_202110_07_GENERAL-BRIANZIFF_THEWEEKND_800_1-WITH-BEAUTY-crop-1-removebg-preview.png"
    )
    const [ImgScale, setImgScale] = useState(1.6)

    const [Elocation, setElocation] = useState<any>("Cote D'Or, St Pierre")
    const [ElocationSize, setElocationSize] = useState(40)


    const [Edate, setEdate] = useState("SUNDAY 31 FEB 2025")
    const [EdateSize, setEdateSize] = useState(20)

   
  return (
    <div className='flex flex-col py-16 justify-center items-center'>
        <OpenSidebar setShowSidebar={setShowSidebar} />

        {ShowSidebar ? 
        <>
        <Sidebar 
        setShowSidebar={setShowSidebar}
        setBkImg={setBkImg}
        TitleSize={TitleSize} setTitleSize={setTitleSize}
        ImgPoster={ImgPoster} setImgPoster={setImgPoster}
        ImgScale={ImgScale} setImgScale={setImgScale}
        ElocationSize={ElocationSize} setElocationSize={setElocationSize}
        setEdateSize={setEdateSize} EdateSize ={EdateSize}/>
        </>
         : <></>
        }

        <Templateone 
        BkImg={BkImg}    
        Title={Title} setTitle={setTitle}
        TitleSize={TitleSize}
        ImgPoster={ImgPoster}
        ImgScale={ImgScale}
        Elocation={Elocation} setElocation={setElocation}
        ElocationSize={ElocationSize}
        Edate={Edate} setEdate={setEdate}
        EdateSize ={EdateSize}
        />
  </div>


  )
}

export default Postermaker