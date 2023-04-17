import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'


const BuyTicketsModal = ({setShowModal} : any) => {

  const [prices] = useState<any>(["900","1800","3000"])

  const qty : any = [1 , 2 , 3 , 4 , 5 ]

  const [selectPrice, setselectPrice] = useState()
  const [selectQTY, setselectQTY] = useState()
  const [IsPriceSelected, setIsPriceSelected] = useState(false)
  const [IsQtySelected, setIsQtySelected] = useState(false)


  

  function selectedPrice(price : any){
    console.log(price)
    setselectPrice(price)
    setIsPriceSelected(true)
    

  }
  function selectedQTY(qty: any){
    console.log(qty)
    setselectQTY(qty)
    setIsQtySelected(true)
    
  }

  const total = selectPrice! * selectQTY!

  return (

      <>
        <div
          className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border lg:px-20 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
              

            <div className="flex flex-row justify-between items-center px-4 py-4   ">
            <button className='hover:scale-110 transition-all'
             onClick={() => setShowModal(false)}>
            <AiOutlineArrowLeft size={20} color="white" />
            </button>

            <p 
            className="text-white font-semibold py-4 px-2">Choose your tickets</p>
            </div>

            
            {/* prices of tickets */}

            <div className="flex flex-col gap-3">   

            <div className="flex flex-row flex-wrap gap-2 justify-evenly px-4">
            {prices.map( (item: any) => (
            
            <button onClick={() => selectedPrice(item)} 
            className="bg-white py-2 px-4 rounded-full items-center active:bg-yellow-200 hover:scale-110 transition-all">
            <p className="text-black font-semibold">Rs {item}</p>
            </button>
            ) )}
            </div>
            <p  
            className="text-white text-xs font-semibold py-4 px-4">Selected Ticket : Rs {selectPrice} </p>

            </div>

              
            {/* QTY of tickets */}

            <div className="flex flex-col gap-3">

            <div className="flex flex-row justify-evenly gap-2 py-2">            
            {qty.map( (item : any) => (
            <button onClick={() => selectedQTY(item)}
            key={item} 
            className="border border-white py-2 px-4 rounded-lg items-center active:bg-white hover:scale-110 transition-all">
            <p 
            className="text-white">{item}</p>
            </button>
            ) )}
            </div>

            <p 
            className="text-white text-xs font-semibold py-4 px-4">Quantity : {selectQTY} </p>


            </div>

            {/* total and checkouit */}

            {IsPriceSelected && IsQtySelected ?
            <div className="flex flex-row justify-between px-4 py-8 items-center">
            <p 
            className="text-white text-xs font-semibold">TOTAL : Rs {total}</p>
            <button className='bg-[#FE9D1A] rounded-full p-1 hover:scale-110 transition-all' 
            onClick={() => {}}>
            <AiOutlineArrowRight size={25} color="black" />
            </button>
            </div>
            : <p 
            className="text-white text-xs font-semibold uppercase m-auto py-8">Select Both options above to continue</p>         
            }
          </div>

      

             

            </div>
          </div>
        
        <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
      </>

  )
}

export default BuyTicketsModal