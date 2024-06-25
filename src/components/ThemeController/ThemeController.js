import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import styled from "styled-components";

const Theme = styled.div`
	display: flex;
	position: fixed;
	height: fit-content;
	width: fit-content;
	z-index: 100;
	left: -70px;
	top: 45%;
	text-align: center;
	transition: 0.6s;
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
		@media (max-width: 640px) {
			font-size: 25px;
		}
	}
	:hover {
		transform: translate(70px, 0);
	}
`;

const ThemeController = ({ Mode, mode, themeToggler, setthemetoggler }) => {
	return (
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
									setthemetoggler();
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
											setthemetoggler();
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
				<KeyboardDoubleArrowRightIcon sx={{ fontSize: 30 }} />
			</div>
		</Theme>
	);
};

export default ThemeController;
