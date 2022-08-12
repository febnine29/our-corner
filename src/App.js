import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Clock from "./components/Clock";
import img1 from "./images/01.jpg";
import img2 from "./images/02.jpg";
import img3 from "./images/03.jpg";
import img4 from "./images/04.jpg";
import img5 from "./images/05.jpg"
// ----------DAYJS CONFIG-----------
const dayjs = require('dayjs')
var weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(weekOfYear)
var duration = require('dayjs/plugin/duration')
dayjs.extend(duration)
// dayjs.extend(dayOfYear)
//import dayjs from 'dayjs' // ES 2015


function App() {
  // ----------CUBE ANIMATION-------------
  const [frontS, setFrontS] = useState(false)
  const [backS, setBackS] = useState(false)
  const [rightS, setRightS] = useState(false)
  const [leftS, setLeftS] = useState(false)
  const [topS, setTopS] = useState(false)
  const [bottomS, setBottomS] = useState(false)
  const classFront = `face front ${frontS ? 'frontS' : ''}`
  const classBack = `face back ${backS ? 'backS' : ''}`
  const classRight = `face right ${rightS ? 'rightS' : ''}`
  const classLeft = `face left ${leftS ? 'leftS' : ''}`
  const classTop = `face top ${topS ? 'topS' : ''}`
  const classBottom = `face bottom ${bottomS ? 'bottomS' : ''}`
  const handleToggleClass = () => {
    setFrontS(!frontS);
    setBackS(!backS);
    setRightS(!rightS);
    setLeftS(!leftS);
    setTopS(!topS);
    setBottomS(!bottomS)
  }
  // ----------COUNT-UP CLOCK-----------
  const [timerMonths, setTimerMonths] = useState();
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("Dec 08,2021 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = now - countDownDate;
      const months = Math.floor(distance / (30 * 24 * 60 ))
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };
  
  useEffect(() => {
    startTimer();
  });

  return (
    <div className="App">
      <div className="top-page">
        <button onClick={handleToggleClass} style={{width: '100px', height: '100px'}}></button>
        <div className="container">
              <div className="cube">
                  <div className={classFront}>
                      <img src={img1} alt="rotate-the-image" />
                  </div>
                  <div className={classBack}>
                      <img src={img2} alt="..." />
                  </div>
                  <div className={classRight}>
                      <img src={img3} alt="..." />
                  </div>
                  <div className={classLeft}>
                      <img src={img4} alt="..." />
                  </div>
                  <div className={classTop}>
                      <img src={img5} alt="..." />
                  </div>
                  <div className={classBottom}>
                      <img src={img1} alt="..." />
                  </div>
              </div>
          </div>
          <Clock
            timerDays={timerDays}
            timerHours={timerHours}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
          />
      </div>
      <div className='bottom-page'>

      </div>
      
    </div>
  );
}

export default App;
