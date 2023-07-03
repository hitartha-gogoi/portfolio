import React, { useState } from "react"
import { AiTwotoneCheckCircle, AiFillInstagram, AiFillTwitterSquare,  AiFillLinkedin, AiFillGithub } from "react-icons/ai"

import { CodeIcon, UserGroupIcon } from "@heroicons/react/solid"/*
import CountUp from 'react-countup'*/
import ReactTypingEffect from 'react-typing-effect';
//import TinderCard from 'react-tinder-card';
import Roll from 'react-reveal/Roll';
import Link from "next/link"
import millify from "millify";
import { FaDiscord } from 'react-icons/fa';

export default function Specs(){
  
  return(
    <>
    <div className="flex flex-col sm:flex-row">
    <div className="flex flex-col">
    <div className="h-4" />
    <Roll left>
   
    <img src="https://avatars.githubusercontent.com/u/72619384?v=4" className="lg:my-10 h-4/5 w-80  rounded-2xl shadow-2xl object-cover cursor-pointer hover:scale-110 transition-all duration-150 ease-out mx-10 my-6 shadow-blue-500 " alt="image" />
 
    </Roll>
    
    <span title="bannertitle" className="text-center font-extrabold text-4xl text-white"><Roll top cascade>Hitartha Gogoi</Roll></span>
    
     </div>
     <div className="flex flex-col ml-6 justify-center items-center">
     <div className="text-center text-5xl font-extrabold leading-none tracking-tight my-6"> 
     <ReactTypingEffect staticText={["Hi, I'm a "]} speed={10} eraseSpeed={20} delay={10} className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500" text={["Programmer", "Tech enthusiast", "Full stack developer"]} /></div>
     <p className="text-left text-sm px-4 w-80 my-2 text-white"><ReactTypingEffect id="roboticfont" speed={10} eraseSpeed={20} text={["Hello folks! I'm Hitartha Gogoi, curreny studying in 9th standard, started to learn in 2020, after then I never stopped."]} /></p>
     <div>
     <div className="flex flex-row justify-evenly items-center space-x-6 my-2 text-center">
     <Link href="https://www.instagram.com/gm.eth_/">
     <span className="text-2xl text-gray-400 font-bold">
     {/*
     <CountUp end={979} />*/}<br/> 
     <AiFillInstagram className="h-16 w-16 text-white hover:scale-110 transition-all duration-150 ease-out " /></span>
     </Link>
     <Link href="https://twitter.com/arnabgogoi83">
     <span className="text-2xl text-gray-400 font-bold">
     {/*<CountUp end={4} />*/}
     <br /><AiFillTwitterSquare className="h-16 w-16 text-white hover:scale-110 transition-all duration-150 ease-out" /></span>
     </Link>
     <Link href="https://www.linkedin.com/in/code-awesome-49720a209/">
     <span className="text-2xl text-gray-400 font-bold">
     {/*<CountUp end={500} />*/}
     <br/><AiFillLinkedin className="h-16 w-16 text-white hover:scale-110 transition-all duration-150 ease-out " /></span>
     </Link>
     </div>
     </div>
     <Link href="https://github.com/JS-junior">
     <button className="text-center h-12 w-44 my-4 bg-purple-700 text-white font-extrabold text-lg rounded-xl flex justify-center items-center shadow-2xl hover:scale-110 transition-all duration-150 ease-out"> Github <AiFillGithub className="text-white h-8 w-8 mx-2" /></button>
    </Link>
     
    </div>
    </div>
    </>
    )
}