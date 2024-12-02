import React, { useState, useEffect } from "react";
import "./styles.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <h1 className="timer-display">{formatTime(time)}</h1>
      <div className="buttons-container">
        <button
          onClick={handleStart}
          disabled={isRunning}
          className="btn start-btn"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          disabled={!isRunning}
          className="btn stop-btn"
        >
          Stop
        </button>
        <button onClick={handleReset} className="btn reset-btn">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
