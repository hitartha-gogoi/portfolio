import { useState, useEffect, useRef } from "react"
import { getDocs, collection, query, where, doc, addDoc, serverTimestamp, ArrayUnion, ArrayRemove } from "firebase/firestore";
import router from "next/router"
import { auth, db } from "../components/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { XIcon } from "@heroicons/react/outline"
import CloseIcon from "@mui/icons-material/Close"
import Avatar from "@mui/material/Avatar"
import Typography  from "@mui/material/Typography"
import SearchIcon from "@mui/icons-material/Search"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle"

export default function AddUsers({ open, close }){
  
  if(!open) return;
  
}