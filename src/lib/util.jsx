
import{clsx} from "clsx";
import {twMerge} from "tailwind-merge"

const util = (...inputs) => {
  return twMerge(clsx(inputs));
    
  
}

export default util