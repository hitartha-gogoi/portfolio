import React , { useState, useEffect, useRef } from "react"
import router from "next/router"
import Link from "next/link"
import { useRouter } from "next/router"
import { Avatar } from "@mui/material"
import ChatIcon from "@mui/icons-material/Chat"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon"
import SendIcon from "@mui/icons-material/Send"
import { auth } from "../components/firebase"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import Typography  from "@mui/material/Typography"
import { collection, getDoc, getDocs, doc, documentId, where, query, updateDoc, setDoc, deleteDoc, addDoc, arrayUnion, arrayRemove, serverTimestamp } from "firebase/firestore"

export default function ChatLogin(){
  
  const [ username, setUsername ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  
  const login = (e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      router.push("/chat")
      alert("done")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    setUsername("")
    setEmail("")
    setPassword("")
  }
  
  return(
    <>
    <div className="bg-white h-[100vh] w-screen flex flex-col justify-center items-center">
    
    <div className="mt-30">
    <ChatIcon className="h-30 w-30 text-6xl rounded-full mx-2 text-gray-500" />
    <span id="headertext" className="text-6xl text-gray-500 ml-6">What'sApp</span>
    </div>
    
    
    <form onSubmit={login} className="flex flex-col justify-evenly items-center sticky bg-white h-2/5 w-3/5 border-left border-2 border-gray-200 rounded-xl pb-[25px]">
   
    <input value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="Username" className="mt-2 w-4/5  bg-gray-100 focus:border-black border-transparent rounded-md h-8" />
    <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" type="email" className="mt-2 w-4/5  bg-gray-100 focus:border-black border-transparent rounded-md h-8" />
    <input value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password" type="password" className="mt-2 w-4/5  bg-gray-100 focus:border-black border-transparent rounded-md h-8" />
    <Typography onClick={login} variant="h6" component="h2" color="gray"> LOGIN</Typography>
    </form>
    <Link href="/chat-signup">
    <Typography variant="h6" component="h2" color="gray"> NEW ? CREATE AN ACCOUNT</Typography>
    </Link>
    
    </div>
    </>
    
    )
  
}