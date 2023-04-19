import React from 'react'

const EventTickets = ({nmrl,vip,vvip} : any) => {
  return (
    <div className="px-2 py-4 bg-black lg:px-96">
        <div className="px-4 py-2 bg-white rounded-t-lg">
          <p  
          className="font-semibold text-black">
            Ticket Prices
          </p>
        </div>

      <div className="px-8 py-4 text-sm lg:text-base">

        <div className="w-full flex flex-row items-center justify-between py-2 gap-5">
        <p 
        className="font-semibold text-amber-600">Normal tickets</p>
        <p
        className="text-green-300 font-semibold">Rs {nmrl}</p>
      
        </div>

        <div className="w-full flex flex-row items-center justify-between py-2 gap-5">
        <p 
        className="font-semibold text-gray-300">VIP tickets</p>
        <p className="text-green-300 font-semibold">Rs {vip}</p>
        </div>

        <div className="w-full flex flex-row items-center justify-between py-2 gap-5">
        <p 
        className="font-semibold text-yellow-400">VVIIIPP tickets</p>
        <p className="text-green-300 font-semibold">Rs {vvip}</p>
        </div>

      </div>


    </div>
  )
}

export default EventTickets