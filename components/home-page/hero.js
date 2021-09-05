/** @format */

import Image from "next/image";
import styled from "styled-components";

function Hero() {
	return (
		<HeroWrapper>
			<HeroContainer>
				<ContentContainer>
					<h1>
						We are <span>always</span> there for all your needs
					</h1>
					<p>
						We are experienced in the field of interface design for
						websites, mobile applications
					</p>
					<JobsContain>
						<div>
							<p className='job-success'>30+</p>
							<p>Job Success</p>
							<button>MAKE A SCHEDULE</button>
						</div>
						<div>
							<p className='job-success'>40+</p>
							<p>Products</p>
						</div>
					</JobsContain>
				</ContentContainer>
				<ImageContainer
					style={{
						position: "relative",
						cursor: "pointer",
					}}>
					<Image
						src='/home/home1.jpg'
						alt='Hero Image'
						layout='fill'
						objectFit='cover'
					/>
				</ImageContainer>

				<HiddenImageContainer>
					<Image
						src='/home/home1.jpg'
						alt='Hero Image'
						width={500}
						height={400}
						layout='responsive'
					/>
				</HiddenImageContainer>
			</HeroContainer>
		</HeroWrapper>
	);
}

export default Hero;

const HeroWrapper = styled.div`
	min-height: 100vh;
	background: var(--color-primary);
	padding: 5rem 9%;

	@media (min-width: 768px) {
		padding: 8rem 0 !important;
	}

	@media (min-width: 1169px) {
		padding-bottom: 250px !important;
	}
`;

const HeroContainer = styled.section`
	min-height: 43.5625rem;
	padding-left: 9%;
	display: flex;
	color: white;
	justify-content: space-between;

	@media (max-width: 768px) {
		flex-wrap: wrap;
	}
`;

const ContentContainer = styled.div`
	max-width: 36.1875rem;

	h1 {
		font-size: 4rem;
		margin-bottom: 1.2rem;
		@media (max-width: 768px) {
			font-size: 2rem;
		}

		@media (max-width: 568px) {
			font-size: 1.5rem;
		}

		span {
			color: var(--color-secondary);
		}
	}
	p {
		line-height: var(--line-height);
		font-size: 1.1rem;
	}

	margin-right: 2rem;

	@media (max-width: 768px) {
		max-width: 90vw;
	}
`;

const ImageContainer = styled.div`
	width: 40.5rem;
	min-width: 40.5rem;
	height: 43.5625rem;
	max-height: 43.5625rem;
	overflow: hidden;

	@media (max-width: 768px) {
		display: none;
	}
`;

const JobsContain = styled.div`
	margin-top: 1.2rem;
	display: flex;
	justify-content: space-between;
	max-width: 400px;
	min-width: 300px;

	@media (max-width: 568px) {
		flex-direction: column;
		max-width: 100%;
		min-width: 100%;

		div {
			margin: 1rem 0;
		}
	}

	.job-success {
		border-left: 4px solid var(--color-secondary);
		font-weight: bold;
	}
	p {
		padding-left: 1rem;
	}

	button {
		min-width: 148px;
		height: 48px;
		font: inherit;
		cursor: pointer;
		background-color: var(--color-secondary);
		border: 1px solid var(--color-secondary);
		padding: 0.5rem 1rem;
		border-radius: 4px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
		-webkit-border-radius: 4px;
		-moz-border-radius: 4px;
		-ms-border-radius: 4px;
		-o-border-radius: 4px;
		transition-duration: var(--transition-duration);
		min-width: fit-content;
		color: white;
		margin-top: 3rem;

		&:hover {
			background: rgba(0, 208, 176, 0.7);
			border-color: rgba(0, 208, 176, 0.7);
		}

		@media (max-width: 768px) {
			display: none;
		}
	}
`;

const HiddenImageContainer = styled.div`
	width: 100%;
	max-height: 20rem;
	overflow: hidden;

	@media (min-width: 768px) {
		display: none;
	}

	@media (max-width: 400px) {
		display: none;
	}

	img {
		object-fit: cover;
		display: block;
	}
`;
