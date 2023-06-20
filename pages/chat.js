import React , { useState, useEffect, useRef } from "react"
import router from "next/router"
import { useRouter } from "next/router"
import Header from "../components/chat-header"
import ChatList from "../components/chat-list"
import Sender from "../components/sender"
import ChatSender from "../components/chat-sender"
import { Avatar } from "@mui/material"
import { auth } from "../components/firebase"
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDoc, getDocs, doc, documentId, where, query, updateDoc, setDoc, deleteDoc, addDoc, arrayUnion, arrayRemove, serverTimestamp } from "firebase/firestore"

export default function Chat(){
  
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
  
  const [ chats, setChats ] = useState([])
  const [ message, setMessage ] = useState("")
  
  return(
    <div className="bg-white h-[100vh] w-screen">
    <Header />
    <div className="flex flex-row flex-wrap justify-between items-center h-full w-full">
    <ChatList />
    <Sender />
    </div>
    </div>
    )
}