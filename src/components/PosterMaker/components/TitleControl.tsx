import React from 'react'
import {TwitterPicker} from 'react-color'

const TitleControl = (
  {Title,setTitle,
  TitleSize,setTitleSize,
  setTitleColor} : any) => {


    function handleChangeComplete(color : any){
      setTitleColor(color.hex)

    }
  return (
    <div className='border-b flex flex-col items-center w-full h-full'>
    
    <div className='border-y p-4 w-full'>
    <p className='text-xl py-2'>Change Title</p>
    <input
     className='bg-transparent text-center border py-4 rounded-lg w-full' 
     value={Title}
     placeholder='Enter Title'
     onChange={(e) => setTitle(e.target.value)}  />
    </div>

    
    
    <div className='border-y p-4 w-full'>
    <p className='text-xl py-2'>Title Font Size</p>
    <div className='flex justify-evenly'> 
    <p className='text-xl'>{TitleSize} px</p>
    <input
    className="py-2"
    type='range' step="2" min="25" max="120"
    value={TitleSize}
    onChange={(e) => setTitleSize(e.target.value)} />
    </div>
    </div>

    <div className='border-y p-4 w-full flex flex-col ' >
    <p className='py-4 text-xl'>Title Color</p>
    <TwitterPicker
    color="#F40000"
    onChangeComplete={ handleChangeComplete } />
    </div>    
    </div>
  )
}

export default TitleControl