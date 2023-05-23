import React, { useState } from 'react'

const BackgroundImg = ({setBkImg} : any) => {

  const [CurrentImg, setCurrentImg] = useState<any>()

  function example1 (){
    setBkImg("https://images.squarespace-cdn.com/content/v1/5d2cc79f262d250001516965/1615318486513-EP5W6CYE9PB6NEYFLFO3/Abstract+Gradients+in+Canva?format=1000w"),
    setCurrentImg("https://images.squarespace-cdn.com/content/v1/5d2cc79f262d250001516965/1615318486513-EP5W6CYE9PB6NEYFLFO3/Abstract+Gradients+in+Canva?format=1000w")
  }
  function example2(){
    setBkImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1wicwUCQ5BDwn6__3kfZLDOC9QALpY0N4g&usqp=CAU"),
    setCurrentImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1wicwUCQ5BDwn6__3kfZLDOC9QALpY0N4g&usqp=CAU")
  }

  return (
    <div className='flex flex-col w-full h-full border-y p-4 '>  
    <p className='text-xl py-4'>SET BACKGROUND IMAGE</p>
    <p>----- URL ONLY -----</p>
    <form className='py-4'>
    <input className='w-full px-4 py-2 border rounded-lg text-lg bg-transparent overflow-hidden'
    placeholder='Paste URL here'
    onChange={(e) => {setBkImg(e.target.value),setCurrentImg(e.target.value) }}
    />
    </form>

    <div className='w-full flex items-center justify-center'>
      <img className='w-full h-full object-contain border'
       src={CurrentImg} alt=''/>
    </div>

    <div className='py-4 flex gap-5'>
      <button 
      className='px-4 py-2 border rounded-lg'
      onClick={ () => example1()}>Example 1</button>

      <button 
      className='px-4 py-2 border rounded-lg'
      onClick={ () => example2()}>Example 2</button>
    </div>
    </div>
  )
}

export default BackgroundImg
