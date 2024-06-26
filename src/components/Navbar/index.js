import React, { useEffect, useRef } from "react";
import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { IoDocument } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { FaXmark } from "react-icons/fa6";

const Nav = styled.div`
	background-color: ${({ theme }) => theme.tnc};
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;
`;

const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 60px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1200px;
	@media screen and (max-width: 768px) {
		align-items: center;
	}
`;

//---------------logo styles START--------------
const NavLogo = styled(LinkR)`
	width: 80%;
	padding: 0 0 0 10px;
	display: flex;
	justify-content: start;
	cursor: pointer;
	align-items: center;
	text-decoration: none;
	@media (max-width: 640px) {
		padding: 0 0px;
	}
`;
const A = styled.a`
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.text_primary};
	margin-bottom: 20;
	cursor: pointer;
`;
// logo text
const Span = styled.div`
	padding: 0 4px;
	font-weight: bold;
	font-size: 18px;
	text-align: center;
	margin: auto;
	color: ${({ theme }) => theme.text_primary};
`;
//---------------logo styles END--------------

//mobile view nav toggle button styles
const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		font-size: 1.5rem;
		cursor: pointer;
		color: ${({ theme }) => theme.text_primary};
		transition: transform 0.3s;
		&.open {
			transform: rotate(90deg);
		}
	}
`;

const NavItems = styled.ul`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 32px;
	padding: 0 6px;
	list-style: none;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const NavLink = styled.a`
	color: ${({ theme }) => theme.text_primary};
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		color: ${({ theme }) => theme.primary};
	}
`;

//-----------------github button styles START-----------------
const ButtonContainer = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
	padding: 0 6px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const GithubButton = styled.a`
	background-color: transparent;
	border: 1.8px solid ${({ theme }) => theme.primary};
	justify-content: center;
	display: flex;
	align-items: center;
	height: 70%;
	border-radius: 20px;
	color: ${({ theme }) => theme.primary};
	cursor: pointer;
	padding: 0 20px;
	font-weight: 500;
	text-decoration: none;
	font-size: 16px;
	transition: all 0.6s ease-in-out;
	:hover {
		background: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.white};
	}
	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`;
//-----------------github button styles END-----------------

//mobile view navlinks styles
const MobileMenuLinks = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	position: absolute;
	top: 60px;
	right: 0;
	width: 43%;
	padding: 12px 40px 24px 20px;
	background-color: ${({ theme }) => theme.tnc};
	border-radius: 0 0 20px 20px;
	/* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3); */
	opacity: ${({ open }) => (open ? "1" : "0")};
	visibility: ${({ open }) => (open ? "visible" : "hidden")};
	z-index: 1;
	transition: opacity 0.5s, visibility 0.5s;
	animation: ${({ open }) =>
		open ? "navAnimateOpen 0.5s" : "navAnimateClose 0.5s"};
	GithubButton {
		margin-right: 10px;
	}
	@keyframes navAnimateOpen {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes navAnimateClose {
		from {
			opacity: 1;
			transform: translateY(0);
		}
		to {
			opacity: 0;
			transform: translateY(-10px);
		}
	}
`;

//mobile view styles
export const MobileLink = styled.a`
	color: ${({ theme }) => theme.text_primary};
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	padding-left: 20px;
	:hover {
		color: ${({ theme }) => theme.primary};
	}

	// &.active {
	//   border-bottom: 2px solid ${({ theme }) => theme.primary};
	// }
`;

const Navbar = () => {
	const [open, setOpen] = React.useState(false);
	const navHide = useRef();
	const mobileIcon = useRef();
	const theme = useTheme();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				navHide.current &&
				!navHide.current.contains(event.target) &&
				!mobileIcon.current.contains(event.target)
			) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<Nav>
			<NavContainer>
				<NavLogo to="/">
					<A>
						<IoDocument size="2rem" /> <Span>Portfolio</Span>
					</A>
				</NavLogo>
				<MobileIcon ref={mobileIcon} className={open ? "open" : ""}>
					{!open ? (
						<FaBars onClick={() => setOpen(true)} />
					) : (
						<FaXmark onClick={() => setOpen(false)} />
					)}
				</MobileIcon>
				<NavItems>
					<NavLink href="#about">About</NavLink>
					<NavLink href="#skills">Skills</NavLink>
					<NavLink href="#experience">Experience</NavLink>
					<NavLink href="#projects">Projects</NavLink>
					<NavLink href="#education">Education</NavLink>
					<NavLink href="#contact">Contact</NavLink>
				</NavItems>
				<ButtonContainer>
					<GithubButton href={Bio.github} target="_blank">
						Github Profile
					</GithubButton>
				</ButtonContainer>
			</NavContainer>
			<MobileMenuLinks open={open} ref={navHide}>
				<MobileLink
					href="#about"
					onClick={() => {
						setOpen(!open);
					}}
				>
					About
				</MobileLink>
				<MobileLink
					href="#skills"
					onClick={() => {
						setOpen(!open);
					}}
				>
					Skills
				</MobileLink>
				<MobileLink
					href="#experience"
					onClick={() => {
						setOpen(!open);
					}}
				>
					Experience
				</MobileLink>
				<MobileLink
					href="#projects"
					onClick={() => {
						setOpen(!open);
					}}
				>
					Projects
				</MobileLink>
				<MobileLink
					href="#education"
					onClick={() => {
						setOpen(!open);
					}}
				>
					Education
				</MobileLink>
				<MobileLink
					href="#contact"
					onClick={() => {
						setOpen(!open);
					}}
				>
					Contact
				</MobileLink>
				<GithubButton
					style={{
						padding: "10px 16px",
						background: `${theme.primary}`,
						color: "white",
						width: "max-content",
					}}
					href="https://github.com/laxmansharma12"
					target="_blank"
				>
					Github Profile
				</GithubButton>
			</MobileMenuLinks>
		</Nav>
	);
};

export default Navbar;
