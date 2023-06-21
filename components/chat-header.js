import React, { useState } from "react"
import Link from "next/link"
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Typography } from '@mui/material';
import { VscAccount } from "react-icons/vsc"
import { UserIcon } from "@heroicons/react/solid"
import { Avatar } from "@mui/material"
import ChatIcon from "@mui/icons-material/Chat"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ChatProfile from "./chat-profile"
import UserForm from "./user-form"

export default function Header(){
  
  const [ open, setOpen ] = useState(false)
  const [ newChat, setNewChat ] = useState(false)
  
  return(
    <>
   
   <ChatProfile open={open} close={()=> setOpen(false)} />
   <UserForm open={newChat} close={()=> setNewChat(false)} />
   
   <div className="flex flex-row justify-between items-center flex-wrap h-14 w-screen sticky top-0 left-0 z-[1600] border-bottom border border-gray-400">
    
    <div className="flex">
    <Link href="/chat">
    <span id="headertext" className="text-lg text-gray-500 ml-6">CHAT</span>
    </Link>
    </div>
    
    {/* Icon container */}
    
    <div className="flex flex-row justify-evenly items-center w-40 bg-white mr-2 rounded-lg h-10">
    <ChatIcon onClick={()=> setNewChat(true)} className="h-8 w-8 rounded-full mx-2 text-gray-500" />
    <MoreVertIcon className="h-8 w-8 rounded-full mx-2 text-gray-500"  />
    <Avatar onClick={()=> setOpen(true)} className="h-8 w-8 rounded-full mx-2" />
    </div>
    
    </div>
    </>
    )
}