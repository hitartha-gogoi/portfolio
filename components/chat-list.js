import React, { useState } from "react"
import Link from "next/link"
import router from "next/router"
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Typography } from '@mui/material';
import { Avatar } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

export default function ChatList(){
  
  const [ chats, setChats ] = useState([1,2,3,4,5,6,7])
  
  return(
    <div className=" flex fixed flex-col w-96 h-screen border-right border-2 border-gray-300 bg-white pb-16">
    
    {/* search input */}
    <div className="flex flex-row w-96 justify-center items-center  border-gray-200 border-bottom border-2 h-16 ">
    <SearchIcon />
    <input placeholder="type something..." className="w-80 bg-gray-100 focus:border-black border-transparent rounded-md h-8" />
    </div>
    
    {/* chat list */}
    <div className="flex flex-col overflow-y-scroll">

    {/* a particular chat */}
    {chats.map((messages)=>{
    return(
    <div onClick={()=> router.push('/chat/id')} className="flex justify-between items-center cursor-pointer p-[15px] break-normal border border-bottom border-gray-100 hover:bg-[#e9eaeb]">
    
    {/* Avatar, username and new message of the chat list */}
    <div className="flex">
    <Avatar />
    <div>
    <p className="font-bold text-xl ml-2">Username </p>
    <p className="ml-2 text-gray-500 text-md">Hi</p>
    </div>
    </div>
    {/* timestamp */}
    <div>
    <p className="ml-2 text-gray-500 text-md">20:49 PM</p>
    </div>
    </div>
    )
    })}
    </div>
    
    </div>
    )
}