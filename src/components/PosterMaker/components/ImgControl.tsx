import React from 'react'

const ImgControl = ({ImgScale,setImgScale} : any) => {
  return (
    <>
    <p>Img Scale</p>
    <input type='range' 
    value={ImgScale}
    min={0.5} max={2.5} step={0.1}
    onChange={(e) => setImgScale(e.target.value)}
     />
    </>
  )
}

export default ImgControl