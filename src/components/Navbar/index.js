import React from "react";
import styled, { useTheme } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { IoDocument } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";

const Nav = styled.div`
	background-color: ${({ theme }) => theme.tnc};
	height: 60px;
	display: flex;
	justify-content: center;
	align-item: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;
	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 60px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1200px;
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
	alignitems: center;
	color: ${({ theme }) => theme.text_primary};
	marginbottom: 20;
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
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.5rem;
		cursor: pointer;
		color: ${({ theme }) => theme.text_primary};
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
  background-color:transparent
  color: ${({ theme }) => theme.primary};
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
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;  
  background-color: ${({ theme }) => theme.tnc};
  transition: all 3s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5 10px  rgba(0, 0, 0, 0.3;
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;

//mobile view styles
export const MobileLink = styled.a`
	color: ${({ theme }) => theme.text_primary};
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	:hover {
		color: ${({ theme }) => theme.primary};
	}

	// &.active {
	//   border-bottom: 2px solid ${({ theme }) => theme.primary};
	// }
`;

const Navbar = () => {
	const [Open, setOpen] = React.useState(false);
	const theme = useTheme();
	return (
		<Nav>
			<NavContainer>
				<NavLogo to="/">
					<A>
						<IoDocument size="2rem" /> <Span>Portfolio</Span>
					</A>
				</NavLogo>
				<MobileIcon>
					<FaBars
						onClick={() => {
							setOpen(!Open);
						}}
					/>
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
			{Open && (
				<MobileMenuLinks open={Open}>
					<MobileLink
						href="#about"
						onClick={() => {
							setOpen(!Open);
						}}
					>
						About
					</MobileLink>
					<MobileLink
						href="#skills"
						onClick={() => {
							setOpen(!Open);
						}}
					>
						Skills
					</MobileLink>
					<MobileLink
						href="#experience"
						onClick={() => {
							setOpen(!Open);
						}}
					>
						Experience
					</MobileLink>
					<MobileLink
						href="#projects"
						onClick={() => {
							setOpen(!Open);
						}}
					>
						Projects
					</MobileLink>
					<MobileLink
						href="#education"
						onClick={() => {
							setOpen(!Open);
						}}
					>
						Education
					</MobileLink>
					<MobileLink
						href="#contact"
						onClick={() => {
							setOpen(!Open);
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
			)}
		</Nav>
	);
};

export default Navbar;
