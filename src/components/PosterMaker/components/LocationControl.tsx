import React from 'react'
import { SketchPicker } from 'react-color'

const LocationControl = (
  {  Elocation,setElocation,

    ElocationSize,setElocationSize,setElocationColor} : any) => {



      
    function handleChangeComplete(color : any){
      setElocationColor(color.hex)

    }
  return (
    <div className='border-b flex flex-col items-center w-full h-full text-2xl py-2'>  
    
    <div className='border-b py-4 w-full text-center px-8'>
    <p className='py-2'>Location Title</p>
    <input
    placeholder='Enter Event Location'
    className='bg-transparent text-center w-full border py-2 rounded-lg'
    value={Elocation}
    onChange={(e) => setElocation(e.target.value)}  />
    </div>
    
    
    <div className='border-y py-4 w-full text-center'>

    <p className='py-2'>Location font Size</p>
    <p className='text-xl py-2'>{ElocationSize} px</p>
    <input type='range' step="1" min="20" max="80"
    value={ElocationSize}
    onChange={(e) => setElocationSize(e.target.value)} />
    </div>

    <div className='border-y py-4 w-full text-center flex flex-col items-center justify-center' >
    <p className='py-4 text-xl text-center'>Location Color</p>
    <SketchPicker
    color="#F40000"
    onChangeComplete={ handleChangeComplete } />
    </div>  
    </div>
  )
}

export default LocationControl