import React, { useState } from "react"
import Nav from  "../components/nav"
import Link from "next/link"
import ReactTypingEffect from "react-typing-effect"

export default function Blogs(){
  
  const [ blogs, setBlogs ] = useState([1,2,3])
  
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
    {blogs.map((item, index)=>{
    return(
    <div className="w-80 h-80 m-4 relative drop-shadow-xl hover:scale-105 transition-transform duration-200 ease-out bg-[url('https://avatars.githubusercontent.com/u/72619384?v=4')] object-contain rounded-lg">
   
    <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur rounded drop-shadow-lg text-white p-5 flex justify-between">
    <p id="heavyfont" className="font-extrabold text-sm">CREATE AN APP USING REACT
    <p id="generalfont" className="font-semibold text-sm">Hello there just became alert to your diamonds to call me at school then </p>
    </p>
    <p id="footertext" className="font-semibold text-cyan-400">12:19</p>
    </div>
    </div>
    )
    })}
    
    </div>
    </>
    )
}