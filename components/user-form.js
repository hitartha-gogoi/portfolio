import { useState, useEffect, useRef } from "react"
import { getDocs, collection, query, where, doc, addDoc, serverTimestamp, ArrayUnion, ArrayRemove } from "firebase/firestore";
import router from "next/router"
import { auth, db } from "../components/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { XIcon } from "@heroicons/react/outline"
import CloseIcon from "@mui/icons-material/Close"
import Avatar from "@mui/material/Avatar"
import Typography  from "@mui/material/Typography"
import SearchIcon from "@mui/icons-material/Search"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"

export default function UserForm({ open, close }){
  
  if(!open) return;
  
  const [ chatName, setChatName ] = useState("")
  const [ users, setUsers ] = useState([])
  const [ username, setUsername ] = useState("")
  const [ members, setMembers ] = useState([])
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      console.log(user)
    })
    
    return unsubscribe;
  },[])
  
  const searchUser = ()=>{
    fetch(`/api/users?email=${username}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res =>{
        return res.json();
      })
      .then(result =>{
        console.log(result)
        setUsers(result.message)
       // 
      })
      .catch(err =>{
        console.log(err)
      })
  }
  
  const addMember = (member)=>{
    setMembers(members => [...members, member])
  }
  const removeMember = (member)=>{
    setMembers(members => [...members, member])
    let arr = members
    let ind = members.indexOf(member)
    delete arr[ind]
    setMembers(arr)
    searchUser()
  }
  
  const createChat = async()=>{
    try{
      const newChat = await addDoc(collection(db, 'chats'), {
        name: chatName,
        host: auth.currentUser.uid,
        lastMessage: "New Chat Created!",
        timestamp: serverTimestamp(),
        members: members
      })
      setChatName("")
      close()
    }catch(e){
      setChatName("")
      console.log(e)
    }
  }
  
  
  return(
     <div className="fixed top-0 left-0 right-0 bottom-0 backdrop-brightness-50 z-50 flex justify-center items-center">
  <div className="z-10 flex flex-col justify-start items-center bg-white w-72 h-96 rounded-md">
  <div className="flex flex-row justify-between items-center w-full">
    <span />
    <CloseIcon onClick={close} />
    </div> 
    
    <Avatar />
    <Typography variant="h6" component="h2" color="gray"> CREATE A NEW CHAT </Typography>
    <input value={chatName} onChange={(e)=> setChatName(e.target.value)} placeholder="type something..." className="mt-2 w-4/5  bg-gray-100 focus:border-black border-transparent rounded-md h-8" />
    <br />
    <div className="flex">
    <input value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="search users" className="mt-2 w-4/5  bg-gray-100 focus:border-black border-transparent rounded-md h-8" />
    <SearchIcon onClick={searchUser} />
    </div>
    {users.map((user)=>{
    return(
    <div className="flex justify-between items-center cursor-pointer p-[15px] break-normal border border-bottom border-gray-100 hover:bg-[#e9eaeb]">
   
    <div className="flex">
    <Avatar />
    <div>
    <p className="font-bold text-xl ml-2">{user.name}</p>
    <p className="ml-2 text-gray-500 text-md">{user.email}</p>
    </div>
    </div>
    {members.includes(user.id) ?
    <RemoveCircleIcon onClick={()=> removeMember(user.id)} />
    :
    <AddCircleIcon onClick={()=> addMember(user.id)} />
    }
    </div>
    )
    })}
    
      <button className="flex  flex-row justify-center items-center text-white text-center font-bold bg-black h-10 w-60 mt-2 rounded-lg border-gray-700 border hover:scale-105 transition-all ease-in-out duration-150" onClick={createChat}> create </button>
  </div>
</div>
)
}