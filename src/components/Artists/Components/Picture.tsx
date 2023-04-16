import React from 'react'

const Picture = () => {
  return (
    <div className="px-2 py-2 lg:px-96 bg-black">
    {/* photos */}
    <div className="rounded-lg ">
      <div className="px-4 py-3 bg-white rounded-t-lg">
      <p  
      className="font-semibold text-black">Photos</p>   
      </div>

    </div>

    <div className='flex flex-wrap'>
      <div className='bg-red-500 h-[200px] lg:h-[350px] w-1/2'></div>
      <div className='bg-sky-500 h-[200px] lg:h-[350px] w-1/2'></div>
      <div className='bg-yellow-500 h-[200px] lg:h-[350px] w-1/2'></div>
      <div className='bg-green-500 h-[200px] lg:h-[350px] w-1/2' ></div>
    </div>

    </div>
  )
}

export default Picture