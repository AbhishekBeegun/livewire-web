import React, { useEffect, useState } from 'react'

const BackgroundImg = ({setBkImg} : any) => {
  return (
    <>
    <p>Set BackGround img URL only</p>
    <form>
    <input 
    onChange={(e) => setBkImg(e.target.value) }
    />
    </form>
    </>
  )
}

export default BackgroundImg

function preventDefault() {
  throw new Error('Function not implemented.')
}
