import React, { useState } from 'react'
import Sidebar from '~/components/PosterMaker/Sidebar'
import OpenSidebar from '~/components/PosterMaker/OpenSidebar'
import Templateone from '~/components/PosterMaker/Template/Templateone'
// import Templatetwo from '~/components/PosterMaker/Template/Templatetwo'
import PosterExample from '~/components/PosterMaker/PosterExample'
import HeadDetails from '~/components/BasicLayout/HeadDetails'


const Postermaker = () => {





    const [ShowSidebar, setShowSidebar] = useState(false);
    
    const [BkImg, setBkImg] = useState<any>(
"https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-2826.jpg"
    )
    const [Title, setTitle] = useState<any>("THE WEEKND")
    const [TitleSize, setTitleSize] = useState(80)
    const [TitleColor, setTitleColor] = useState("#F40000")

    const [ImgPoster, setImgPoster] = useState<any>(
"https://media.graphassets.com/output=format:png/resize=height:800,fit:max/bAfm79jQRvClvH9Un2sb"
      )
    const [ImgScale, setImgScale] = useState(1.6)

    const [Elocation, setElocation] = useState<any>("Cote D'Or, St Pierre")
    const [ElocationSize, setElocationSize] = useState(40)
    const [ElocationColor, setElocationColor] = useState("#F40000")



    const [Edate, setEdate] = useState("SUNDAY 31 FEB 2025")
    const [EdateSize, setEdateSize] = useState(20)
    const [EdateColor, setEdateColor] = useState("#F40000")


 
    



  return (
    <div className='flex flex-col lg:flex-row py-16 justify-center gap-20 items-center'>
      <HeadDetails title={"Poster Maker"}/>
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
        Edate={Edate} setEdate={setEdate}
        setEdateColor={setEdateColor}
        setEdateSize={setEdateSize} EdateSize ={EdateSize}/>
        </>
         : <></>
        }

        <PosterExample />
        

        <Templateone 
        BkImg={BkImg}    
        Title={Title} setTitle={setTitle}
        TitleSize={TitleSize} TitleColor={TitleColor}
        ImgPoster={ImgPoster}
        ImgScale={ImgScale}
        Elocation={Elocation} setElocation={setElocation}
        ElocationSize={ElocationSize}
        ElocationColor={ElocationColor}
        Edate={Edate}
        EdateColor={EdateColor}
        EdateSize ={EdateSize}
        />
    

     




        {/* <Templatetwo
        BkImg={BkImg}    
        Title={Title} setTitle={setTitle}
        TitleSize={TitleSize} TitleColor={TitleColor}
        ImgPoster={ImgPoster}
        ImgScale={ImgScale}
        Elocation={Elocation} setElocation={setElocation}
        ElocationSize={ElocationSize}
        ElocationColor={ElocationColor}
        Edate={Edate}
        EdateColor={EdateColor}
        EdateSize ={EdateSize}/>
   */}
  
  </div>


  )
}

export default Postermaker