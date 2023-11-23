import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Hero from "./components/HeroSection";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Experience from "./components/Experience";
import { useState } from "react";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useEffect } from "react";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width:100%;
  height:100%
  overflow-x: hidden;
`;

const Wrapper = styled.div`
	background: linear-gradient(
			38.73deg,
			rgba(204, 0, 187, 0.15) 0%,
			rgba(201, 32, 184, 0) 50%
		),
		linear-gradient(
			141.27deg,
			rgba(0, 70, 209, 0) 50%,
			rgba(0, 70, 209, 0.15) 100%
		);
	width: 100%;
	clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
const Theme = styled.div`
	display: flex;
	position: fixed;
	heigh: 100px;
	width: fit-content;
	z-index: 100;
	left: -70px;
	top: 45%;
	text-align: center;
	transition: 0.3s;
	p {
		font-weight: bold;
	}
	div.themeControls {
		background-color: white;
		border-top-right-radius: 20%;
		border-bottom-right-radius: 20%;
		padding: 5px;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
			rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
			rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
	}
	div.themeControlsArrow {
		padding-top: 5px;
		margin: auto;
		border-top-right-radius: 50%;
		border-bottom-right-radius: 50%;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
	:hover {
		transform: translate(70px, 0);
	}
`;
function App() {
	const [darkMode, setDarkMode] = useState(false);
	const [mode, setMode] = useState("light");
	const [openModal, setOpenModal] = useState({ state: false, project: null });
	const black = {
		color: `black`,
	};
	const white = {
		color: `white`,
	};
	const [themeToggler, setThemeToggler] = useState();
	const Mode = () => {
		if (mode === "light") {
			setMode("dark");
			setDarkMode(true);
		}
		if (mode === "dark") {
			setDarkMode(false);
			setMode("light");
		}
	};
	useEffect(() => {
		if (mode === "light") {
			setThemeToggler(black);
		}
		if (mode === "dark") {
			setThemeToggler(white);
		}
	});
	return (
		<>
			<Theme>
				<div className="themeControls">
					<p>Theme</p>
					<hr></hr>
					<div style={{ paddingTop: "5px" }}>
						{mode === "light" ? (
							<>
								<DarkModeIcon
									onClick={() => {
										Mode();
									}}
								/>
								<p>Dark</p>
							</>
						) : (
							<>
								{mode === "dark" ? (
									<>
										<LightModeIcon
											onClick={() => {
												Mode();
											}}
										/>
										<p>Light</p>
									</>
								) : (
									""
								)}
							</>
						)}
					</div>
				</div>
				<div className="themeControlsArrow" style={themeToggler}>
					<KeyboardDoubleArrowRightIcon sx={{ fontSize: 40 }} />
				</div>
			</Theme>
			<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
				<BrowserRouter>
					<Navbar />
					<Body>
						<Hero />
						<Wrapper>
							<Skills />
							<Experience />
						</Wrapper>
						<Projects openModal={openModal} setOpenModal={setOpenModal} />
						<Wrapper>
							<Education />
							<Contact />
						</Wrapper>
						<Footer />
						{openModal.state && (
							<ProjectDetails
								openModal={openModal}
								setOpenModal={setOpenModal}
							/>
						)}
					</Body>
				</BrowserRouter>
			</ThemeProvider>
		</>
	);
}

export default App;
