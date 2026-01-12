import React, { useEffect, useState } from 'react'
import { href } from 'react-router-dom'
import util from '../lib/util';

let navList = [
    {name : "Home", href : "#hero"},
    {name : "About", href : "#about"},
    {name : "Skills", href : "#skills"},
    {name : "Project", href : "#project"},
     {name : "Contact", href : "#contact"},
    
    
]

const Navbar = () => {
    const [isScrolled, setisScrolled] = useState(false);
useEffect(() => {
    const handlescroll = () => {
        setisScrolled(window.screenY> 10);
    }
    window.addEventListener("scroll",handlescroll)
    return () => window.removeEventListener("scroll",handlescroll)

},[]);

  return (
    <div className='{util("fixed w-full z-40 mt-2 transition-all duration-300", isScrolled? "py-3 bg-background/80 backdrop-blur-md shadow-xs : "py-5")}'>
      <div className='container flex items-center justify-between'>
       <a className='text-xl  font-bold text-primary flex items-center href="#hero'>
        <span className='relative z-10'>
            <span className='text-glow text-foreground'>
                vasu
            </span>
            portfolio
            </span>
       </a>
       <div className=' hidden md:flex space-x-8'>
        {navList.map((list,id)=>(
            <a key ={id} href ={list.href} className='text-foreground/80 hover:text-primary transition-colors duration-300 '>{list.name}</a>
        ))}
      </div>
      </div>
      
    </div>
  )
}

export default Navbar