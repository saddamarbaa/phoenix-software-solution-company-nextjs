/** @format */

import styled from "styled-components";
import UIButton from "../ui/button";
import Image from "next/image";
import GridItem from "../work-page/grid-item";
import { memo } from "react";

import UIParagraph from "../ui/paragraph";

const ServicesOption = () => {
	return (
		<Wrapper>
			<SecondContainer>
				<LeftContent>
					<Heading1>APP DEVELOPMENT</Heading1>
					<Heading2>
						We are aware of the importance of design before making a
						product, that&apos;s why we provide our best service target
						market,
					</Heading2>

					<UIParagraph>
						We create delightful digital experiences that make life
						simpler and more enjoyable. We create enterprise software that
						has the polished, snappy feel of the best consumer apps.
					</UIParagraph>

					<UIParagraph>
						From Slack to Facebook, we team up with marketing departments
						of large companies and startups to deliver award‑winning
						websites.
					</UIParagraph>

					<HiddenImageContainer>
						<Image
							src='/services/services8.jpg'
							alt='services Image'
							width={500}
							height={400}
							layout='responsive'
						/>
					</HiddenImageContainer>

					<div className='hid-s'>
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
							src='/services/services8.jpg'
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
					<GridItem src='/services/services9.jpg' title='Work Title' />
					<GridItem src='/services/services11.jpg' title='Work Title' />
					<GridItem src='/services/services12.jpg' title='Work Title' />
				</GridContainer>
			</ThirdContainer>
		</Wrapper>
	);
};

export default memo(ServicesOption);

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: white;
	padding: 5rem 9%;

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}

	.hid-s {
		@media (max-width: 768px) {
			display: none;
		}
	}
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
		margin-top: 8rem;
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
