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
import img4 from "./images/04.jpeg";
import img5 from "./images/05.jpeg";
import img6 from "./images/06.jpeg";
import img11 from "./images/11.jpg";
import img12 from "./images/12.jpg";
import img13 from "./images/13.jpg";
import img14 from "./images/14.jpg";
import img15 from "./images/15.jpg";
import img16 from "./images/16.jpg";
import img17 from "./images/17.jpg";
import img18 from "./images/18.jpg";
import img19 from "./images/19.jpg";
import img20 from "./images/20.jpg";
import img21 from "./images/21.jpg";
import img22 from "./images/22.jpg";
import img23 from "./images/23.jpg";
import img24 from "./images/24.jpg";
import img26 from "./images/26.jpg";
import img27 from "./images/27.jpg";
import img28 from "./images/28.jpg";
import img29 from "./images/29.jpg";
import img30 from "./images/30.jpg";
import img31 from "./images/31.jpg";
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
  const images = [img1, img2, img3, img4, img5, img6, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img26, img27, img28, img29, img30, img31];
	const availableImages = [...images];
  const generateFaceImages = (availableImages) => {
    const faceImages = [];
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * availableImages.length);
      const randomImage = availableImages.splice(randomIndex, 1)[0];
      faceImages.push(randomImage);
    }
    return faceImages;
  };
  const handleChangeImages = () => {
    
  }
  const initialFaceImages = generateFaceImages([...images]);

  // State
  const [faceImages, setFaceImages] = useState(initialFaceImages);
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
  const appContainerRef = useRef(null);

  const handleScrollToTop = () => {
    if (appContainerRef.current) {
      appContainerRef.current.scrollTop = 0;
    }
  };
  useEffect(() => {
    startTimer();
    handleScrollToTop()
  });

	return (
		<AppContainer ref={appContainerRef} libraryStatus={libraryStatus}>
			<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
			<div style={{height: '60vh', zIndex:'8'}}>
			<div className="top-page">
        <button onClick={handleToggleClass} className="toggleAni"></button>
        <div className='space'>
          
        </div>
        <div className="container container-cube">
            <div className="cube">
              <div className={classFront}>
                <img src={faceImages[0]} className="fix-front" alt="rotate-the-image" />
              </div>
              <div className={classBack}>
                <img src={faceImages[1]} alt="..." />
              </div>
              <div className={classRight}>
                <img src={faceImages[2]} alt="..." />
              </div>
              <div className={classLeft}>
                <img src={faceImages[3]} alt="..." />
              </div>
              <div className={classTop}>
                <img src={faceImages[4]} alt="..." />
              </div>
              <div className={classBottom}>
                <img src={faceImages[5]} alt="..." />
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
        <h4 style={{textAlign: 'center', marginTop: '50px'}}>Embe của anh, anh yêu em rất nhiều!!! 💜</h4>

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
			/>
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				audioRef={audioRef}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
			/>
			
			<audio
				onLoadedMetadata={updateTimeHandler}
				onTimeUpdate={updateTimeHandler}
				onEnded={songEndHandler}
				ref={audioRef}
				src={currentSong.audio}
			/>
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
