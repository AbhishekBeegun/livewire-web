import React from 'react'
import Head from "next/head";


const HeadDetails = ({title} : any) => {
  return (
    <Head>
    <title>{title}</title>
    <meta name="description" content="LiveWire - WEB" />
    <link rel="icon" href="/logo-r.png" />
  </Head>
  )
}

export default HeadDetails