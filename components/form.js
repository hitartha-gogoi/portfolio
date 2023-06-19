import React, { useState, useRef } from "react"
import Roll from 'react-reveal/Roll';
import { AiTwotoneCheckCircle, AiFillInstagram, AiFillTwitterSquare,  AiFillLinkedin, AiFillGithub } from "react-icons/ai"
//import firebase from "firebase";

export default function Form(){
  
    const [ name, setName ] = useState("");
    const [ email, setEmail ] =useState("");
    const [ number, setNumber ] = useState(+91);
    const [ desc, setDesc ] = useState("")
    const [ task, setTask ] = useState("");
    const taskElement = useRef(null);
    
    function updateTask(){
      setTask(taskElement.current.options[taskElement.current.selectedIndex].text)
      console.log(task)
    } 
    
    
  return(
    <>
    <Roll right>
    <div className="flex flex-col shadow-2xl transparent h-5/5 w-80 py-10 rounded-2xl mx-8 cursor-pointer hover:scale-110 transition-all duration-150 ease-out shadow-indigo-500">
    <div id="title" className="text-center text-4xl font-extrabold leading-none tracking-tight my-10 text-white">Form</div>
    <form action={`https://formspree.io/f/mqkogdqv`} method="POST" className="flex flex-col justify-center items-start px-4" >
    <h3 className="text-white text-md font-semibold m-2">Username</h3>
    <input id="name" name="name" className="text-gray-400 rounded shadow bg-gray-800 appearance-none text-md border-2 border-gray-900 w-5/5 h-10 mx-2 focus:outline-none focus:shadow-outline focus:border-purple-500 leading-tight" placeholder="Your name" value={name} onChange={(e)=> setName(e.target.value)} />
    <h3 className="text-white text-md font-semibold m-2">Email</h3>
    <input id="email" label="email" type="email" className="text-gray-400 rounded shadow bg-gray-800 appearance-none text-md border-2 border-gray-900 w-5/5 h-10 mx-2 focus:outline-none focus:shadow-outline focus:border-purple-500 leading-tight" placeholder="Your email" value={email} onChange={(e)=> setEmail(e.target.value)} />
    <h3 className="text-white text-md font-semibold m-2">Phone number</h3>
    <input id="phone-number" label="phone-number" className="text-gray-400 rounded shadow bg-gray-800 appearance-none text-md border-2 border-gray-900 w-5/5 h-10 mx-2 focus:outline-none focus:shadow-outline focus:border-purple-500 leading-tight" placeholder="phone number" value={number} onChange={(e)=> setNumber(e.target.value)} />
  <h3 className="text-white text-md font-semibold m-2">Task</h3>
  <select ref={taskElement} onChange={updateTask} className="text-lg text-white font-semibold rounded border-gray-900 border-2 bg-gray-800 focus:border-purple-500 m-2">
    <option value="1">Landing page</option>
    <option value="2">Full stack app</option>
    <option value="3">Discord bot</option>
  </select>
  <h3 className="text-white text-md font-semibold m-2">describe</h3>
  <textarea id="description" label="description" className="text-gray-400 rounded-md shadow bg-gray-800 appearance-none text-md border-2 border-gray-900 w-4/5 h-10 mx-2 focus:outline-none focus:shadow-outline focus:border-purple-500 leading-tight w-4/5 h-20" value={desc} onChange={(e)=> setDesc(e.target.value)} placeholder="describe how your application should look like" />
   <button type="submit" id="title" className="text-center h-8 w-4/5 my-4 bg-purple-700 text-white font-extrabold text-lg rounded flex justify-center items-center shadow-2xl self-center"> send </button>
    </form>
    </div>
    </Roll>
    
    </>
    )
}