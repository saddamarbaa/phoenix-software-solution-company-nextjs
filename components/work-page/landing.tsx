/** @format */

import styled from "styled-components";
import { memo, useRef, useEffect } from "react";

const Landing = () => {
	const autoScrollToBottomRef = useRef<HTMLDivElement>(null);

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
				style={{
					paddingTop: "7rem",
					position: "absolute",
					top: "-100px",
				}}
				className='auto-scroll'></div>

			<CustomContainer>
				<h2>OUR WORK</h2>
				<p>Our latest client works</p>
			</CustomContainer>
		</Wrapper>
	);
};

export default memo(Landing);

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
	display: none;

	@media (min-width: 768px) {
		margin: 0 auto;
		display: grid;
		place-items: center;
		text-align: center;
	}

	h2 {
		margin-bottom: 2rem;
		color: var(--color-secondary-second);
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 150%;
	}
	p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		line-height: 1.4;
		@media (min-width: 768px) {
			font-size: 3.25rem;
			max-width: 478px;
			line-height: 150%;
			font-style: normal;
			font-weight: bold;
		}
	}
`;

const Wrapper = styled.div`
	background: var(--color-primary);
	background-image: linear-gradient(
		to right,
		rgba(0, 208, 176, 0.4),
		rgba(15, 11, 51, 0.3),
		#0f0b33
	);

	padding: 4rem 9%;
	color: white;
	position: relative;
	width: 100vw;

	@media (min-width: 768px) {
		padding: 5rem 9%;
		padding: 5rem 9%;
		padding-top: 12rem;
		display: grid;
		place-items: center;
		text-align: center;
	}

	@media (min-width: 1169px) {
		display: grid;
		padding-bottom: 400px !important;
	}
`;
