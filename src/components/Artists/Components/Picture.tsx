import React from 'react'
import { useState } from 'react';
import PictureModal from './PictureModal';
import { useLockedBody } from 'usehooks-ts';

const Picture = ({grid} : any) => {

  const [ShowModal, setShowModal] = useState(false)
  const [locked, setLocked] = useLockedBody(false, 'root')
  const [CurrentImg, setCurrentImg] = useState()

  function openImgModal(img : any){
    setShowModal(!ShowModal)
    setLocked(!locked)
    setCurrentImg(img)
    console.log(CurrentImg)
  }
  return (
    <div className="px-2 py-2 lg:px-96 bg-black relative">
    {/* photos */}
    <div className="rounded-lg ">
      <div className="px-4 py-2 bg-white rounded-t-lg">
      <p  
      className="font-semibold text-black">Photos</p>   
      </div>

    </div>

    <div className='flex flex-row flex-wrap w-full'>
      {grid && grid?.map( (o: any) => (
        <div
        key={o.url} 
        className='w-1/2'>

        <img className='h-[200px] lg:h-[350px] w-full object-cover bg-white'
          src={ o.url }
          onClick={ () => openImgModal(o.url) }
          alt="img"
          />
          </div>

      ))}

    </div>

    {ShowModal ? 

    <PictureModal
    CurrentImg={CurrentImg}
    setCurrentImg={setCurrentImg}
    setLocked={setLocked}
     setShowModal={setShowModal}/> 

    : <></>}
    </div>
  )
}

export default Picture