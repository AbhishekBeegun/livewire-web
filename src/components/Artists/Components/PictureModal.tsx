import React from 'react'

const PictureModal = ({setShowModal,setLocked,CurrentImg,setCurrentImg} : any) => {
  return (
    <div className='bg-black z-30 flex justify-center items-center h-screen w-screen bg-opacity-70 fixed top-0 left-0'>
        <div typeof='button' onClick={() => {setLocked(false),setShowModal(false),setCurrentImg('')}}
        className='h-[60%] lg:h-[90%] lg:w-[60%] w-full flex justify-center items-center'>
            <img src={CurrentImg} alt='Img'
            className='w-full h-full object-contain' />
         <p className='fixed top-20 text-white text-lg uppercase'>Tap on image to close</p>
        </div>        
    </div>
  )
}

export default PictureModal