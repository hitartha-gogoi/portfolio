import React, { useState, useEffect } from "react"
import Nav from  "../components/nav"
import Link from "next/link"
import router from "next/router"
import ReactTypingEffect from "react-typing-effect"
import ReactTimeAgo from 'react-time-ago'

export default function Blogs(){
  
  const [ blogs, setBlogs ] = useState([])
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
  
  return(
    <>
    <Nav />
    <div className="flex flex-col lg:flex-row justify-between lg:space-x-5 font-bold px-10 py-5 mb-10 bg-black">
    <div>
    <ReactTypingEffect className="text-7xl text-white" staticText={[""]} speed={10} eraseSpeed={20} delay={10} text={["Sonny's Daily Blog"]} />
    <h2 id="headertext" className="text-white drop-shadow-xl shadow-cyan-400">Info at your fingertips</h2>
    
    </div>
    <p  className="mt-5 md:mt-2 text-gray-400 max-w-sm">
    New Product Features || Latest in Technology || Weekly newsletter
    </p>
    
    </div>
    
    
    <div className="flex flex-row flex-wrap justify-evenly items-center group cursor-pointer w-screen bg-[#0f0f0f]">
    {blogs.map((blog, index)=>{
    return(
    <div onClick={()=> router.push(blog.link)} style={{ backgroundImage: `url(${blog.photo})` }} className="w-80 h-80 m-4 relative drop-shadow-xl hover:scale-105 transition-transform duration-200 ease-out object-contain rounded-lg">
   
    <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur rounded drop-shadow-lg text-white p-5 flex justify-between">
    <p id="heavyfont" className="font-extrabold text-sm">{blog.name}
    <p id="generalfont" className="font-semibold text-sm">{blog.description}</p>
    </p>
    <p id="footertext" className="font-semibold text-cyan-400"> <ReactTimeAgo date={blog.postedOn} locale="en-US"/></p>
    </div>
    </div>
    )
    })}
    
    </div>
    </>
    )
}