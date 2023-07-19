import Link from "next/link"
import { FcAbout } from "react-icons/fc"
import { SiFiverr } from "react-icons/si"
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"
import { AiOutlineInfoCircle, AiOutlineLinkedin, AiFillHome } from "react-icons/ai"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FaDiscord } from 'react-icons/fa';
import { AiFillGithub } from "react-icons/ai"
import { BsMedium, BsStackOverflow,  } from "react-icons/bs"

export default function LinkInBio(){
  
  return(
     <div className="w-full h-full flex flex-col  items-center">
     <div className="flex flex-row justify-between items-center flex-wrap h-14 w-screen bg-black opacity-50 sticky top-0 left-0 z-[1600]">
         <span id="headertext" className="text-lg text-gray-100 ml-6">Link in Bio 🔗</span>

    </div>
    
    
      <img src="https://avatars.githubusercontent.com/u/72619384?v=4" className="lg:my-10 h-40 w-40  rounded-full shadow-2xl object-cover cursor-pointer hover:scale-110 transition-all duration-150 ease-out mx-10 my-6 shadow-blue-500" alt="image" />
      
      <span className="text-white text-center font-extrabold text-3xl" title="bannertitle">Hitartha Gogoi</span>
      
      
      {/* links */}
      
      <div className="my-20">
      
     <Link href="/blogs">
     <div className="flex justify-evenly items-center py-2 w-80 border-y-2 border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 my-4">
        
         <h4 className="font-extrabold"><LibraryBooksIcon /> Blogs</h4>
     </div>
     </Link>
     
     <Link href="/">
     <div className="flex justify-evenly items-center py-2 w-80 border-y-2 border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 mb-4">
         
         <h4 className="font-extrabold"> <AiFillHome /> Portfolio </h4>
     </div>
     </Link>
     
     <Link href="/blogs">
     <div className="flex justify-evenly items-center py-2 w-80 border-y-2 border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 mb-4">
              
              <h4 className="font-extrabold"><TwitterIcon /> Twitter </h4>
          </div>
     </Link>
     
     <Link href="https://www.linkedin.com/in/code-awesome-49720a209">
     <div className="flex justify-evenly items-center py-2 w-80 border-y-2 border-gray-800  mb-4 text-gray-400 hover:text-cyan-400 hover:border-cyan-400">
      
              <h4 className="font-extrabold"><AiOutlineLinkedin className="inline" /> LinkedIn </h4>
          </div>
     </Link>
     
     <Link href="https://discord.gg/bJarTe4B">
     <div className="flex justify-evenly items-center py-2 w-80 border-y-2 border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 mb-4">
            
              <h4 className="font-extrabold"><FaDiscord className="inline" /> Discord </h4>
          </div> 
     </Link>
          
    </div>
          
          {/* footer */}
          
    <div className="flex flex-col justify-center items-center h-72 w-screen bg-black space-y-2 text-white">
    <span id="headertext" className="font-bold text-2xl my-2">Made with Next.JS</span>
    <div className="flex flex-row justify-center items-center flex-wrap space-x-4 my-8">
    <img src="https://www.metartworks.com/assets/img/opensea.png" className="inline h-4 w-4" />
    </div>
        <div className="flex flex-row justify-center items-center flex-wrap space-x-4 my-8">
    <Link href="https://www.instagram.com/_.catalyst__/">
    <InstagramIcon className="hover:scale-125 transition-all duration-150 ease-out" /></Link>
    <TwitterIcon className="hover:scale-125 transition-all duration-150 ease-out" />
    <Link href="https://discord.gg/rZKX6au97V">
    <FaDiscord className="hover:scale-150 transition-all duration-150 ease-out" />
    </Link>
    <BsMedium className="hover:scale-150 transition-all duration-150 ease-out" />
    </div>
    <span className="font-light text-gray-400">© all copyrights reserved, 2022</span>
    </div>
          
         
         
         
    </div>
    )
}