import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import { Bio } from "../../data/constants";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	z-index: 1;
	align-items: center;
	background-color: ${({ theme }) => theme.card};
	box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
	padding: 0px 30px;
	@media screen and (max-width: 640px) {
		padding: 0 16px;
	}
	@media (max-width: 960px) {
		padding: 0px;
	}
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	width: 100%;
	max-width: 1350px;
	padding: 0px 0px 80px 0px;
	gap: 100px;
	color: ${({ theme }) => theme.text_primary};
	// border-radius: 16px;
	@media (max-width: 768px) {
		flex-direction: column;
		gap: 10px;
	}
`;

const Title = styled.div`
	font-size: 42px;
	text-align: center;
	font-weight: 600;
	margin-top: 20px;
	color: ${({ theme }) => theme.text_primary};
	@media (max-width: 768px) {
		margin-top: 12px;
		font-size: 32px;
	}
`;

const Desc = styled.div`
	font-size: 16px;
	max-width: 500px;
	color: ${({ theme }) => theme.text_secondary};
	@media (max-width: 768px) {
		font-size: 16px;
	}
`;
const DescForm = styled.form`
	width: 95%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	margin-top: 28px;
	@media (max-width: 768px) {
		margin-top: 20px;
		font-size: 16px;
		padding: 0 32px;
	}
`;

const ContactForm = styled.form`
	width: 95%;
	max-width: 600px;
	display: flex;
	flex-direction: column;
	padding: 32px;
	border-radius: 16px;
	box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
	margin-top: 28px;
	gap: 12px;
	@media (max-width: 768px) {
		margin-top: 0px;
	}
`;

const ContactInput = styled.input`
	flex: 1;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.text_secondary};
	outline: none;
	font-size: 18px;
	color: ${({ theme }) => theme.text_primary};
	border-radius: 12px;
	padding: 12px 16px;
	&:focus {
		border: 1px solid ${({ theme }) => theme.primary};
	}
`;

const ContactInputMessage = styled.textarea`
	flex: 1;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.text_secondary};
	outline: none;
	font-size: 18px;
	color: ${({ theme }) => theme.text_primary};
	border-radius: 12px;
	padding: 12px 16px;
	&:focus {
		border: 1px solid ${({ theme }) => theme.primary};
	}
`;

const ContactButton = styled.input`
	width: 100%;
	text-decoration: none;
	text-align: center;
	background: ${({ theme }) => theme.gradient1};
	padding: 13px 16px;
	margin-top: 2px;
	border-radius: 12px;
	border: none;
	color: ${({ theme }) => theme.resumeBtnTextColor};
	font-size: 18px;
	font-weight: 600;
`;
const SocialMediaIcons = styled.div`
	display: flex;
	margin-top: 0.5rem;
`;

const SocialMediaIcon = styled.a`
	display: inline-block;
	margin: 0 0.5rem;
	font-size: 1.5rem;
	color: ${({ theme }) => theme.text_primary};
	transition: color 0.2s ease-in-out;
	&:hover {
		color: ${({ theme }) => theme.primary};
	}
`;

const Contact = () => {
	//hooks
	const [open, setOpen] = React.useState(false);
	const form = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_j7uqmqa",
				"template_slsej5d",
				form.current,
				"jPNEp_kwGi-Bo-V6B"
			)
			.then(
				(result) => {
					setOpen(true);
					form.current.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<Container id="contact">
			<Title>Contact</Title>
			<Wrapper>
				<DescForm>
					<h2>Let's Connect</h2>
					<Desc>
						I'm currently looking for new opportunities, my inbox is always
						open. Whether you have a question or just want to say hi, I'll try
						my best to get back to you!
					</Desc>
					<SocialMediaIcons>
						<SocialMediaIcon href={Bio.github} target="display">
							<GitHub />
						</SocialMediaIcon>
						<SocialMediaIcon href={Bio.twitter} target="display">
							<TwitterIcon />
						</SocialMediaIcon>
						<SocialMediaIcon href={Bio.linkedin} target="display">
							<LinkedInIcon />
						</SocialMediaIcon>
					</SocialMediaIcons>
				</DescForm>
				<ContactForm ref={form} onSubmit={handleSubmit}>
					<ContactInput
						placeholder="Your Email"
						name="from_email"
						required
						type="email"
					/>
					<ContactInput placeholder="Your Name" name="from_name" required />
					<ContactInput placeholder="Subject" name="subject" required />
					<ContactInputMessage placeholder="Message" rows="4" name="message" />
					<ContactButton data-cursor="-inverse" type="submit" value="Send" />
				</ContactForm>
				<Snackbar
					open={open}
					autoHideDuration={6000}
					onClose={() => setOpen(false)}
					message="Email sent successfully!"
					severity="success"
				/>
			</Wrapper>
		</Container>
	);
};

export default Contact;
