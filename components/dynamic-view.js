import React, { useState, useEffect } from "react"
import TinderCard from "react-tinder-card"

export default function DynamicView(){
  
  return(
    <TinderCard>
    <img src="https://avatars.githubusercontent.com/u/72619384?v=4" className="lg:my-10 h-4/5 w-80  rounded-2xl shadow-2xl object-cover cursor-pointer hover:scale-110 transition-all duration-150 ease-out mx-10 my-6 shadow-blue-500 " alt="image" />
    </TinderCard>
    )
}