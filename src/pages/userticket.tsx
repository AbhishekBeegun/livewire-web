import React, { useEffect, useState } from 'react'
import QRCode from "react-qr-code";
import HeadDetails from '~/components/BasicLayout/HeadDetails';
const userticket = () => {

    const [Name, setName] = useState()
    const [Price, setPrice] = useState()
    const [Qty, setQty] = useState()


useEffect(() => {
  const price = JSON.parse(localStorage.getItem('price') || '{}');
  if(price){
   setPrice(price);
  }
  const qty = JSON.parse(localStorage.getItem('qty') || '{}');
  if(qty){
   setQty(qty);
  }
  const name = JSON.parse(localStorage.getItem('EventName') || '{}');
  if(name){
   setName(name);
  }
}, []);

const qrval =`Event:${Name},Ticket:${Price},Qty:${Qty},Status:Paid`
  return (
    <div className='h-screen pt-12 bg-gradient-to-b from-black'>
    <HeadDetails title={"User Tickets"} />
    <div className='px-8 flex flex-col uppercase items-center h-1/2 justify-evenly text-white text-center text-sm'>
        <h1>{Name}</h1>
        <h3>RS {Price} PER TICKET</h3>
        <h4>Quantity : {Qty}</h4>

        <p>Do not exit this page until you took a picture or screenshot of the qr code</p>
        <p className='opacity-50'>Do not share this to anyone. Kindly present this at the entrance</p>
    </div>
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 300, width: "100%" }}>
    <QRCode
    bgColor='transparent'
    fgColor='black'
    size={300}
    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
    value={qrval}
    viewBox={`0 0 300 300`}
    />
         </div>
    </div>
  )
}

export default userticket