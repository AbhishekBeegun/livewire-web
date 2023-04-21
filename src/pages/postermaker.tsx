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
        "https://media.istockphoto.com/id/1335565472/vector/versus-vs-fight-battle-red-and-blue-background-screen-design.jpg?s=612x612&w=0&k=20&c=wNiRZMlVIFO780H8YxSLAWgWTT5yO9w17oDIuoqpFLk="   
    )
    const [Title, setTitle] = useState<any>("Lil Pump")
    const [TitleSize, setTitleSize] = useState(75)

    const [ImgPoster, setImgPoster] = useState<any>(img)
    const [ImgScale, setImgScale] = useState(1.2)

    const [Elocation, setElocation] = useState<any>("Cote dór")
    const [ElocationSize, setElocationSize] = useState(20)


   
  return (
    <div className='flex flex-col h-[110vh] justify-center items-center'>
        <OpenSidebar setShowSidebar={setShowSidebar} />

        {ShowSidebar ? 
        <>
        <Sidebar 
        setShowSidebar={setShowSidebar}
        setBkImg={setBkImg}
        TitleSize={TitleSize} setTitleSize={setTitleSize}
        ImgScale={ImgScale} setImgScale={setImgScale}
        ElocationSize={ElocationSize} setElocationSize={setElocationSize}/>
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
        />

      
       
       
       

  </div>


  )
}

export default Postermaker