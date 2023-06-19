import React, { useState, useEffect } from "react"
import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';
import { Typography } from '@mui/material';

export default function Cards(){
  return(
    <div className="flex flex-row justify-center items-center flex-wrap my-12">
    <Fade left>
    <div className="flex flex-col justify-center items-center shadow-2xl ransparent h-5/5 w-60 py-10 mx-8 px-6 rounded-xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out shadow-emerald-500">
    <div className="text-center text-4xl font-extrabold leading-none tracking-tight my-10"><span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"> About Me </span> </div>
    <iframe src="https://embed.lottiefiles.com/animation/63487" className="h-32 w-32 rounded-xl" />
    <p id="title" className="text-left text-lg font-bold px-4 w-64 py-4 text-white">
    Hello folks, I'm Hitartha, currently studying in 9th grade. I have serious passion for coding. It's been 2 years now since I started coding, have gain a lot of experience working in this arena, now working as a part time freelance programmer. As a tech enthusiast, I keep improving my skills, learning everyday.
    </p>
    </div>
    </Fade>
    
    <Fade right>
    <div className="flex flex-col justify-center items-center shadow-2xl transparent h-5/5 w-60 py-10 mx-8 px-6 rounded-xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out shadow-purple-500">
    <div className="text-center text-4xl font-extrabold leading-none tracking-tight my-10"><span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"> What can I do ? </span></div>
    <iframe src="https://embed.lottiefiles.com/animation/94998" className="h-32 w-32 rounded-xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out" />
    <p id="title" className="text-left text-lg font-bold px-4 w-64 py-4 text-white">
    Hi there, Are you looking for an outstanding Landing Page in React JS or Next JS? Or A full blown messaging web app? I'm an amateur in fullstack web development with a passion for frontend development with 1.5+ years of experience. I'll put my skills, experience, and expertise into creating an amazing the best quality application with awesome user experiences and turn your Figma, XD Design into real websites. I hope, you will never be disappointed with the quality of my work.
    </p>
    </div>
    </Fade>
    <Fade left>
    <div className="flex flex-col justify-center items-center shadow-2xl transparent h-5/5 w-60 py-10 mx-8 px-6 rounded-xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out shadow-teal-500">
    <div className="text-center text-4xl font-extrabold leading-none tracking-tight my-10"><span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"> Why Me? </span></div>
     <iframe src="https://embed.lottiefiles.com/animation/92445" className="h-32 w-32 rounded-xl" />
    <p id="title" className="text-left text-white font-bold text-lg px-4 w-64 py-4">
     I'll provide you tbe pixel perfect app using the latest tech stack at affordable rates and try my best to deliver before deadline. Also I'll provide a full preview of the app before deploying, so that I can have revisions as much as you want until you are satisfied. I always try my best to provide the best services of mine to my customer. Your satisfication is my first priority.
    </p>
    </div>
    </Fade>
    </div>
    )
}