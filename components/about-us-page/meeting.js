/** @format */
import styled from "styled-components";
import Grid from "./about-grid";
import { memo } from "react";

const Meeting = () => {
	return (
		<Wrapper>
			<AbsoluteContainer>
				<div className='inner-absolute-container'>
					<FirstContainer>
						<div className='content-container'>
							<h2>Lets Meet Our Team </h2>
							<div>
								<p>7 Member</p>
								<span>DESIGNER - DEVELOPER - MARKETING</span>
							</div>
						</div>
					</FirstContainer>

					<SecondContainer>
						<div>
							{" "}
							<h2>OUR TEAM</h2>
							<p style={{ maxWidth: "620px" }}>
								Making people smile gets us out of bed every morning.
								Through thoughtful design, we create delightful digital
								experiences that make life simpler and more enjoyable.
							</p>
						</div>
					</SecondContainer>
				</div>
			</AbsoluteContainer>

			<CustomContainer>
				<TopContainer>
					<h2>OUR TEAM</h2>
					<p style={{ maxWidth: "620px" }}>
						Making people smile gets us out of bed every morning. Through
						thoughtful design, we create delightful digital experiences
						that make life simpler and more enjoyable.
					</p>
				</TopContainer>

				<BottomContainer>
					<TeamInfo>
						<div className='inner-info-container'>
							<h2>Lets Meet Our Team</h2>
							<div>
								<p>8 Member</p>
								<span>DESIGNER - DEVELOPER - MARKETING</span>
							</div>
						</div>
					</TeamInfo>

					<Grid />

					<WorkSection>
						<h2>WORK WITH US</h2>
						<div className='bottom-inner-container'>
							<h1>Have you decided to work on a project with us?</h1>

							<p>
								Interested in joining our team and impacting the world?
								Reach out! We are always looking for new projects to
								help take design to the next level!
							</p>
						</div>

						<CustomButton>HIRE US</CustomButton>
					</WorkSection>
				</BottomContainer>
			</CustomContainer>
		</Wrapper>
	);
};

export default memo(Meeting);

const CustomContainer = styled.div`
	width: 100%;
	max-width: 1500px;
	overflow: hidden;
	margin: 0 auto;
	background: #f6f6f6;
`;

const Wrapper = styled.div`
	position: relative;
	min-height: 100vh;
	padding: 5rem 9% !important;
	background: #f6f6f6;

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}

	@media (min-width: 1169px) {
		padding-top: 380px !important;
	}
`;

const TopContainer = styled.div`
	@media (min-width: 991px) {
		display: none;
	}

	p {
		line-height: var(--line-height);
		margin-bottom: 1.3rem;
		font-size: 1rem;
		color: #6f6d85;
	}

	h2 {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 1.3rem;
		color: var(--color-secondary-second);
	}
`;

const BottomContainer = styled.div`
	max-width: var(--max-width1250);
	margin: 0 auto;
`;

const TeamInfo = styled.div`
	padding: 1rem 0;

	@media (min-width: 500px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 12.5625rem;
		padding-bottom: 1rem;
		max-width: 35rem;
		overflow: hidden;
		transition: var(--transition-duration);
		background: white;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
		border: 1px solid #cfced6;
		margin: 6rem 0;
	}

	@media (min-width: 991px) {
		display: none;
	}

	h2 {
		font-size: 24px;
		font-weight: 700;

		@media (max-width: 500px) {
			margin-bottom: 2rem;
			color: var(--color-secondary-second);
		}

		@media (min-width: 568px) {
			font-size: 3.25rem;
		}
	}

	.inner-info-container {
		div {
			padding-left: 1rem;
			margin-top: 2rem;
			height: 60px;
			border-left: 2px solid #0f0b33;

			@media (max-width: 500px) {
				display: none;
			}

			p {
				color: var(--color-secondary);
				margin-bottom: 1rem;
				font-size: 1.1rem;
			}

			span {
				color: #878599;
			}
		}
	}
`;

const WorkSection = styled.div`
	@media (min-width: 568px) {
		margin-top: 5rem;
	}

	h2 {
		margin-bottom: 2rem;
		color: var(--color-secondary-second);

		@media (max-width: 568px) {
			font-size: 1.4rem;
		}
	}

	h1 {
		max-width: 477px;
		color: #0f0b33;

		@media (max-width: 568px) {
			font-size: 1.4rem;
		}

		@media (min-width: 991px) {
			font-size: 2rem;
		}
	}

	.bottom-inner-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;

		p {
			line-height: var(--line-height);
			color: #6f6d85;
			max-width: 36.5625rem;
			margin: 1rem 0 !important;
			font-size: 1.1rem;
			@media (max-width: 568px) {
				min-width: 12.5rem;
				font-size: 1rem;
			}
		}
	}
`;

const CustomButton = styled.button`
	display: block;
	width: 148px;
	height: 54px;
	font: inherit;
	cursor: pointer;
	font-weight: bold;
	background-color: var(--color-secondary);
	border: 1px solid var(--color-secondary);
	padding: 0.5rem 1rem;
	border-radius: 4px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

	transition-duration: var(--transition-duration);
	min-width: fit-content;
	color: white;
	margin-top: 2rem;
	@media (max-width: 568px) {
		width: 80%;
	}
	&:hover {
		background: rgba(0, 208, 176, 0.7);
		border-color: rgba(0, 208, 176, 0.7);
	}
`;

const FirstContainer = styled.div`
	flex: 1;
	max-width: 570px;
	width: 100%;
	max-width: 586px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	background-color: white;
	padding: 2.3rem;
	padding-top: 1rem;
	display: grid;
	place-items: center;
	height: 418px;

	.content-container {
		div {
			padding-left: 1rem;
			margin-top: 2rem;
			height: 60px;
			border-left: 2px solid var(--color-primary);
			p {
				color: var(--color-secondary);
				margin-bottom: 1rem;
				font-size: 24px;
				font-weight: bold;
			}
			span {
				color: #878599;
			}
		}
		h2 {
			margin-bottom: 3rem;
			color: var(--color-primary);
			@media (min-width: 992px) {
				max-width: 400px;
				font-style: normal;
				font-weight: bold;
				font-size: 52px;
			}
		}
	}
`;

const SecondContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 3rem;

	div {
		max-width: 533px;
	}

	p {
		line-height: var(--line-height);
		margin: 1rem 0;
		font-style: normal;
		font-size: 1rem;
		color: #6f6d85;
		max-width: 200px;
	}

	h2 {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 1.3rem;
		color: var(--color-primary);
	}
`;

const AbsoluteContainer = styled.div`
	position: absolute;
	padding: 0 9% !important;
	top: -140px;
	left: 0;
	right: 0;
	height: 418px;

	@media (max-width: 1169px) {
		display: none;
	}

	.inner-absolute-container {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
	}
`;
