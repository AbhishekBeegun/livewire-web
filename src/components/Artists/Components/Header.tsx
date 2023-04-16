import React from 'react'
import {AiFillStar} from "react-icons/ai"

const Header = () => {
  return (
    <div className="h-[40vh] lg:h-[90vh] w-full m-auto bg-black relative ">
      <img className='w-full h-full object-cover' 
      src='https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/gXcuM4cuT8u6nlXpmMN4' />
    

        <div className="absolute bg-gradient-to-t from-black bottom-0 left-0 flex flex-row h-[100px] lg:h-[250px] w-full items-center justify-center ">
          
          {/* artist image */}
          <div className="h-[90px] w-[90px] lg:h-[200px] lg:w-[200px] rounded-full ">
           <img src='https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/diCWSI2ASGiXAWkYx07p'
           className="h-full w-full rounded-full object-cover">
          </img>
          </div>

          {/* artist name & Rating location */}
          <div className="flex flex-col justify-evenly items-center px-8">
          {/* artist name */}
           <div>
            <h1  
            className="text-lg lg:text-4xl font-semibold text-white">Name</h1>
           </div>

          {/* rating anf location */}
          <div className="flex flex-row gap-5 items-baseline justify-center py-1">
            {/* rating */}
            <div className="flex flex-row items-center justify-center gap-1">
              <p 
              className="text-sm lg:text-lg font-semibold text-white">rating</p>
              <AiFillStar color="gold"/>
            </div>

            {/* location */}
            <div>
              <p  
              className="text-xs lg:text-lg text-white">loaction</p>
            </div>

          </div>

          <div 
          className="py-1 flex flex-row gap-1 px-4 text-white">
              <p  
               className="text-xs lg:text-lg font-semibold ">Rs minprice</p>
              <p 
              className="text-xs lg:text-lg font-semibold "> - </p>             
              <p 
              className="text-xs lg:text-lg font-semibold ">Rs maxprice</p>

            </div>
          </div>

        </div>

        
    </div>
  )
}

export default Header