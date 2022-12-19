import React from "react";
import Head from 'next/head'
import GoogleMap from "../components/GoogleMap";
import { useEffect } from 'react'
import ContactComponent from "../components/ContactComponent";
import Container from '../components/Container'
import LoadingBar from "../components/LoadingBar";
export default function Contact({isModalOpen, openModal}) {
  useEffect(() => {
    document.querySelector("body").className = "";
    document.querySelector("body").classList.add("bg-contact")
   },[])
  return (
    <>
      <Head>
        <title>Contact | Bridgepointe Family Dental Care</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <LoadingBar/>
<Container openModal={openModal}/>
      <ContactComponent isModalOpen={isModalOpen}/>
      <GoogleMap />
    </>
  );
}
