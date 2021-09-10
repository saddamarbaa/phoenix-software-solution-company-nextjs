/** @format */

import Image from "next/image";
import styled from "styled-components";

function AboutUsCom() {
	return (
		<AboutAsWrapper>
			<AbsoluteContainer>
				<CustomContainer>
					<div className='content-container'>
						<ImageContainer
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Image
								src='/home/home2.jpg'
								alt='qsak Image'
								layout='fill'
								objectFit='cover'
							/>
						</ImageContainer>
					</div>
				</CustomContainer>
			</AbsoluteContainer>

			<CustomContainer>
				<ContentContainer>
					<h2>ABOUT US</h2>
					<ContentTop>
						<div className='heading'>
							Number One Technology Agency in Pasuruan
						</div>
						<div className='job-success'>
							<p className='job-s'>100+</p>
							<p>Total Clients</p>
							<div className='absolute'></div>
						</div>
						<div className='job-success'>
							<p className='job-s'>50+</p>
							<p>Ongoing Projects</p>
							<div className='absolute'></div>
						</div>
					</ContentTop>
					<ContentBottom>
						<div>
							<p>
								We are a remote design agency based in Omaha, Nebraska,
								working with clients around the world. As passionate
								designers, we love building products that are easy to
								use, accessible, engaging, and delightful. Making people
								smile gets us out of bed every morning. Through
								thoughtful design,
							</p>
						</div>

						<div>
							<p>
								We create delightful digital experiences that make life
								simpler and more enjoyable. We create human-centered
								enterprise software that has the polished, snappy feel
								of the best consumer apps. From Slack to Facebook, we
								team up with marketing departments of large companies
								and startups to deliver award‑winning websites.
							</p>
						</div>
					</ContentBottom>

					<HiddenImageContainer>
						<Image
							src='/home/home2.jpg'
							alt='Hero Image'
							width={500}
							height={400}
							layout='responsive'
						/>
					</HiddenImageContainer>

					<CustomButton>VIEW DETAIL</CustomButton>
				</ContentContainer>
			</CustomContainer>
		</AboutAsWrapper>
	);
}

export default AboutUsCom;

const AboutAsWrapper = styled.div`
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

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}
	@media (min-width: 1169px) {
		padding-top: 560px !important;
		padding-bottom: 450px !important;
	}

	color: white;
`;

const CustomContainer = styled.div`
	width: 100%;
	max-width: 1500px;
	overflow: hidden;
	margin: 0 auto;
	position: relative;
`;

const ContentContainer = styled.div`
	h2 {
		margin-bottom: 2rem;
		color: var(--color-secondary-second);
	}

	p {
		line-height: var(--line-height);
	}
`;

const ContentTop = styled.div`
	@media (max-width: 768px) {
		display: none;
	}

	display: flex;
	align-items: center;
	justify-content: space-between;

	.heading {
		max-width: 500px;
		font-size: 1rem;
		font-weight: bold;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: bold;

		@media (min-width: 768px) {
			font-size: 32px;
			line-height: 150%;
		}
	}

	.job-success {
		max-width: 500px;
		position: relative;

		.job-s {
			font-weight: bold;
			font-size: 24px;
		}

		.absolute {
			position: absolute;
			border-left: 2px solid var(--color-secondary);
			height: 30px;
			left: 0;
			top: 7px;
			height: 34px;
		}

		p {
			padding-left: 1rem;
		}
	}
`;

const ContentBottom = styled.div`
	margin: 2rem 0;

	p {
		margin-bottom: 1.3rem;
		color: #b7b6c2;
	}

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 50px;

		p {
			max-width: 550px;
			padding-right: 1rem;
		}
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
	min-width: 100%;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	background-color: white;
	overflow: hidden;
`;

const CustomButton = styled.button`
	min-width: 153px;
	height: 52px;
	font: inherit;
	cursor: pointer;
	background-color: var(--color-secondary);
	border: 1px solid var(--color-secondary);
	padding: 0.5rem 1rem;
	border-radius: 4px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	transition-duration: var(--transition-duration);
	text-align: center;
	color: white;
	margin-top: 3rem;
	display: block;
	&:hover {
		background: rgba(0, 208, 176, 0.7);
		border-color: rgba(0, 208, 176, 0.7);
	}
	@media (max-width: 768px) {
		width: 80%;
	}
`;

const HiddenImageContainer = styled.div`
	width: 100%;
	max-height: 20rem;
	overflow: hidden;
	margin-top: 4rem;
	@media (min-width: 768px) {
		display: none;
	}

	img {
		object-fit: cover;
		display: block;
	}
`;
