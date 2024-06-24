import styled from "styled-components";
import { Bio } from "../../data/constants";
import HeroImg from "../Images/laxman1.jpg";
import React from "react";
import TextTransition, { presets } from "react-text-transition";

const HeroContainer = styled.div`
	background-color: ${({ theme }) => theme.card_light};
	display: flex;
	justify-content: center;
	position: relative;
	padding: 50px 30px 80px;

	@media screen and (max-width: 960px) {
		padding: 60px 16px;
	}

	@media screen and (max-width: 640px) {
		padding: 32px 16px;
	}

	z-index: 1;
	clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

// HeroLeftContainer and HeroRightContainer styles
const HeroInnerContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1100px;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

// titles and sub title styles
const HeroLeftContainer = styled.div`
	width: 100%;
	order: 1;
	@media (max-width: 960px) {
		order: 2;
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 640px) {
		order: 2;
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

//dp image styles
const HeroRightContainer = styled.div`
	width: 100%;
	display: flex;
	order: 2;
	justify-content: end;
	gap: 12px;
	@media (max-width: 960px) {
		order: 1;
		justify-content: center;
		align-items: center;
		margin-bottom: 80px;
	}

	@media (max-width: 640px) {
		margin-bottom: 30px;
	}
`;

//self introduction title styles
const Title = styled.div`
	font-weight: 700;
	font-size: 50px;
	color: ${({ theme }) => theme.text_primary};
	line-height: 68px;
	@media (max-width: 960px) {
		text-align: center;
	}

	@media (max-width: 640px) {
		font-size: 40px;
		line-height: 48px;
		margin-bottom: 8px;
	}
`;

//--------------title animation style START---------------------------------
const TextLoop = styled.div`
	font-weight: 600;
	font-size: 32px;
	display: flex;
	gap: 12px;
	color: ${({ theme }) => theme.text_primary};
	line-height: 68px;
	@media (max-width: 960px) {
		text-align: center;
	}
	@media (max-width: 640px) {
		font-size: 22px;
		line-height: 48px;
		margin-bottom: 16px;
	}
`;

const Span = styled.span`
	color: ${({ theme }) => theme.primary};
	cursor: pointer;
`;

//--------------title animation style END---------------------------------

// sub-title styles
const SubTitle = styled.div`
	font-size: 20px;
	line-height: 32px;
	margin-bottom: 42px;
	color: ${({ theme }) => theme.text_primary + 95};

	@media (max-width: 960px) {
		text-align: center;
	}

	@media (max-width: 640px) {
		font-size: 16px;
		line-height: 32px;
	}
`;

//resume button styles
const ResumeButton = styled.a`
	-webkit-appearance: button;
	-moz-appearance: button;
	appearance: button;
	text-decoration: none;
	width: 95%;
	max-width: 200px;
	text-align: center;
	padding: 16px 0;
	color: ${({ theme }) => theme.resumeBtnTextColor};
	border-radius: 20px;
	cursor: pointer;
	font-size: 20px;
	font-weight: 600;
	transition: all 0.2s ease-in-out !important;
	background: ${({ theme }) => theme.gradient1};

	margin-right: 10px;
	&:hover {
		transform: scale(1.05);
		transition: all 0.4s ease-in-out;
		/* box-shadow: 20px 20px 60px #1f2634; */
		filter: brightness(1);
	}

	@media (max-width: 640px) {
		padding: 12px 0;
		margin-right: 0;
		font-size: 18px;
	}
`;
const ContactMeButton = styled.a`
	-webkit-appearance: button;
	-moz-appearance: button;
	appearance: button;
	text-decoration: none;
	width: 95%;
	max-width: 200px;
	text-align: center;
	padding: 14px 0;
	color: ${({ theme }) => theme.contactBtnText};
	border-radius: 20px;
	cursor: pointer;
	font-size: 20px;
	font-weight: 600;
	transition: all 0.2s ease-in-out !important;
	background: transperent;
	border: 2px solid ${({ theme }) => theme.contactBtnBorder};

	&:hover {
		transform: scale(1.05);
		transition: all 0.4s ease-in-out;
		/* box-shadow:  20px 20px 60px black, */
		filter: brightness(1);
	}

	@media (max-width: 640px) {
		padding: 12px 0;
		margin-top: 10px;
		font-size: 18px;
	}
`;

//---------------dp image styles------------------------------
const Image = styled.img`
	position: relative;
	width: 100%;
	height: 100%;
	max-width: 400px;
	max-height: 400px;
	object-position: center;
	background-repeat: no-repeat;
	box-shadow: 10px 10px 20px ${({ theme }) => theme.shadow},
		-10px -10px 20px ${({ theme }) => theme.shadow};
	animation: profile_animate 8s ease-in-out infinite 0s;
	@media (max-width: 768px) {
		max-width: 400px;
		max-height: 400px;
	}

	@media (max-width: 640px) {
		max-width: 280px;
		max-height: 280px;
	}

	@keyframes profile_animate {
		0% {
			border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
		}
		50% {
			border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
		}
		100% {
			border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
		}
	}
`;

const Hero = () => {
	const [index, setIndex] = React.useState(0);
	React.useEffect(() => {
		const intervalId = setInterval(() => setIndex((index) => index + 1), 2150);
		return () => clearTimeout(intervalId);
	}, []);
	return (
		<div id="about">
			<HeroContainer>
				<HeroInnerContainer>
					<HeroLeftContainer>
						<Title>
							Hi, I am <br /> {Bio.name}
						</Title>
						<TextLoop>
							I am a
							<Span>
								<TextTransition springConfig={presets.wobbly}>
									{Bio.roles[index % Bio.roles.length]}
								</TextTransition>
							</Span>
						</TextLoop>
						<SubTitle>{Bio.description}</SubTitle>
						<ResumeButton
							data-cursor="-inverse"
							href={Bio.resume}
							target="display"
						>
							Check Resume
						</ResumeButton>
						<ContactMeButton href="#contact">Contact Me</ContactMeButton>
					</HeroLeftContainer>
					<HeroRightContainer>
						<Image
							data-cursor-text="Laxman Sharma"
							src={HeroImg}
							alt="heroImg"
						/>
					</HeroRightContainer>
				</HeroInnerContainer>
			</HeroContainer>
		</div>
	);
};

export default Hero;
