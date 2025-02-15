import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/home/Footer'
import Header from './components/home/Header'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout