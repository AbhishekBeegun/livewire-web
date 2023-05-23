import React from 'react'
import {TwitterPicker} from "react-color"
const LocationControl = (
  {  Elocation,setElocation,

    ElocationSize,setElocationSize,setElocationColor} : any) => {



      
    function handleChangeComplete(color : any){
      setElocationColor(color.hex)

    }
  return (
    <div className='border-b flex flex-col w-full h-full'>  
    
    <div className='border-b py-4 w-full px-8'>
    <p className='py-2'>Location Title</p>
    <input
    placeholder='Enter Event Location'
    className='bg-transparent text-center w-full border py-2 rounded-lg'
    value={Elocation}
    onChange={(e) => setElocation(e.target.value)}  />
    </div>
    
    
    <div className='border-y p-4 w-full'>

    <p className='py-2 text-xl'>Location font Size</p>
    <div className='flex justify-evenly'>
    <p className='py-2'>{ElocationSize} px</p>
    <input type='range' step="1" min="20" max="80"
    value={ElocationSize}
    onChange={(e) => setElocationSize(e.target.value)} />
    </div>
    </div>

    <div className='border-y p-4 w-full flex flex-col  justify-center' >
    <p className='py-4 text-xl'>Location Color</p>
    <TwitterPicker
    color="#F40000"
    onChangeComplete={ handleChangeComplete } />
    </div>  
    </div>
  )
}

export default LocationControl