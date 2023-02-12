import React, { useState } from 'react'
import "./Footer.css";

function Footer() {
  let time = new Date().toLocaleTimeString();
  const[currentTime,setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval(updateTime, 1000);
  return (
    <div className='footer'>

       <div className='footer-left'>
        <p>{currentTime}</p>
        <p>&#169;Gunjan Bajaj</p>
       </div>

       <div className='footer-right'>
        <p>Kira Intrilogy</p>
        <p>Practical Task</p>
       </div>

    </div>
  )
}

export default Footer