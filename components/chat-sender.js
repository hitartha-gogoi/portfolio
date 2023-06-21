import { useState, useEffect, useRef, useMemo } from "react";
import router from "next/router"
import { useRouter } from "next/router"
import Image from 'next/image'
import { AiTwotoneCheckCircle, AiFillInstagram, AiFillTwitterSquare,  AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon"
import { CodeIcon, UserGroupIcon } from "@heroicons/react/solid"
import ReactTypingEffect from 'react-typing-effect';
import SendIcon from "@mui/icons-material/Send"
import { Avatar } from "@mui/material"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import Link from "next/link"
import { auth, db } from "../components/firebase"
import { onAuthStateChanged } from "firebase/auth"
import { getDocs, collection, query, where, doc, setDoc, serverTimestamp, updateDoc, addDoc, orderBy, documentId, onSnapshot } from "firebase/firestore"

export default function ChatSender(){
  
  const [ reply, setReply ] = useState("")
  const [ chatName, setChatName ] = useState("")
  const [ messages, setMessages ] = useState([])
  const route = useRouter()
  const { id } = route.query
  
  const getMessages = ()=>{
      setMessages([])
      let q = query(collection(db, "messages"), where("chatId","==", id), orderBy("timestamp", "asc"))
       onSnapshot(q, (messagesSnapshot)=>{
       setMessages(messagesSnapshot.docs.map(docu => ({ id: docu.id, data: docu.data() })))
      })
     console.log(messages)
    }
    
    const getChatRoom =()=>{
      setChatName("")
      let q = query(collection(db, "chats"), where(documentId(),"==", id))
      onSnapshot(q, (chatSnapshot)=>{
         chatSnapshot.forEach((chatMessage)=>{
         setChatName(chatMessage.data().name)
         console.log(chatMessage.data().name)
        })
      })
    }
  
  useEffect(()=>{
    setChatName("")
    setMessages([])
    if(!route.isReady) return;
   return getMessages();
  }, [id])
  
  useEffect(()=>{
    setChatName("")
    setMessages([])
    if(!route.isReady) return;
    return ()=> getChatRoom();
  }, [id])
  
  const sendMessage = async(e)=>{
    e.preventDefault()
    try{
      await addDoc(collection(db, 'messages'), {
        message: reply,
        chatId: id,
        sender: auth.currentUser.uid,
        timestamp: serverTimestamp()
      })
      await updateDoc(doc(db, "chats", id), {
        lastMessage: reply,
        timestamp: serverTimestamp(),
      })
      
      setReply("")
    }catch(e){
      setReply("")
      console.log(e)
    }
  }
  
  return(
    <div className="flex flex-col w-screen h-full bg-[#e5ded8] ml-0 md:ml-96 lg:ml-96 md:w-3/5 lg:w-3/5 fixed">
    
    {/* profile */}
    <div className="flex justify-evenly items-center sticky bg-white h-14 border-left border-2 border-gray-200">
    <div className="flex w-4/5">
    <Avatar />
    <div className="ml-6">
    <p className="font-bold text-xl">{chatName} </p>
    <p className="text-gray-500 text-md"></p>
    </div>
    </div>
    <MoreVertIcon onClick={getMessages} />
    </div>
    
    {/* messages */}
    <div className="flex flex-col w-full h-3/5 overflow-y-scroll">
    {messages.map((chats)=>{
    return(
    <>
    {chats.data.sender == auth.currentUser.uid ?
    <p className="p-[15px] rounded-lg m-[10px] pb-[26px] relative text-right bg-[#dcf8c6] w-auto ml-auto">{chats.data.message}</p>
    :
    <p className="p-[15px] rounded-lg m-[10px] pb-[26px] relative text-left bg-[whitesmoke] mr-auto w-auto">{chats.data.message}</p>
    }
    </>
    )
    })}
    </div>
    
    
    {/* message container */}
    <form onSubmit={sendMessage} className="flex justify-evenly items-center sticky bg-white h-1/5 border-left border-2 border-gray-200 mt-4 pb-[25px]">
    <InsertEmoticonIcon />
    <input value={reply} onChange={(e)=> setReply(e.target.value)} placeholder="type something..." className="mt-2 w-4/5  bg-gray-100 focus:border-black border-transparent rounded-md h-8" />
    <SendIcon />
    </form>
    
    </div>
    )
} 