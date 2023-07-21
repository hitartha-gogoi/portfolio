import React, { useState, useEffect } from "react"
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';
import { Typography } from '@mui/material';
import dynamic from "next/dynamic"

const Projects = dynamic(
  ()=> {
    return import("./projects")
  }, {
    ssr: false
  }
  )


export default function Cards(){
  return(
    <div className="flex flex-row justify-center items-center flex-wrap my-12">
    <Fade left>
    <div className="flex flex-col justify-center items-center shadow-2xl ransparent h-5/5 w-60 py-10 mx-8 px-6 rounded-xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out shadow-emerald-500">
   
    <iframe src="https://embed.lottiefiles.com/animation/63487" className="h-32 w-32 rounded-xl" />
    <p id="title" className="text-left text-lg font-bold px-4 w-64 py-4 text-white">
    Hello World, I'm Hitartha, and I enjoy creating things that live on the internet. With the proficiency in JavaScript, I turn ideas to real life applications. Highly experienced using libraries like React, making eye-catching, accessible, and user friendly websites and applications
    </p>
    </div>
    </Fade>
    
    <Fade right>
    <div className="flex flex-col justify-center items-center shadow-2xl transparent h-5/5 w-60 py-10 mx-8 px-6 rounded-xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out shadow-purple-500">
    <iframe src="https://embed.lottiefiles.com/animation/94998" className="h-32 w-32 rounded-xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out" />
    <p id="title" className="text-left text-lg font-bold px-4 w-64 py-4 text-white">
    My interest in web development started back in 2020 during lockdown, when I saw the opportunity of learning web development. As my interest grew, turns out that it has become a passion to build web applications. Over the time, I have gained lot of experiences building applications and trying different technologies.
    </p>
    </div>
    </Fade>
    
    <div className="flex flex-col justify-center items-center shadow-2xl transparent h-96 w-60 py-10 mx-8 px-6 rounded-xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out shadow-teal-500">
    <div className="text-center text-4xl font-extrabold leading-none tracking-tight mb-40">
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
    Projects
    </span>
    </div>
    
    
    <Projects title="Netflix Clone" description="A clone  Netflix homepage built using Next JS" image="/IMG-20230721-WA0000.jpg" link="https://netflix-clone-mocha-tau.vercel.app/" />
    <Projects title="Ecommerce App" description="An e-commerce application built using NextJS" image="/IMG-20230721-WA0002.jpg" link="https://ecommerce-js-junior.vercel.app/" />
   </div>
  
    
    {/*
    
    <Fade left>
    <div className="flex flex-col justify-center items-center shadow-2xl transparent h-80 w-60 py-10 mx-8 px-6 rounded-xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out shadow-teal-500">
    <div className="text-center text-4xl font-extrabold leading-none tracking-tight my-10">
    <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
    
    </span>
    </div>
     <iframe src="https://embed.lottiefiles.com/animation/92445" className="h-32 w-32 rounded-xl" />
    <p id="title" className="text-left text-white font-bold text-lg px-4 w-64 py-4">

    </p>
    </div>
    </Fade> */}
    </div>
    )
}