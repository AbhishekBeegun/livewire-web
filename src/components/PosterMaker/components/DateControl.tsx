import React from 'react'
import { SketchPicker } from 'react-color'
import {TwitterPicker} from "react-color"

const DateControl = ({
  Edate, setEdate,
  setEdateColor,
  setEdateSize, EdateSize} : any)  => {

  function handleChangeComplete(color : any){
    setEdateColor(color.hex)

  }
  return (
    <div className='border-b flex flex-col w-full h-full'>  
    <div className='border-b py-4 w-full px-8'>
    <p className='py-2'>Date Title</p>
    <input
    placeholder='Enter Event Date'
    className='bg-transparent text-center w-full border py-2 rounded-lg'
    value={Edate}
    onChange={(e) => setEdate(e.target.value)}  />
    </div>
    
    
    <div className='border-y p-4 w-full'>

    <p className='py-2'>Date font Size</p>
    <div className='flex justify-evenly'>
    <p className='text-xl py-2'>{EdateSize} px</p>
    <input type='range' step="1" min="20" max="80"
    value={EdateSize}
    onChange={(e) => setEdateSize(e.target.value)} />
    </div>
    </div>

    <div className='border-y p-4 w-full flex flex-col justify-center' >
    <p className='py-4'>Date Color</p>
    <TwitterPicker
    color="#F40000"
    onChangeComplete={ handleChangeComplete } />
    </div>  
    </div>
  )
}

export default DateControl