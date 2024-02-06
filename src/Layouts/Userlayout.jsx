import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Mainfooter from '../components/Main-footer/Mainfooter'

export default function Userlayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <Mainfooter/>

    </>
  )
}
