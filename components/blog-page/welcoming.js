/** @format */

import styled from "styled-components";
import { memo, useRef, useEffect } from "react";

import AbsoluteRoundBordersComponent from "../absolute-border/absolute-border";

const Welcoming = () => {
	const autoScrollToBottomRef = useRef(null);

	// Auto Scroll functionality
	useEffect(() => {
		window.scrollTo({
			// top: 0,
			behavior: "smooth",
		});
		// Auto Scroll functionality
		autoScrollToBottomRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
	}, []);

	return (
		<Wrapper style={{ position: "relative" }}>
			{/* Empty div for auto scroll */}
			<div
				ref={autoScrollToBottomRef}
				style={{ paddingTop: "7rem", position: "absolute", top: "-100px" }}
				className='auto-scroll'></div>

			<AbsoluteRoundBordersComponent />
			<CustomContainer>
				<AbsoluteContainer>
					<div className='content-container'>
						<CustomButton>Web Apps</CustomButton>
						<div>Mobile Apps</div>
						<div>UI / UX</div>
						<div>Etc. </div>
					</div>
				</AbsoluteContainer>

				<Container>
					<h1>BLOG</h1>
					<h2>Collection of articles from our workers</h2>
				</Container>

				<HiddenContent>
					<div>
						<CustomButton>Web Apps</CustomButton>
					</div>

					<div>
						<CustomButton>Mobile Apps</CustomButton>
					</div>

					<div>
						<CustomButton>UI / UX</CustomButton>
					</div>
				</HiddenContent>
			</CustomContainer>
		</Wrapper>
	);
};

export default memo(Welcoming);

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	width: 100vw;
	min-height: 90vh;
	background: var(--color-primary);
	padding: 5rem 9%;
	padding-top: 12rem;
	padding-bottom: 10rem;
	color: white;
	display: grid;
	place-items: center;
	position: relative;
	background-image: linear-gradient(
		to right,
		#09525f,
		rgba(15, 11, 51, 0.3),
		#0f0b33
	);

	@media (min-width: 1500px) {
		padding-bottom: 10rem;
	}
`;

const Container = styled.div`
	max-width: 35.563rem;
	margin: 0 auto;
	margin-bottom: 2rem;

	h1 {
		@media (max-width: 568px) {
			font-size: 24px;
		}

		text-align: center;
		margin-bottom: 2rem;
		color: var(--color-secondary-second);
	}

	h2 {
		font-size: 1.1rem;
		margin-bottom: 2rem;
		line-height: 1.4;
		max-width: 35.563rem;
		font-weight: normal;

		@media (min-width: 568px) {
			font-size: 3.25rem;
			font-weight: 700;
		}
	}
`;

const HiddenContent = styled.div`
	@media (min-width: 576px) {
		display: none;
	}
	div {
		margin: 3rem 0;
		cursor: pointer;
		text-align: center;
	}
`;

const AbsoluteContainer = styled.div`
	width: 100vw;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 0 9%;

	.content-container {
		display: flex;
		justify-content: space-between;
		font-size: 1rem;
		align-items: center;
		flex-wrap: wrap;
		max-width: 1500px;
		margin: 0 auto;

		div {
			cursor: pointer;
		}
	}

	@media (max-width: 578px) {
		display: none;
	}
`;

const CustomButton = styled.button`
	display: block;
	width: 291px;
	height: 63px;
	font: inherit;
	cursor: pointer;
	font-weight: bold;
	background-color: #f9f9f9;
	border: 1px solid #f9f9f9;
	padding: 0.5rem 1rem;
	border-top: 4px solid var(--color-secondary);
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	transition-duration: var(--transition-duration);
	min-width: fit-content;
	color: var(--color-primary);
	font-weight: bold;
	@media (max-width: 568px) {
		width: 80%;
	}
	&:hover {
		border: 2px solid var(--color-secondary);
	}
`;
