import React, { useState } from "react"
import Link from "next/link";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FaDiscord } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai"
import { BsMedium, BsStackOverflow } from "react-icons/bs"

export default function Footer(){
  
  return(
    <div className="flex flex-col justify-center items-center h-72 w-screen bg-black space-y-2 text-white">
    <span id="headertext" className="font-bold text-2xl my-2">Made with Next.JS</span> {/*
    <img src="https://avatars.githubusercontent.com/u/72619384?v=4" className="h-36 w-36 rounded-full my-8" /> */}
    
    <div className="flex flex-row justify-center items-center flex-wrap space-x-4 my-8">
    <Link href="https://www.instagram.com/_.catalyst__/">
    <InstagramIcon /></Link>
    <TwitterIcon />
    <Link href="https://discord.gg/rZKX6au97V"><FaDiscord /></Link>
    <BsMedium />
    <img src="https://www.metartworks.com/assets/img/opensea.png" className="inline h-4 w-4" />
    </div>
    <span className="font-light text-gray-400">© all copyrights reserved, 2022</span>
    </div>
    )
}