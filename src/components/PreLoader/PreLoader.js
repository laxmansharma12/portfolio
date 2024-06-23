import React from "react";
import styled from "styled-components";

const PreLoader = () => {
	const Div = styled.div`
		position: fixed;
		inset: 0;
		z-index: 999;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #070116;
	`;
	const SVG = styled.svg`
		width: 60%;
		font-weight: 700;
		@media (max-width: 768px) {
			width: 80%;
		}
		text {
			font-size: 5rem;
			stroke-width: 2;
		}

		text.text-body {
			stroke: #fff;
			animation: 3s infinite alternate animate-stroke;
		}

		@keyframes animate-stroke {
			0% {
				fill: transparent;
				stroke: #fff;
				stroke-width: 3;
				stroke-dashoffset: 25%;
				stroke-dasharray: 0 32%;
			}
			50% {
				fill: transparent;
				stroke: #fff;
				stroke-width: 3;
			}
			80%,
			100% {
				fill: #fff;
				stroke: transparent;
				stroke-width: 0;
				stroke-dasharray: -25%;
				stroke-dasharray: 32% 0;
			}
		}
	`;
	const Text = styled.text``;
	return (
		<Div className="loader-container">
			<SVG viewBox="0 0 700 160">
				<Text
					x="50%"
					y="50%"
					dy=".32em"
					textAnchor="middle"
					className="text-body"
				>
					Laxman Sharma.
				</Text>
			</SVG>
		</Div>
	);
};

export default PreLoader;
