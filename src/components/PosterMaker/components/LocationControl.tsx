import React from 'react'

const LocationControl = (
  {ElocationSize,setElocationSize} : any) => {
  return (
    <>
    <p className='text-2xl'>Location Font Size</p>
    <input type='range' step="10" min="20" max="80"
    value={ElocationSize}
    onChange={(e) => setElocationSize(e.target.value)} />
    </>
  )
}

export default LocationControl