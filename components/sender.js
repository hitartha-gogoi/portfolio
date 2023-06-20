import { useState, useEffect, useRef } from "react";
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

export default function Sender(){
  
  const [ reply, setReply ] = useState("")
  const [ messages, setMessages ] = useState([1,2,3,4,5,6,7])
  
  const sendMessage = (e)=>{
    e.preventDefault();
    setReply("")
  }
  
  return(
    <div className="flex flex-col w-3/5 h-full bg-[#e5ded8] ml-96 fixed">
    
    {/* profile */}
    <div className="flex justify-evenly items-center sticky bg-white h-14 border-left border-2 border-gray-200">
    <div className="flex w-4/5">
    <Avatar />
    <div className="ml-6">
    <p className="font-bold text-xl">Username </p>
    <p className="text-gray-500 text-md">Hi</p>
    </div>
    </div>
    <MoreVertIcon />
    </div>
    
    {/* messages */}
    <div className="flex flex-col w-full h-80 overflow-y-scroll">
    {messages.map((message)=>{
    return(
    <>
    <p className="p-[15px] rounded-lg m-[10px] pb-[26px] relative text-right bg-[#dcf8c6] w-auto ml-auto">Hi</p>
    
    <p className="p-[15px] rounded-lg m-[10px] pb-[26px] relative text-left bg-[whitesmoke] mr-auto w-auto">Hello</p>
    </>
    )
    })}
    </div>
    
    
    {/* message container */}
    <form onSubmit={sendMessage} className="flex justify-evenly items-center sticky bg-white h-14 border-left border-2 border-gray-200">
    <InsertEmoticonIcon />
    <input value={reply} onChange={(e)=> setReply(e.target.value)} placeholder="type something..." className="mt-2 w-4/5  bg-gray-100 focus:border-black border-transparent rounded-md h-8" />
    <SendIcon />
    </form>
    
    </div>
    )
} 