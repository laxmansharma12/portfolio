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
import { useEffect, useState } from "react";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import ThemeController from "./components/ThemeController/ThemeController";
import PreLoader from "./components/PreLoader/PreLoader";

const Body = styled.div`
	background-color: ${({ theme }) => theme.bg};
	width: 100%;
	height: 100%;
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

function App() {
	const [openModal, setOpenModal] = useState({ state: false, project: null });
	const [darkMode, setDarkMode] = useState(false);
	const [mode, setMode] = useState("light");
	const [loading, setLoading] = useState(true);

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
	const setthemetoggler = () => {
		if (mode === "light") {
			setThemeToggler(white);
		}
		if (mode === "dark") {
			setThemeToggler(black);
		}
	};
	useEffect(() => {
		const minimumLoadTime = 3000; // 3 seconds
		const startTime = Date.now();

		const handleLoad = () => {
			const currentTime = Date.now();
			const elapsedTime = currentTime - startTime;
			if (elapsedTime < minimumLoadTime) {
				const remainingTime = minimumLoadTime - elapsedTime;
				setTimeout(() => setLoading(false), remainingTime);
			} else {
				setLoading(false);
			}
		};

		window.addEventListener("load", handleLoad);

		// Cleanup the event listener
		return () => {
			window.removeEventListener("load", handleLoad);
		};
	}, []);

	if (loading) {
		return <PreLoader />;
	}

	return (
		<>
			<ThemeController
				mode={mode}
				themeToggler={themeToggler}
				Mode={Mode}
				setthemetoggler={setthemetoggler}
			/>
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
