import React, { useEffect, useState } from 'react'

const Starbackground = () => {
    const [stars,setstars] = useState([]);
    const [meteors,setmeteors] = useState([]);

    useEffect(() => {
        generators();
        metgenerators();
    },[])

    const generators = () => {
        const numstars = Math.floor(window.innerWidth * window.innerHeight / 10000 )

        const nesStars = [];

        for(let i= 0; i<numstars; i++) {
          nesStars.push({
            id : i,
            size : Math.random() * 3 +1,
            x :Math.random() * 100,
            y :Math.random() * 100,
            opacity :Math.random() * 0.5 + 0.5,
            animationDuration : Math.random() * 4 + 2

          })
        }
        setstars(nesStars);
    }

    const metgenerators = () => {
        const nummeteor = 4;

        const mets = [];

        for(let i= 0; i<nummeteor; i++) {
          mets.push({
            id : i,
            size : Math.random() * 2 + 1,
            x :Math.random() * 100,
            y :Math.random() * 20,
            delay :Math.random() * 15,
            animationDuration : Math.random() * 3 + 3

          })
        }
         setmeteors(mets);
    }
  return (
    <div className='fixed overflow-hidden pointer-events-none inset-0 z-0'>
      {stars.map((stars) => (
        <div key ={stars.id} className='star animate-pulse-subtle' style={{
            width : stars.size + "px",

            height :stars.size + "px",
            left :stars.x + "%",
            top :stars.y + "%",
            opacity :stars.opacity,
             animationDuration :stars.animationDuration + "s",
        }}/>
      ))}

       {meteors.map((meteors) => (
        <div key ={meteors.id} className=' meteor animate-meteor' style={{
            width : meteors.size*50 + "px",

            height :meteors.size*2 + "px",
            left :meteors.x + "%",
            top :meteors.y + "%",
            animationDelay :meteors.delay,
             animationDuration :meteors.animationDuration + "s",
        }}/>
      ))}


      
    </div>
  )
}

export default Starbackground