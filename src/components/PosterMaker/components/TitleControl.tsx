import React from 'react'

const TitleControl = (
  {TitleSize,setTitleSize} : any) => {
  return (
    <>
    <p className='text-2xl'>Title Font Size</p>
    <input type='range' step="25" min="25" max="125"
    value={TitleSize}
    onChange={(e) => setTitleSize(e.target.value)} />
    </>
  )
}

export default TitleControl