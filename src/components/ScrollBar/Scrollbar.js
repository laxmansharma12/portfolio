import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const Div = styled.div`
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 9999;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
`;
const Icon = styled.div`
	position: absolute;
	top: 32%;
	left: 32%;
`;

const Scrollbar = () => {
	const [scrollPercentage, setScrollPercentage] = useState(0);

	const updateScrollPercentage = () => {
		const scrollTop = document.documentElement.scrollTop;
		const windowHeight = window.innerHeight;
		const fullHeight = document.documentElement.scrollHeight;
		const scrolled = scrollTop / (fullHeight - windowHeight);
		setScrollPercentage(scrolled * 100);
	};

	useEffect(() => {
		const handleScroll = () => {
			updateScrollPercentage();
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const radius = 28;
	const strokeWidth = 6;
	const normalizedRadius = radius - strokeWidth * 2;
	const circumference = normalizedRadius * 2 * Math.PI;
	const strokeDashoffset =
		circumference - (scrollPercentage / 100) * circumference;

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	if (scrollPercentage <= 0) {
		return null; // Hide the progress bar if scroll percentage is 0 or less
	}

	return (
		<Div className="progressbar" onClick={scrollToTop}>
			<svg height={radius * 2} width={radius * 2}>
				<rect
					x="10"
					y="10"
					width={35}
					height={35}
					fill="#fff"
					rx="50%"
					ry="50%"
				/>
				<circle
					stroke="#ddd"
					fill="transparent"
					style={{ backgroundColor: "#fff" }}
					strokeWidth={strokeWidth}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
				/>
				<circle
					stroke="#007bff"
					fill="transparent"
					strokeWidth={strokeWidth}
					strokeDasharray={circumference + " " + circumference}
					style={{ strokeDashoffset, backgroundColor: "#fff" }}
					r={normalizedRadius}
					cx={radius}
					cy={radius}
				/>
			</svg>
			<Icon className="arrowIcon">
				<FaArrowUp style={{ fontSize: "20px", color: "#007bff" }} />
			</Icon>
		</Div>
	);
};

export default Scrollbar;
