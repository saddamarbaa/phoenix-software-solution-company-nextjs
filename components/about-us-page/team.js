/** @format */

import styled from "styled-components";
import Image from "next/image";

const Team = () => {
	return (
		<Wrapper>
			<AbsoluteContainer>
				<CustomContainer>
					<div className='content-container'>
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
					</div>
				</CustomContainer>
			</AbsoluteContainer>

			<CustomContainer>
				<TopContainer>
					<h2>Here We Are</h2>
					<InnerContainer>
						<RightContainer>
							<p>
								We are a remote design studio situated in Omaha that
								works with clients worldwide. As enthusiastic designers,
								we take pride in creating things that are simple to use,
								accessible, engaging, and delicious. Every morning, we
								get out of bed by making people smile. Through
								deliberate design,
							</p>
						</RightContainer>
						<LeftContainer>
							<p>
								We build delightful digital experiences that simplify
								and enhance everyday living. We design enterprise
								software that is human-centered and has the polished,
								snappy feel of the finest consumer apps.
							</p>
							<p>
								We collaborate with marketing departments at huge
								organizations and startups to create award-winning
								websites, ranging from Slack to Facebook.
							</p>
						</LeftContainer>
					</InnerContainer>
				</TopContainer>
				<BottomContainer>
					<div className='grid'>
						<h3>100+</h3>
						<p>Total Clients</p>
					</div>
					<div className='grid'>
						<h3>50+</h3>
						<p>Ongoing Project</p>
					</div>
					<div className='grid'>
						<h3>12</h3>
						<p>Countries</p>
					</div>
					<div className='grid'>
						<h3>99+</h3>
						<p>Good Reviews</p>
					</div>
				</BottomContainer>
			</CustomContainer>
		</Wrapper>
	);
};

export default Team;

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	min-height: 100vh;
	background: var(--color-primary);
	background-image: linear-gradient(
		to right,
		rgba(0, 208, 176, 0.4),
		rgba(15, 11, 51, 0.3),
		#0f0b33
	);
	padding: 5rem 9%;
	position: relative;
	color: white;

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}

	@media (min-width: 1169px) {
		padding-top: 500px !important;
		padding-bottom: 280px !important;
	}

	@media (min-width: 991px) {
		padding-bottom: 280px !important;
	}
`;

const AbsoluteContainer = styled.div`
	width: 100vw;
	position: absolute;
	top: -360px;
	left: 0;
	right: 0;
	padding: 0 9%;

	.content-container {
		max-width: 1170px;
		height: 720px;
		width: 100%;
		margin: 0 auto;
	}

	@media (max-width: 1169px) {
		display: none;
	}
`;

const ImageContainer = styled.div`
	min-height: 100%;
	width: 100%;
	max-width: 1170px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	background-color: white;
	overflow: hidden;
	margin: 0 auto;
`;

const TopContainer = styled.div`
	max-width: var(--max-width1250);
	margin: 0 auto;

	p {
		line-height: var(--line-height);
		margin-bottom: 1.3rem;

		@media (min-width: 968px) {
			font-size: 1.1rem;
		}
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1.3rem;
	}
`;

const InnerContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	p {
		color: #b7b6c2;
	}
`;

const RightContainer = styled.div`
	@media (min-width: 768px) {
		width: 550px;
		max-width: 571px;
		margin-right: 1rem;
	}
`;

const LeftContainer = styled.div`
	max-width: 500px;
`;

const BottomContainer = styled.div`
	max-width: var(--max-width1250);
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-top: 1rem;

	.grid {
		margin-bottom: 2rem;
		min-width: 150px;
	}

	h3 {
		color: var(--color-secondary-second);
		margin-bottom: 1rem;
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 150%;
	}
`;
