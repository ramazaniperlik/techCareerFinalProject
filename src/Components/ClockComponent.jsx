import React from 'react'
import { useState, useEffect } from 'react';

export default function ClockComponent() {

    const [time, setTime] = useState(()=>{
        new Date().toLocaleTimeString()
    });

    useEffect(() => {
      const interval = setInterval(() => {
        // setCounter((prevCounter) => prevCounter + 1);
        setTime(new Date().toLocaleTimeString())
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="App">
        <h4>{time}</h4>
      </div>
    );
  }