import React, { useState } from "react"
import Header from "./header"
import Navbar from "./navbar"

export default function Nav(){
  
  const [ isNavbarOpen, setNavbarOpen ] = useState(false)
  
  return(
    <>
    <Header isOpen={isNavbarOpen} open={()=> setNavbarOpen(true)} close={()=> setNavbarOpen(false)} />
    {!isNavbarOpen ? <span></span> : <Navbar />}
    </>
    )
}