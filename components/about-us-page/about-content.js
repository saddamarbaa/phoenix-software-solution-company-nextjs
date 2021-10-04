/** @format */

import styled from "styled-components";
import Image from "next/image";
import { memo, useRef, useEffect } from "react";

import AbsoluteRoundBordersComponent from "../absolute-border/absolute-border";

const AboutContent = () => {
	const autoScrollToBottomRef = useRef(null);

	// Auto Scroll functionality
	useEffect(() => {
		window.scrollTo({
			// top:0
			behavior: "smooth",
		});
		// Auto Scroll functionality
		autoScrollToBottomRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
	}, []);

	return (
		<Wrapper>
			<AbsoluteRoundBordersComponent />

			{/* Empty div for auto scroll */}
			<div
				ref={autoScrollToBottomRef}
				style={{ paddingTop: "7rem", position: "absolute", top: "-100px" }}
				className='auto-scroll'></div>
			<Container>
				<RightContainer>
					<h2>
						<span>About</span> Software Agency
					</h2>
				</RightContainer>
				<LeftContainer>
					<p>
						We are a remote design agency based in Omaha, Nebraska,
						working with clients around the world. As passionate
						designers, we love building products that are easy to use,
						accessible, engaging, and delightful.
					</p>
				</LeftContainer>
			</Container>

			<ImageWrapper
				style={{
					position: "relative",
					cursor: "pointer",
				}}>
				<ImageContainer
					style={{
						position: "relative",
						cursor: "pointer",
					}}>
					<Image
						src='/about-us/about1.jpg'
						alt='about-us Image'
						layout='fill'
						objectFit='cover'
					/>
				</ImageContainer>
			</ImageWrapper>
		</Wrapper>
	);
};

export default memo(AboutContent);

const Wrapper = styled.div`
	min-height: 100vh;
	padding: 6rem 9%;
	padding-top: 13rem !important;
	background: #e5e5e5;
	width: 100vw;
	position: relative;
	@media (min-width: 768px) {
		padding: 8rem 9%;
	}

	@media (min-width: 1169px) {
		padding-bottom: 500px !important;
	}

	position: relative;
`;

const Container = styled.div`
	width: 100%;
	max-width: var(--max-width1250);
	overflow: hidden;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;

	@media (max-width: 968px) {
		flex-wrap: wrap;
	}
`;

const RightContainer = styled.div`
	margin-bottom: 1.3rem;
	font-size: 24px;

	span {
		color: var(--color-secondary);
	}

	@media (min-width: 768px) {
		margin-right: 1rem;
		max-width: 700px;
		font-weight: bold;
		font-size: 53px;
		font-style: normal;
		line-height: 150%;
	}
`;

const LeftContainer = styled.div`
	line-height: var(--line-height);
	max-width: 585px;
	color: #6f6d85;

	@media (min-width: 968px) {
		font-size: 1.1rem;
		margin-top: -2rem;
	}
`;

const ImageContainer = styled.div`
	min-height: 100%;
	min-width: 100%;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	background-color: white;
	overflow: hidden;
`;

const ImageWrapper = styled.div`
	max-width: 1170px;
	width: 100%;
	height: 21.875rem;
	max-height: 21.875rem;
	margin: 0rem auto;
	margin-top: 2.5rem;
	overflow: hidden;
	@media (min-width: 968px) {
		display: none;
	}
`;
