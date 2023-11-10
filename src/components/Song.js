import React from "react";
import styled from "styled-components";

const Song = ({ currentSong }) => {
	return (
		<SongContainer>
			{/* <Img src={currentSong.cover} alt={currentSong.name}></Img> */}
			<H1>{currentSong.name}</H1>
			<H2>{currentSong.artist}</H2>
		</SongContainer>
	);
};

const SongContainer = styled.div`
	display: flex;
	flex-direction: column;
	
	text-align: left
`;

const Img = styled.img`
	width: 20%;
	border-radius: 50%;
	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;

const H1 = styled.h2`
	font-size: 16px
`;

const H2 = styled.h3`
	font-size: 14px;
	margin: 2px 0px 5px 0px
`;

export default Song;
