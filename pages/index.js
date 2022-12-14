import Head from 'next/head'
import GoogleMap from '../components/GoogleMap'
import Service from '../components/Service'
import About from '../components/About'
import Doctor from '../components/Doctor'
import { useEffect } from 'react'
import Container from '../components/Container'
import LoadingBar from '../components/LoadingBar'
import ContactComponent from "../components/ContactComponent"
export default function Home({ openModal}) {
  useEffect(() => {
    document.querySelector("body").className = "";
    document.querySelector("body").classList.add("bg-home")
   },[])
  return (
      <>
      <Head>
        <title>Bridgepointe Family Dental Care</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_IMAGESPATH}/favicon.ico`} />
      </Head> 
      <LoadingBar/>
<Container openModal={openModal}/>
  <Service/>
 <About/>
 <Doctor />
 <ContactComponent/>
<GoogleMap/>
</>
  )
}
