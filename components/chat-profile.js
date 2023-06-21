import { useState, useEffect, useRef } from "react"
import { getDocs, collection, query, where, doc, setDoc } from "firebase/firestore";
import router from "next/router"
import { auth } from "../components/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { XIcon } from "@heroicons/react/outline"
import CloseIcon from "@mui/icons-material/Close"
import Avatar from "@mui/material/Avatar"
import Typography  from "@mui/material/Typography"

export default function ChatProfile({ open, close }){
  
  if(!open) return;
  
  const [ username, setUsername ] = useState("")
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      console.log(user.displayName)
      setUsername(user.displayName)
    })
    
    return unsubscribe;
  },[])
  
  const logout = ()=>{
    signOut(auth).then(()=>{
      router.push("/chat-login")
    }).catch((error)=>{
      console.log(error)
    })
  }
  
  
  return(
     <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-brightness-50 z-50 flex justify-center items-center">
  <div className="z-10 flex flex-col justify-start items-center bg-white w-72 h-96 rounded-md">
  <div className="flex flex-row justify-between items-center w-full">
    <span />
    <CloseIcon onClick={close} />
    </div> 
    
    <Avatar />
    <Typography variant="h6" component="h2" color="gray"> </Typography>
      <button className="flex  flex-row justify-center items-center text-white text-center font-bold bg-black h-10 w-60 mt-2 rounded-lg border-gray-700 border hover:scale-105 transition-all ease-in-out duration-150" onClick={logout}> logout </button>
  </div>
</div>
)
}