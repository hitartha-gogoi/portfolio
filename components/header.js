import React, { useState } from "react"
import Link from "next/link"
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Typography } from '@mui/material';
import { VscAccount } from "react-icons/vsc"
import { UserIcon } from "@heroicons/react/solid"
import Profile from "./profile"

export default function Header({ isOpen, open, close }){
  
  const [ isProfileOpen, setProfileOpen ] = useState(false)
  
  return(
    <>
    <Profile open={isProfileOpen}  close={()=> setProfileOpen(false)} />
    <div className="flex flex-row justify-between items-center flex-wrap h-14 w-screen bg-black opacity-50 sticky top-0 left-0 z-[1600]">
    <div className="flex">
    {!isOpen ? <MenuIcon className="text-white h-6 w-6" onClick={open} /> : <XIcon className="text-white h-6 w-6" onClick={close} />}
  <Link href="/">
    <span id="headertext" className="text-lg text-gray-100 ml-6">PORTFOLIO</span>
  </Link>
    </div>
    <UserIcon onClick={()=> setProfileOpen(true)} className="h-8 w-8 rounded-full mx-2 border-2 border-white" />
    </div>
    </>
    )
}