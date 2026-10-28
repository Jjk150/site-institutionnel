"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
export default function BackToTop(){
 const [visible,setVisible]=useState(false);
 useEffect(()=>{const update=()=>setVisible(window.scrollY>700);window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update);},[]);
 return <button type="button" className={`back-to-top ${visible?"shown":""}`} aria-label="Revenir en haut de la page" tabIndex={visible?0:-1} onClick={()=>window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}><ArrowUp size={20}/></button>;
}
