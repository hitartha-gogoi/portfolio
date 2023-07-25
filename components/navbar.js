import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Typography } from '@mui/material';
import { FcAbout } from "react-icons/fc"
import { SiFiverr } from "react-icons/si"
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"
import { AiOutlineInfoCircle } from "react-icons/ai"


export default function Navbar(){
  return(
    <>
    <div className="flex flex-col justify-start items-center flex-wrap fixed top-0 left-0 bg-black h-screen w-52 z-[1500] text-gray-400 text-md text-sm font-bold py-20 space-y-2">
    
    <div className="flex justify-evenly items-center py-2 w-48 border-y-2 border-gray-800 hover:text-cyan-400 hover:border-cyan-400">
    <LibraryBooksIcon className="inline h-4 w-4" />
    <Link href="/blogs">
    <Typography variant="subtitle6" className="relative right-6"> Blogs </Typography>
    </Link>
    </div>
    
    <Link href="/link-in-bio">
    <div className="flex justify-evenly items-center py-2 w-48 border-y-2 border-gray-800 hover:text-cyan-400 hover:border-cyan-400">
    <span className="inline h-4 w-4"> 🔗 </span>
    <Typography variant="subtitle6" className="relative right-6">     Link In Bio</Typography>
    </div>
    </Link>
    
    <Link href="/resume.pdf">
    <div className="flex justify-evenly items-center py-2 w-48 border-y-2 border-gray-800 hover:text-cyan-400 hover:border-cyan-400">
    <LibraryBooksIcon className="inline h-4 w-4" />
    <Typography variant="subtitle6" className="relative right-6"> Resume </Typography>
    </div>
    </Link>
    
    </div>
    </>
    )
}