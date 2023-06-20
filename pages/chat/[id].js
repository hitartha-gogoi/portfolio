import React , { useState, useEffect, useRef } from "react"
import router from "next/router"
import { useRouter } from "next/router"
import Header from "../../components/chat-header"
import ChatList from "../../components/chat-list"
import Sender from "../../components/sender"
import ChatSender from "../../components/chat-sender"
import { Avatar } from "@mui/material"

export default function Chat(){
  
  const [ chats, setChats ] = useState([])
  const [ message, setMessage ] = useState("")
  
  return(
    <div className="bg-white h-[100vh] w-screen">
    <Header />
    <div className="flex flex-row flex-wrap justify-between items-center h-full w-full">
    <ChatList />
    <ChatSender />
    </div>
    </div>
    )
}