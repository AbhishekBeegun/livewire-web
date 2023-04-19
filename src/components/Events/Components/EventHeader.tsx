import React from 'react'

const EventHeader = ({
  cover,title,locationT,date} : any) => {

    const newDate = date.slice(0,10)
  return (
    <div className="h-[40vh] lg:h-[90vh] w-full m-auto bg-black relative ">
    <img className='w-full h-full object-cover' 
    src={`${cover?.url}`} />
  

      <div className="absolute bg-gradient-to-t from-black bottom-0 left-0 flex flex-row h-[120px] lg:h-[200px] w-full items-center justify-center ">
        
              
        {/* event name & Rating location */}
        <div className="flex flex-col justify-evenly items-center px-8">
        {/* event name */}
   
          <h1  
          className="text-lg lg:text-4xl font-semibold text-center text-white">{title}

          </h1>
       

        
      


          {/* location */}
         
            <p  
            className="text-xs lg:text-lg text-white">{locationT}</p>
    
      

   
        <p  
          className="text-xs lg:text-lg py-2 text-white">{newDate}</p>
     
        </div>

      </div>

      
  </div>
  )
}

export default EventHeader