import React ,{useState} from 'react'
import { SketchPicker } from 'react-color'


const TitleControl = (
  {Title,setTitle,
  TitleSize,setTitleSize,
  setTitleColor} : any) => {


    function handleChangeComplete(color : any){
      setTitleColor(color.hex)

    }
  return (
    <div className='border-b flex flex-col items-center w-full h-full justify-center'>
    
    <div className='border-y py-4 w-full text-center'>
    <p className='text-2xl py-2'>Enter Title</p>
    <input
     className='bg-transparent text-center border py-4 rounded-lg'
     value={Title}
     placeholder='Enter Title'
     onChange={(e) => setTitle(e.target.value)}  />
    </div>

    
    
    <div className='border-y py-4 w-full text-center'>
    <p className='text-2xl py-2'>Title Font Size</p>
    <p className='text-xl'>{TitleSize} px</p>
    <input
    className="py-2"
    type='range' step="2" min="25" max="120"
    value={TitleSize}
    onChange={(e) => setTitleSize(e.target.value)} />
    </div>

    <div className='border-y py-4 w-full text-center flex flex-col items-center justify-center' >
    <p className='py-4 text-xl text-center'>Title Color</p>
    <SketchPicker
    color="#F40000"
    onChangeComplete={ handleChangeComplete } />
    </div>    
    </div>
  )
}

export default TitleControl