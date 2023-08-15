import React, { useState, useEffect, useLayoutEffect } from "react"
import Nav from  "../components/nav"
import Link from "next/link"
import router from "next/router"
import ReactTypingEffect from "react-typing-effect"
import SendIcon from "@mui/icons-material/Send"
import { Fab, Typography } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import RefreshIcon from "@mui/icons-material/Refresh"
import SearchIcon from "@mui/icons-material/Search"
import CloseIcon from "@mui/icons-material/Close"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import { db, auth, storage } from "../components/firebase"
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { collection, doc, addDoc, serverTimestamp } from "firebase/firestore"
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';




function CheckAuthPopup({ open, close }){
  
  const [ password, setPassword ] = useState("")
  
  if(open) return;
  
  const auth = (e)=>{
    e.preventDefault();
    if(password === "1234"){
      close()
    } else {
      alert("Try again!")
    }
  }
  
  return(
     <div className="bg-black fixed top-0 left-0 right-0 bottom-0 backdrop-brightness-50 z-50 flex justify-center items-center">
  <form onSubmit={auth} className="z-10 flex flex-col justify-start items-center bg-[#0f0f0f] w-72 h-60 rounded-md shadow-xl inset-y-0 shadow-cyan-500">
  <h2 className="text-3xl font-extrabold text-white">Admin</h2>
  <ReactTypingEffect id="headertext" className="text-white" staticText={[""]} speed={10} eraseSpeed={20} delay={10} text={["only for admins"]} />
      <div className="flex  flex-row justify-center items-center text-black text-center font-bold bg-white h-10 w-60 mt-2 rounded-lg hover:scale-105 transition-all ease-in-out duration-150">
       <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="enter password..." className="mt-2 w-4/5  bg-gray-100 rounded-md h-8" />
       <button className="font-bold bg-white rounded-lg border-gray-700 hover:scale-105 transition-all ease-in-out duration-150">
    <SendIcon onClick={auth} />
    </button>
      </div>
 
  </form>
</div>
)
}

function EditModal({ open, close, id, title, desc, file, reload }){
 
  const [ name, setName ] = useState(title)
  const [ description, setDescription ] = useState(desc)
  const [ photo, setPhoto ] = useState({})
  const [ link, setLink ] = useState("")
  
  if(!open) return;
  
  let loadFile = function(event) {
		let reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		setPhoto(event.target.files[0]);
		console.log(photo)
	}
  
  const edit = (e)=>{
    e.preventDefault();
  let storageRef = ref(storage,`images/${photo.name}`);
  let uploadTask = uploadBytesResumable(storageRef, photo);
  uploadTask.on('state_changed', 
  (snapshot) => {
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      
      console.log(downloadURL)
      fetch(`/api/blogs?id=${id}`, { 
      method: "PUT",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        id: id,
        name: name,
        description: description,
        photo: downloadURL,
        link: link
      })
    })
    .then(res => res.json())
    .then(result => {
      reload()
      setName("")
      setDescription("")
      setPhoto({})
      setLink("")
      close();
      })
    .catch(err => console.log(err))
  })
  })
  }
  
  return(
     <div className="bg-black fixed top-0 left-0 right-0 bottom-0 backdrop-blur bg-transparent z-50 flex justify-center items-center">
  <form onSubmit={edit} className="z-10 flex flex-col justify-start items-center bg-[#0f0f0f] w-72 h-80 rounded-md shadow-xl inset-y-0 shadow-cyan-500">
  <div className="flex w-full justify-between">
  <span />
  <CloseIcon className="text-white" onClick={close}/>
  </div>
  <h2 className="text-3xl font-extrabold text-white">Edit a Post</h2>
  <ReactTypingEffect id="headertext" className="text-white" staticText={[""]} speed={10} eraseSpeed={20} delay={10} text={["Make changes....."]} />
      <div className="flex  flex-col justify-center items-center text-black text-center font-bold bg-white h-56 w-60 mt-2 rounded-lg"> 
       <input type="file" onChange={loadFile} className="mt-2 w-4/5  bg-gray-100 rounded-md h-8" /> 
       <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="name" className="mt-2 w-4/5  bg-gray-100 rounded-md h-8" />
       <input value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="type something...." className="mt-2 w-4/5  bg-gray-100 rounded-md h-8" />
       <input value={link} onChange={(e)=> setLink(e.target.value)} placeholder="link" className="mt-2 w-4/5  bg-gray-100 rounded-md h-8" /> 
       <button className="font-bold bg-white rounded-lg border-gray-700 hover:scale-105 transition-all ease-in-out duration-150">
    <SendIcon className="text-center text-white font-bold bg-black h-22 w-52 mt-4  rounded-lg hover:scale-105 transition-all ease-in-out duration-150" />
    </button>
      </div>
 
  </form>
</div>
)
}

function CreateModal({ open, close }){
  
  const [ name, setName ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ photo, setPhoto ] = useState({})
  const [ link, setLink ] = useState("")
  
  let loadFile = function(event) {
		let reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		setPhoto(event.target.files[0]);
		console.log(photo)
	}
  
  if(!open) return;
  
  const create = (e)=>{
    e.preventDefault();
    
  let storageRef = ref(storage,`images/${photo.name}`);
  let uploadTask = uploadBytesResumable(storageRef, photo);
  uploadTask.on('state_changed', 
  (snapshot) => {
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    console.log(downloadURL)
    fetch(`/api/blogs`, { 
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name: name,
        description: description,
        photo: downloadURL,
        link: link
      })
    })
    .then(res => res.json())
    .then(result => {
      console.log(result)
      setName("")
      setDescription("")
      setLink("")
      setPhoto({})
      close()
    })
    .catch(err => console.log(err))
  })
  })
  }
 
  return(
     <div className="bg-black fixed top-0 left-0 right-0 bottom-0 backdrop-blur bg-transparent z-50 flex justify-center items-center">
  <form onSubmit={create} className="z-10 flex flex-col justify-start items-center bg-[#0f0f0f] w-72 h-80 rounded-md shadow-xl inset-y-0 shadow-cyan-500">
  <div className="flex w-full justify-between">
  <span />
  <CloseIcon className="text-white" onClick={close}/>
  </div>
  <h2 className="text-3xl font-extrabold text-white">Add a Blog Post</h2>
  <ReactTypingEffect id="headertext" className="text-white" staticText={[""]} speed={10} eraseSpeed={20} delay={10} text={["create a new blog post"]} />
  <div className="flex flex-col justify-center items-center text-black text-center font-bold bg-white h-56 w-60 mt-2 rounded-lg">
       <input type="file" onChange={loadFile} className="mt-2 w-4/5  bg-gray-100 rounded-md h-8" /> 
       <input value={name} onChange={(e)=> setName(e.target.value)} placeholder="name" className="mt-2 w-4/5  bg-gray-100 rounded-md h-8" /> 
       <input value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="type something...." className="mt-2 w-4/5  bg-gray-100 rounded-md h-8" />
       <input value={link} onChange={(e)=> setLink(e.target.value)} placeholder="link" className="mt-2 w-4/5  bg-gray-100 rounded-md h-8" /> 
       <button type="submit" className="font-bold bg-white rounded-lg border-gray-700 hover:scale-105 transition-all ease-in-out duration-150">
      
    <SendIcon className="text-center text-white font-bold bg-black h-22 w-52 mt-4  rounded-lg hover:scale-105 transition-all ease-in-out duration-150" onClick={create} />
    </button>
      </div>
 
  </form>
</div>
)
}
 

export default function Admin(){
  
  const [ isLoggedIn, setLoggedIn ] = useState(false)
  const [ blogs, setBlogs ] = useState([1,2,3])
  const [ isAddOpen, setAddOpen ] = useState(false)
  const [ isEditOpen, setEditOpen ] = useState(false)
  const [ editId, setEditId ] = useState("")
  const [ name, setName ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ photo, setPhoto ] = useState({})
  const [ link, setLink ] = useState("")
  const [ recipient, setRecipient ] = useState("")
  
  const getBlogs = ()=>{
    setBlogs([])
    fetch(`/api/blogs`)
    .then(res => res.json())
    .then(result =>{
      setBlogs(result.message)
    })
    .catch(err => console.log(err))
  }
  
  useEffect(()=>{
    return getBlogs()
  }, [])
  
  const openEditModal = (id, name, description, photo)=>{
    
    setEditId(id)
    setName(name)
    setDescription(description)
    setPhoto(photo)
    setEditOpen(true)
  }
  
  const deleteBlog = (id)=>{
    fetch(`/api/blogs?id=${id}`, { 
      method: "DELETE",
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(res => res.json())
    .then(result => getBlogs())
    .catch(err => console.log(err))
  }
  
  const sendEmail = async () => {
  try {
    const response = await axios.post('/api/send-email', {
      recipient: recipient,
      subject: 'Enthusiastic Programmer with Expertise in React, Next JS, and Tailwind CSS Interested in Part-Time Opportunity',
      htmlFilePath: '/service-email.html'
    });

    console.log(response.data.message);
    alert("✅" ) 
  } catch (error) {
    console.error('Error sending email:', error.response.data.error);
    alert("❌")
  }
}
  
  return(
    <>
    <Nav />
    <CheckAuthPopup open={isLoggedIn} close={()=> setLoggedIn(true)} />
    <EditModal open={isEditOpen} id={editId} reload={()=> getBlogs()} title={name} desc={description} file={photo} close={()=> setEditOpen(false)} />
    <CreateModal open={isAddOpen} close={()=> setAddOpen(false)} />
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <input
          type="email"
          className="border px-3 py-2 rounded-md mr-2 focus:outline-none"
          placeholder="Recipient's email"
          value={recipient}
          onChange={(e)=> setRecipient(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={sendEmail}
        >
          Send
        </button>
      </div>
    </div>
    <div className="flex flex-col w-72 flex-wrap justify-evenly items-center group cursor-pointer w-screen bg-[#0f0f0f]">
    {blogs.map((blog, index)=>{
    return(
    <div style={{ backgroundImage: `url(${blog.photo})` }} className={`w-80 h-80 m-4 relative drop-shadow-xl hover:scale-105 transition-transform duration-200  object-contain rounded-lg`}>
   
    <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur rounded drop-shadow-lg text-white p-5 flex justify-between">
    <p id="heavyfont" className="font-extrabold text-sm uppercase">{blog.name}
    <p id="generalfont" className="font-semibold text-sm">{blog.description} </p>
    </p>
    <div  className="flex flex-col h-full justify-between">
    <span id="footertext" className="font-semibold text-cyan-400">
   
    </span>
    <ContentCopyIcon className="hover:scale-125 transition-all duration-150 ease-out" onClick={()=> navigator.clipboard.writeText(blog.link)} />
    <EditIcon onClick={()=> openEditModal(blog._id, blog.name, blog.description, blog.photo )} className="hover:scale-125 transition-all duration-150 ease-out" />
    <DeleteIcon onClick={()=> deleteBlog(blog._id)} className="hover:scale-125 transition-all duration-150 ease-out" />
    </div>
    </div>
    </div>
    )
    })}
    
    </div>
    
    <div className="fixed left-0 flex flex-col bg-slate-900 shadow-2xl shadow-black justify-start h-screen w-16 inset-y-14">
    <Fab color="primary" aria-label="add" className="shadow-2xl hover:shadow-cyan-500 hover:bg-black" onClick={()=> setAddOpen(true)}>
    <AddIcon className="text-cyan-400" />
    <Typography variant="h6" component="h2" color="gray">  </Typography>
    </Fab>
    <Fab color="primary" aria-label="add" className="shadow-2xl hover:shadow-cyan-500 hover:bg-black">
    <RefreshIcon onClick={getBlogs} className="text-cyan-400" />
    </Fab>
    </div>
   </>
  )
}