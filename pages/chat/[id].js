import React , { useState, useEffect, useRef } from "react"
//import router from "next/router"
import { useRouter } from "next/router"
import Header from "../../components/chat-header"
import ChatList from "../../components/chat-list"
import Sender from "../../components/sender"
import ChatSender from "../../components/chat-sender"
import { Avatar } from "@mui/material"
import { auth, db } from "../../components/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { getDocs, collection, query, where, doc, setDoc, serverTimestamp, updateDoc, documentId } from "firebase/firestore";

export default function Chat(){
  
  const [ chats, setChats ] = useState([])
  const [ chatName, setChatName ] = useState("")
  const router = useRouter()
  const { id } = router.query
  
  useEffect(()=>{
    const subscribe = checkAuth();
    return subscribe;
  },[])
  
  const checkAuth = ()=>{
   onAuthStateChanged(auth, (client) => {
      if (client) {
      console.log(client)
      
      } else {
        router.push("/chat-login")
      }
    })
  }
  

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