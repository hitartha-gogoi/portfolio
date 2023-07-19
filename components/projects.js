import React, { useState, useEffect } from "react"
import TinderCard from "react-tinder-card"

export default function Projects({ title, description }){
  
  return(
    <TinderCard className={`flex flex-col justify-center items-center flex-wrap h-56 w-56 shadow-lg rounded-2xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out absolute shadow-2xl`}>
    <div style={{ backgroundImage: `linear-gradient(to top, black, transparent), url('https://avatars.githubusercontent.com/u/72619384?v=4')` }} className="h-full w-full object-contain rounded-2xl flex flex-col items-center justify-center">
    <div className="w-full h-40 object-contain"  />
    <h1 id="heavyfont" className="text-center font-extrabold text-white text-2xl">{title}</h1>
    <p id="title" className=" text-sm font-semibold text-gray-300 mt-6 w-4/5">{description}</p>
    </div>
    </TinderCard>
    )
}