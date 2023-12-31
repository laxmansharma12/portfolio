import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import Timeline from "@mui/lab/Timeline";
import TimelineContent from "@mui/lab/TimelineContent";
import ExperienceCard from "../Cards/ExperienceCard";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 1;
	align-items: center;
	padding: 50px 0px;
`;

const Wrapper = styled.div`
	max-width: 1100px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	gap: 12px;
`;

const Title = styled.div`
	font-size: 42px;
	font-weight: 600;
	text-align: center;
	margin-top: 20px;
	color: ${({ theme }) => theme.text_primary};
	@media (max-width: 768px) {
		margin-top: 12px;
	}
`;

const Desc = styled.div`
	font-size: 18px;
	max-width: 600px;
	text-align: center;
	color: ${({ theme }) => theme.text_secondary};

	@media (max-width: 768) {
		font-size: 16px;
	}
`;

const Experience = () => {
	return (
		<Container id="experience">
			<Wrapper>
				<Title>Experience</Title>
				<Desc>Here are some of my projects</Desc>
				<Timeline>
					{experiences.map((experience, index) => (
						<TimelineContent sx={{ py: "12px", px: 2 }}>
							<ExperienceCard experience={experience} />
						</TimelineContent>
					))}
				</Timeline>
			</Wrapper>
		</Container>
	);
};

export default Experience;
