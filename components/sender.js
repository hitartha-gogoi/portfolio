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
  const [ messages, setMessages ] = useState([])
  
  const sendMessage = (e)=>{
    e.preventDefault();
    setReply("")
  }
  
  return(
    <div className="flex flex-col w-screen h-full bg-[#e5ded8] ml-96 md:w-3/5 lg:w-3/5 fixed">
    
    {/* profile */}
    <div className="flex justify-evenly items-center sticky bg-[#e5ded8] h-14">
    </div>
    
    {/* messages */}
    <div className="flex flex-col w-full h-3/5 overflow-y-scroll">
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
    <form onSubmit={sendMessage} className="flex justify-evenly items-center sticky bg-white h-1/5 border-left border-2 border-gray-200 mt-4 pb-[25px]">
    <InsertEmoticonIcon />
    <input value={reply} onChange={(e)=> setReply(e.target.value)} placeholder="type something..." className="mt-2 w-4/5  bg-gray-100 focus:border-black border-transparent rounded-md h-8" />
    <SendIcon />
    </form>
    
    </div>
    )
} 