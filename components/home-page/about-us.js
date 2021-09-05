/** @format */

import Image from "next/image";
import styled from "styled-components";

function AboutUsCom() {
	return (
		<AboutAsWrapper>
			<AbsoluteContainer>
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
			</AbsoluteContainer>

			<AboutAsContainer>
				<ContentContainer>
					<h2>ABOUT US</h2>
					<ContentTop>
						<div className='heading'>
							Number One Technology Agency in Pasuruan
						</div>
						<div className='job-success'>
							<p>100+</p>
							<p>Total Clients</p>
							<div className='absolute'></div>
						</div>
						<div className='job-success'>
							<p>50+</p>
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
				</ContentContainer>
			</AboutAsContainer>
		</AboutAsWrapper>
	);
}

export default AboutUsCom;

const AboutAsWrapper = styled.div`
	min-height: 100vh;
	background: var(--color-primary);
	padding: 5rem 9%;
	position: relative;

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}
	@media (min-width: 1169px) {
		padding-top: 560px !important;
		padding-bottom: 400px !important;
	}

	color: white;
`;

const AboutAsContainer = styled.section``;

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
		font-size: 1rem;
		font-weight: bold;
		font-size: 1.1rem;
	}

	.job-success {
		font-weight: bold;
		max-width: 500px;
		position: relative;

		.absolute {
			position: absolute;
			border-left: 2px solid var(--color-secondary);
			height: 30px;
			background: red;
			left: 0;
			top: 3px;
			height: 22px;
		}

		p {
			padding-left: 1rem;
		}
	}
`;

const ContentBottom = styled.div`
	margin: 2rem 0;

	p {
		margin-bottom: 1rem;
	}

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: space-between;

		p {
			max-width: 500px;
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
