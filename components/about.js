import React, { useState } from "react"
import Roll from 'react-reveal/Roll';
import { Typography } from '@mui/material';

export default function About(){
  
  return(
    <>
    <Roll left>
    <div className="flex flex-col justify-center items-center shadow-2xl  transparent h-5/5 w-80 py-10 mx-8 rounded-xl cursor-pointer hover:scale-110 transition-all duration-150 ease-out shadow-fuchsia-500">
    <h1 id="heavyfont" className="text-center text-4xl leading-none tracking-tight my-10 text-white">About me </h1>
    <img src="https://camo.githubusercontent.com/00ac45fb89dc4c5eebbeaabb1745ac651cb12fe37648704a9561144957b21d64/68747470733a2f2f696d616765732e7765736572762e6e6c2f3f75726c3d617661746172732e67697468756275736572636f6e74656e742e636f6d2f752f37323631393338343f763d343f763d3426683d33303026773d333030266669743d636f766572266d61736b3d636972636c65266d61786167653d3764" className="h-32 w-32 my-4 rounded-full" />
    <p id="title" className="px-4 w-80 font-bold text-white">
    Hello folks, I'm Hitartha, currently studying in 10th grade. I have serious passion for coding. It's been 2 years now since I started coding, have gain a lot of experience working in this arena, now looking for freelancing opportunities. As a tech enthusiast, I keep improving my skills, learning everyday. 
    </p>
    </div>
    </Roll>
    </>
    )
}