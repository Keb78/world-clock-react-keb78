import React, { useEffect, useState } from "react";
import "./Clock.css";

const Clock = ({ city, timeZone, onMouseEnter, onMouseLeave }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setTime(date.toLocaleTimeString("en-GB", { timeZone }));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeZone]);

  return (
    <button 
      className="clock" 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
    >
      <div className="time">{time}</div>
      <div className="city">{city}</div>
    </button>
  );
};

export default Clock;
