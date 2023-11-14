import React from "react";
import styled from "styled-components";
import "../css/nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import astronaut from '../images/astronaut.png'
const Nav = ({ libraryStatus, setLibraryStatus }) => {
	return (
		<NavContainer>
			<div style={{marginRight: 'auto',display: 'flex'}} className="header">
				<img src={astronaut} width={120} height={100} style={{position: 'absolute', top: '0', left: '-30px'}}/>
				<H1 libraryStatus={libraryStatus}>Vibes</H1>
			</div>
			<div>
			<Button onClick={() => setLibraryStatus(!libraryStatus)}>
				Library
				<FontAwesomeIcon icon={faMusic} />
			</Button>
			</div>
			
			
		</NavContainer>
	);
};

const NavContainer = styled.div`
	min-height: 6vh;
	padding: 10px;
	display: flex;
	width: 100%;
	align-items: center;
	@media screen and (max-width: 768px) {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		width: 100%;
	}
`;

const H1 = styled.h1`
	transition: all 0.5s ease;

	@media screen and (max-width: 768px) {
		visibility: ${(p) => (p.libraryStatus ? "hidden" : "visible")};
		opacity: ${(p) => (p.libraryStatus ? "0" : "100")};
		transition: all 0.5s ease;
		margin-left: 50px
	}
`;

const Button = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	border: 2px solid rgb(65, 65, 65);
	padding: 0.5rem;
	transition: all 0.3s ease;
	&:hover {
		background: rgb(65, 65, 65);
		color: white;
	}
`;

export default Nav;
