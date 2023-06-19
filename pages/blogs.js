import React, { useState } from "react"
import Nav from  "../components/nav"
import Link from "next/link"

export default function Blogs(){
  
  const [ blogs, setBlogs ] = useState([1,2,3])
  
  
  return(
    <>
    <Nav />
    <div className="flex flex-col lg:flex-row justify-between lg:space-x-5 font-bold px-10 py-5 mb-10">
    <div>
    <h1 className="text-7xl text-white">Sonny's Daily Blog</h1>
    <h2 className="text-gray-50">Info at your fingertips</h2>
    
    </div>
    <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
    New Product Features || Latest in Technology || Weekly newsletter
    </p>
    
    </div>
    
    
    <div className="flex flex-col justify-center items-center group cursor-pointer">
    {blogs.map((item, index)=>{
    return(
    <div className="w-full h-80 relative drop-shadow-xl hover:scale-105 transition-transform duration-200 ease-out">
    <img src="https://avatars.githubusercontent.com/u/72619384?v=4" className="object-cover object-left" />
    <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur rounded drop-shadow-lg text-white p-5 flex justify-between">
    <p className="font-bold">Test
    <p className="font-semibold">Hello there</p>
    </p>
    <p className="font-semibold">Hello there</p>
    </div>
    </div>
    )
    })}
    
    </div>
    </>
    )
}