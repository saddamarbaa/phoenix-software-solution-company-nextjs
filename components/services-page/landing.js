/** @format */

import styled from "styled-components";
import Image from "next/image";
import { memo, useRef, useEffect } from "react";

import { useRouter } from "next/router";

import UIButton from "../ui/button";
import UIParagraph from "../ui/paragraph";
import GridItem from "../work-page/grid-item";

const Landing = () => {
	const router = useRouter();

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
		<>
			<FirstWrapper style={{ position: "relative" }}>
				{/* Empty div for auto scroll */}
				<div
					ref={autoScrollToBottomRef}
					style={{
						paddingTop: "7rem",
						position: "absolute",
						top: "-100px",
					}}
					className='auto-scroll'></div>
			</FirstWrapper>
			<Wrapper>
				<FirstContainer>
					<CustomContainer>
						<CustomHeading1>SERVICES</CustomHeading1>
						<CustomHeading2>
							We provide an injection of creative value to build a
							powerful yet beautiful experience.
						</CustomHeading2>
					</CustomContainer>
				</FirstContainer>

				<SecondContainer>
					<LeftContent>
						<Heading1>WEB DEVELOPMENT</Heading1>
						<Heading2>
							We build websites based on client needs and of course the
							target market, because that&apos;s our expertise
						</Heading2>

						<UIParagraph>
							We create delightful digital experiences that make life
							simpler and more enjoyable. We create enterprise software
							that has the polished, snappy feel of the best consumer
							apps.
						</UIParagraph>

						<UIParagraph>
							From Slack to Facebook, we team up with marketing
							departments of large companies and startups to deliver
							award‑winning websites.
						</UIParagraph>

						<HiddenImageContainer>
							<Image
								src='/services/services1.jpg'
								alt='services Image'
								width={500}
								height={400}
								layout='responsive'
							/>
						</HiddenImageContainer>

						<div
							className='hid-s'
							onClick={() => {
								router.push("/hire-us");
							}}>
							<UIButton>HIRE US</UIButton>
						</div>
					</LeftContent>
					<RightContent>
						<ImageContainer
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Image
								src='/services/services1.jpg'
								alt='services Image'
								layout='fill'
								objectFit='cover'
							/>
						</ImageContainer>

						<AbsoluteContainer></AbsoluteContainer>
					</RightContent>
				</SecondContainer>

				<ThirdContainer>
					<GridContainer>
						<GridItem src='/services/services2.jpg' title='Work Title' />
						<GridItem src='/services/services3.jpg' title='Work Title' />
						<GridItem src='/services/services4.jpg' title='Work Title' />
					</GridContainer>
				</ThirdContainer>

				<ForthContainer>
					<ForthLeftContent>
						<ForthImageContainer
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Image
								src='/services/services5.jpg'
								alt='services Image'
								layout='fill'
								objectFit='cover'
							/>
						</ForthImageContainer>
						<ForthContainerAbsoluteContainer></ForthContainerAbsoluteContainer>
					</ForthLeftContent>

					<ForthRightContent>
						<Heading1>UI & UX DESIGN</Heading1>
						<Heading2>
							We are aware of the importance of design before making a
							product, that&apos;s why we provide our best service
						</Heading2>

						<UIParagraph>
							We create delightful digital experiences that make life
							simpler and more enjoyable. We create enterprise software
							that has the polished, snappy feel of the best consumer
							apps. From Slack to Facebook, we team up with marketing
							departments of large companies and startups to deliver
							award‑winning websites.
						</UIParagraph>

						<UIParagraph>
							From Slack to Facebook, we team up with marketing
							departments of large companies and startups to deliver
							award‑winning websites.
						</UIParagraph>

						<HiddenImageContainer>
							<Image
								src='/services/services5.jpg'
								alt='services Image'
								width={500}
								height={400}
								layout='responsive'
							/>
						</HiddenImageContainer>
						<div
							className='hid-s'
							onClick={() => {
								router.push("/hire-us");
							}}>
							<UIButton>HIRE US</UIButton>
						</div>
					</ForthRightContent>
				</ForthContainer>

				<FifthContainer>
					<GridContainer>
						<GridItem src='/services/servcies17.jpg' title='Work Title' />
						<GridItem src='/services/services6.jpg' title='Work Title' />
						<GridItem src='/services/services7.jpg' title='Work Title' />
					</GridContainer>
				</FifthContainer>
			</Wrapper>
		</>
	);
};

export default memo(Landing);

const FirstWrapper = styled.div`
	width: 100vw;
	position: relative;
`;

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
	margin: 0 auto;
`;
const Wrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	background: #e5e5e5;
	padding: 5rem 9%;
	padding-top: 12rem;
	width: 100vw;
	position: relative;

	@media (min-width: 768px) {
		padding: 15rem 9% !important;
	}

	.hid-s {
		@media (max-width: 768px) {
			display: none;
		}
	}
`;

const FirstContainer = styled.div`
	margin: 0 auto;
	margin-bottom: 2rem;
	max-width: 56.25rem;
`;

const SecondContainer = styled.div`
	width: 100%;
	max-width: 78.125rem;
	display: flex;
	margin: 0 auto;
	flex-wrap: wrap;
	gap: 6rem;
	@media (min-width: 767px) {
		flex-wrap: nowrap;
		margin-top: 11rem;
	}
`;

const Heading1 = styled.h1`
	font-size: 1.2rem;
	margin-bottom: 2rem;
	color: var(--color-secondary-second);
	font-style: normal;
	font-weight: bold;
	line-height: 150%;

	@media (min-width: 568px) {
		font-size: 1.5rem;
	}
`;

const Heading2 = styled.h2`
	font-size: 1.1rem;
	margin-bottom: 2rem;
	line-height: 1.4;
	color: var(--color-primary);

	@media (min-width: 568px) {
		font-size: 1.5rem;
		font-weight: 700;
	}
`;

const CustomHeading1 = styled(Heading1)`
	@media (min-width: 568px) {
		text-align: center;
	}
`;

const CustomHeading2 = styled(Heading2)`
	@media (min-width: 568px) {
		text-align: center;
		font-size: 3.25rem;
	}
`;

const LeftContent = styled.div`
	max-width: 29.813rem;
	@media (min-width: 768px) {
		min-width: 18.75rem;
	}
`;

const RightContent = styled.div`
	height: 28.125rem;
	width: 100%;
	min-width: 25rem;
	max-width: 39.25rem;
	position: relative;
`;

const ImageContainer = styled.div`
	height: 28.125rem;
	min-width: 100%;
	background: #c4c4c4;
	z-index: 3;

	img {
		display: block;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const HiddenImageContainer = styled.div`
	width: 100%;
	max-height: 20rem;
	overflow: hidden;
	@media (min-width: 768px) {
		display: none;
	}

	@media (max-width: 768px) {
		margin-top: 3rem;
	}
	img {
		object-fit: cover;
		display: block;
	}
`;

const AbsoluteContainer = styled.div`
	width: 26.688rem;
	height: 35.563rem;
	position: absolute;
	right: -4.25rem;
	background: var(--color-primary);
	top: -3.75rem;
	z-index: 1;

	@media (max-width: 768px) {
		display: none;
	}
`;

const ThirdContainer = styled.div`
	margin-top: -30rem;
	@media (min-width: 768px) {
		margin-top: 11rem;
		margin-bottom: 16rem;
	}
`;

const GridContainer = styled.div`
	width: 100%;
	max-width: 78.125rem;
	display: flex;
	column-gap: 3rem;
	row-gap: 3.5rem;
	margin: 0 auto;

	@media (max-width: 768px) {
		flex-wrap: wrap;
	}
`;

const ForthContainer = styled(SecondContainer)`
	width: 100%;
	max-width: 78.125rem;
	margin: 0 auto;

	@media (max-width: 768px) {
		margin-top: -27rem;
	}
`;

const ForthImageContainer = styled(ImageContainer)`
	height: 26.125rem;
	min-width: 33.063rem;
	border: 12px solid white;
	border-radius: 12px;
`;

const ForthLeftContent = styled(RightContent)`
	height: 26.125rem;
	width: 100%;
	min-width: 25rem;
	max-width: 33.063rem;
	position: relative;
	margin-right: 3rem;
`;
const ForthRightContent = styled(LeftContent)`
	min-width: auto;
`;

const ForthContainerAbsoluteContainer = styled(AbsoluteContainer)`
	@media (max-width: 768px) {
		display: none;
	}

	width: 26.25rem;
	height: 35.563rem;
	position: absolute;
	left: -5.938rem;
	background: var(--color-primary);
	top: -4.688rem;
	z-index: 1;
`;

const FifthContainer = styled.div`
	margin-top: 3.5rem;
	@media (min-width: 768px) {
		margin-top: 11rem;
	}
`;
