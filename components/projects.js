import React, { useState, useEffect } from "react"
import Link from "next/link"
import TinderCard from "react-tinder-card"

export default function Projects({ title, description, image, link }){
  
  return(
    <TinderCard className={`flex flex-col justify-center items-center flex-wrap h-56 w-56 shadow-lg rounded-2xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out absolute shadow-2xl`}>
    <div style={{ backgroundImage: `linear-gradient(to top, black, transparent), url('${image}')` }} className="h-full w-full object-contain rounded-2xl flex flex-col items-center justify-center">
    <div className="w-full h-40 object-contain"  />
    <h1 id="heavyfont" className="text-center font-extrabold text-white text-2xl">{title}</h1>
    <p id="title" className="text-sm font-semibold text-gray-300 mt-6 w-4/5">{description}</p>
    <Link href={link}>
    <button className="text-white border-2 text-center w-14 h-6 border-white rounded-xl">Visit</button>
    </Link>
    </div>
    </TinderCard>
    )
}