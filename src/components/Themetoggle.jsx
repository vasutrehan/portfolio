import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import util from '../lib/util';


const Themetoggle = () => {
      const [isDarkMode,setisDarkMode]= useState(false);
useEffect(() => {
    const learn = localStorage.getItem("theme");
    if(learn === "dark") {
        setisDarkMode(true);
         document.documentElement.classList.add("dark")

    } else {
        setisDarkMode(false);
         document.documentElement.classList.remove("dark")
    }
},[])

      const ThemeToggle = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove("dark")
         setisDarkMode(false);
         localStorage.setItem("theme","light")
        } else {
            document.documentElement.classList.add("dark")
          setisDarkMode(true);
          localStorage.setItem("theme","dark")
        }
      }

  return (
    <div>
        <button onClick={ThemeToggle}  className={util(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden")}>{isDarkMode ? <Sun className='h-6 w-6 text-yellow-300'/>:<Moon className='h-6 w-6 text-blue-900'/>}</button>
    </div>
  )
}

export default Themetoggle