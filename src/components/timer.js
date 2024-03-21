import React, { useState, useEffect } from "react";
import "./index.css";

export const Timer = () => {

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if(isActive) {
      intervalId = setInterval(() => {setSeconds(prevSeconds => prevSeconds + 0.01);}, 10);
      
    }
    return () => clearInterval(intervalId);{[isActive]}  
  })

  return (
    <>
    <h1>Timer</h1>
    <p>Time: {formatTime(seconds)}s</p>
    <button onClick={handleStart}>Start</button>
    <button onClick={handlePauseContinue}>{isActive ? 'Pause' : 'Continue'}</button>
    <button onClick={handleStop}>Stop</button>
    </>
  )
 
};


