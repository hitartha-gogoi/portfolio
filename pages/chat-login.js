import React , { useState, useEffect, useRef } from "react"
import router from "next/router"
import { useRouter } from "next/router"
import { Avatar } from "@mui/material"
import ChatIcon from "@mui/icons-material/Chat"
import MoreVertIcon from "@mui/icons-material/MoreVert"

export default function ChatLogin(){
  
  return(
    <>
    <div className="bg-white h-[100vh] w-screen flex flex justify-center items-center">
    <ChatIcon className="h-80 w-80 text-6xl rounded-full mx-2 text-gray-500" />
    <span id="headertext" className="text-6xl text-gray-500 ml-6">What'sApp</span>
   
    </div>
    </>
    
    )
  
}