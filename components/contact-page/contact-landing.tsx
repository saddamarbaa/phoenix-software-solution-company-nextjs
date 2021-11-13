/** @format */

import styled from "styled-components";
import { FC, memo, useRef, useEffect } from "react";

const ContactLanding: FC = () => {
	const autoScrollToBottomRef = useRef<HTMLDivElement>(null);

	// Auto Scroll functionality
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
		// Auto Scroll functionality
		autoScrollToBottomRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
	}, []);

	return (
		<Wrapper>
			<TopWrapper>
				{/* Empty div for auto scroll */}
				<div
					ref={autoScrollToBottomRef}
					style={{
						paddingTop: "17rem",
						position: "absolute",
						top: "-100px",
					}}
					className='auto-scroll'></div>

				<CustomContainer>
					<Container>
						<h2>CONTACT US</h2>
						<p>Let&apos;s Talk For The Next Project</p>
					</Container>
				</CustomContainer>
			</TopWrapper>
		</Wrapper>
	);
};

export default memo(ContactLanding);

const Wrapper = styled.div`
	width: 100vw;
	position: relative;
`;

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
	margin: 0 auto;
	width: 100vw;
	display: grid;

	@media (min-width: 768px) {
		place-items: center;
	}
`;

const TopWrapper = styled.div`
	position: relative;
	@media (max-width: 768px) {
	}

	background: var(--color-primary);
	background-image: linear-gradient(
		to right,
		rgba(0, 208, 176, 0.4),
		rgba(15, 11, 51, 0.3),
		#0f0b33
	);

	padding: 5rem 9%;
	padding-top: 12rem !important;

	color: white;
	@media (min-width: 768px) {
		min-height: 80vh;
		padding: 8rem 0 !important;
		padding-top: 15rem !important;
		padding-bottom: 0 !important;
	}

	@media (min-width: 1169px) {
		padding-bottom: 20rem !important;
	}
`;

const Container = styled.div`
	h2 {
		margin-bottom: 2rem;
		color: var(--color-secondary-second);
	}
	p {
		font-size: 1.1rem;
		margin-bottom: 2rem;
		line-height: 1.4;
		@media (min-width: 768px) {
			font-size: 3.25rem;
			font-weight: 700;
			max-width: 478px;
		}
	}
`;
