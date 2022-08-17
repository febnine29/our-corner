import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "./App.css";

// Import components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Credit from "./components/Credit";
// Import data
import data from "./data";
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


const App = () => {
	// Ref
	const audioRef = useRef(null);

	// State
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [libraryStatus, setLibraryStatus] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

	// Functions
	const updateTimeHandler = (e) => {
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		setSongInfo({ ...songInfo, currentTime, duration });
	};

	const songEndHandler = async () => {
		let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
		let nextSong = songs[(currentIndex + 1) % songs.length];
		await setCurrentSong(nextSong);

		const newSongs = songs.map((song) => {
			if (song.id === nextSong.id) {
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs);

		if (isPlaying) {
			audioRef.current.play();
		}
	};

	// ----------DATE COUNT_UP-----------
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
		<AppContainer libraryStatus={libraryStatus}>
			<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />1
			<div style={{height: '60vh', zIndex:'8'}}>
			<div className="top-page">
        <button onClick={handleToggleClass}></button>
        <div className='space'>
          
        </div>
        <div className="container container-cube">
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
        <span>testt</span>
      </div>

			</div>
			<Player
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
				songs={songs}
				setSongs={setSongs}
			/>3
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>4
			
			<audio
				onLoadedMetadata={updateTimeHandler}
				onTimeUpdate={updateTimeHandler}
				onEnded={songEndHandler}
				ref={audioRef}
				src={currentSong.audio}
			/>5
		</AppContainer>
	);
};

const AppContainer = styled.div`
	transition: all 0.5s ease;
	height: 100vh;
	margin-left: ${(p) => (p.libraryStatus ? "20rem" : "0")};
	@media screen and (max-width: 768px) {
		margin-left: 0;
	}
`;

export default App;
