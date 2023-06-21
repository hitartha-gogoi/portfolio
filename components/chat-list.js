import React, { useState, useEffect, useMemo  } from "react"
import Link from "next/link"
import router, { useRouter } from "next/router"
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Typography } from '@mui/material';
import { auth, db } from "./firebase"
import { onAuthStateChanged } from "firebase/auth";
import { Avatar } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { getDocs, collection, query, where, doc, setDoc, serverTimestamp, updateDoc, addDoc, orderBy, documentId, onSnapshot } from "firebase/firestore"


export default function ChatList(){
  
  const [ chats, setChats ] = useState([])
  const [ userId, setUserId ] = useState("")
  const route = useRouter()
  const chatsRef = useMemo(()=> collection(db, "chats"), [])
  
  
 function getUserId(){
      onAuthStateChanged(auth, async(user)=>{
      setUserId(user.uid)
    })
}

const getChatList = ()=>{
  let q = query(chatsRef, where("members", "array-contains", userId))
     onSnapshot(q, (chatSnapshot)=>{
       setChats(chatSnapshot.docs.map(docu => ({ id: docu.id, data: docu.data() })))
     })
}
    
  useEffect(()=>{
    if(!route.isReady) return;
    setChats([])
    getUserId()
    return getChatList();
  }, [userId])
  
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
   
    {chats.map((message)=>{
    return(
    <div onClick={()=> router.push(`/chat/${message.id}`)} className="flex justify-between items-center cursor-pointer p-[15px] break-normal border border-bottom border-gray-100 hover:bg-[#e9eaeb]">
    
    {/* Avatar, username and new message of the chat list */}
    <div className="flex">
    <Avatar />
    <div>
    <p className="font-bold text-xl ml-2">{message.data.name} </p>
    <p className="ml-2 text-gray-500 text-md">{message.data.lastMessage}</p>
    </div>
    </div>
    {/* timestamp */}
    <div>
  {/*
    <p className="ml-2 text-gray-500 text-md"> {new Date(message.data.timestamp.seconds * 1000).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
  */}
    </div>
    </div>
    )
    })}
  
    </div>
    
    </div>
    )
}