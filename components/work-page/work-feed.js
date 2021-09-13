/** @format */

import styled from "styled-components";
import Image from "next/image";
import { Avatar } from "@material-ui/core";
import CustomGrid from "./grid";
import { memo } from "react";

const WorkFeed = () => {
	return (
		<WorkWrapper>
			<AbsoluteContainer>
				<CustomContainer>
					<FirstContainer>
						<ButtonsContainer>
							<button className='web'>Web Design </button>
						</ButtonsContainer>
						<h2>Dashboard for NFT marketplace </h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac
							congue sed aliquet malesuada non placerat eget. Fermentum{" "}
						</p>
						<CustomButton>VIEW DETAIL</CustomButton>
						<div className='users'>
							<div className='image'>
								<Avatar src='/work/work1.png' />
								<Avatar src='/work/work2.png' />
								<Avatar src='/work/work3.png' />
							</div>
							<div className='details'>
								<h3>3 Worker</h3>
								<p>Onky, Faris, Ari</p>
							</div>
						</div>
					</FirstContainer>

					<SecondContainer>
						<AbsoluteImageContainer
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Image
								src='/work/disbord.jpg'
								alt='dashborad Image'
								layout='fill'
								objectFit='cover'
							/>
						</AbsoluteImageContainer>
					</SecondContainer>
				</CustomContainer>
			</AbsoluteContainer>

			<HiddenOnBigText>
				<h2>OUR WORK</h2>
				<p className='head-co'>Our goal is to make clients happy</p>
			</HiddenOnBigText>

			<ButtonsWrapper>
				<ButtonsContainer>
					<button className='main-btn'>Web Design (20)</button>
					<button>Mobile Apps (30)</button>
					<button>UI / UX Design (8)</button>
				</ButtonsContainer>
			</ButtonsWrapper>

			<CustomGrid />

			<WorkSection>
				<h2>WORK WITH US</h2>
				<div className='bottom-inner-container'>
					<h1>Have you decided to work on a project with us?</h1>

					<p>
						Interested in joining our team and impacting the world? Reach
						out! We are always looking for new projects to help take
						design to the next level!
					</p>
				</div>

				<CustomButton>HIRE US</CustomButton>
			</WorkSection>
		</WorkWrapper>
	);
};

export default memo(WorkFeed);

const WorkWrapper = styled.section`
	position: relative;
	min-height: 20vh;
	padding: 5rem 9% !important;
	background: #e5e5e5;
	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}

	@media (min-width: 1169px) {
		padding-top: 480px !important;
	}
`;

const FirstContainer = styled.div`
	flex: 1;
	max-width: 570px;
	width: 100%;
	padding: 2rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	background-color: white;
	button.web {
		min-width: 150px;
		color: var(--color-primary);
	}
	h2 {
		margin: 1.4rem;
		font-style: normal;
		font-weight: 700;
		font-size: 52px;
		line-height: 150%;
		color: var(--color-primary);
	}
	p {
		color: #6f6d85;
		font-style: normal;
		font-weight: normal;
		font-size: 1rem;
		line-height: 150%;
	}
	.users {
		margin-top: 2rem;
		display: flex;
		align-items: center;
	}
	.details {
		padding-top: 1rem;
		h3 {
			font-weight: bold;
			color: var(--color-primary);
		}
		p {
			font-size: 14px;
			color: #878599;
		}
	}
	.image {
		display: flex;
		align-items: center;
		margin-right: 2rem;
	}
`;

const SecondContainer = styled(FirstContainer)`
	padding: 0;
`;

const AbsoluteImageContainer = styled.div`
	min-height: 100%;
	min-width: 100%;
	background-color: white;
	overflow: hidden;
`;

const AbsoluteContainer = styled.div`
	width: 100%;
	position: absolute;
	top: -280px;
	left: 0;
	right: 0;
	min-height: 600px;

	@media (max-width: 1169px) {
		display: none;
	}
`;

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
	margin: 0 auto;
	display: flex;
	justify-content: center;
`;

const HiddenOnBigText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #cfced6;
	min-height: 150px;
	overflow: hidden;
	transition: var(--transition-duration);
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	padding: 2rem 0;
	margin: 0 auto;
	margin-bottom: 4rem;
	h2 {
		margin-bottom: 1.3rem;
		color: var(--color-secondary-second);
	}
	p {
		font-size: 1rem;
		font-weight: bold;
		font-size: 1.1rem;
	}
	@media (min-width: 992px) {
		display: none;
	}
`;

const ButtonsWrapper = styled.div`
	margin-bottom: 4rem;
	display: flex;
	justify-content: center;

	@media (min-width: 992px) {
		margin-bottom: 7rem;
	}
`;

const ButtonsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	button {
		min-width: 200px;
		min-height: 2rem;
		cursor: pointer;
		font: inherit;
		background-color: #c4c4c4;
		border: 1px solid #c4c4c4;
		border-radius: 30px;
		padding: 1rem 1.1rem;
		transition-duration: var(--transition-duration);
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
		display: block;
		font-weight: bold;
		color: var(--color-primary);
		margin: 1rem 1.3rem;
		@media (max-width: 568px) {
			width: 80%;
		}

		&:hover {
			background-color: rgba(196, 196, 196, 0.7);
			border-color: rgba(196, 196, 196, 0.7);
		}
	}
	button.all-btn {
		cursor: pointer;
		background-color: var(--color-secondary);
		border: 1px solid var(--color-secondary);
		border-radius: 4px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
		-webkit-border-radius: 4px;
		-moz-border-radius: 4px;
		-ms-border-radius: 4px;
		-o-border-radius: 4px;
		transition-duration: var(--transition-duration);
		color: white;
		&:hover {
			background: rgba(0, 208, 176, 0.7);
			border-color: rgba(0, 208, 176, 0.7);
		}
	}
	button.main-btn {
		border-color: var(--color-secondary-second);
		background-color: var(--color-secondary-second);
		color: white;
		&:hover {
			background-color: rgba(255, 151, 0, 0.5);
			border-color: rgba(255, 151, 0, 0.5);
		}
	}
`;

const WorkSection = styled.div`
	width: 100%;
	max-width: var(--max-width1250);
	overflow: hidden;
	margin: 0 auto;
	margin-top: 5rem;
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
	}
	p {
		color: #6f6d85;
		line-height: var(--line-height);
		max-width: 36.5625rem;
		margin: 1rem 0 !important;
		font-size: 1.1rem;
		@media (max-width: 568px) {
			min-width: 12.5rem;
			font-size: 1rem;
		}
	}
`;

const CustomButton = styled.button`
	display: block;
	min-width: 164px;
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
	color: white;
	margin-top: 3rem;
	@media (max-width: 568px) {
		margin-top: 2rem;
		width: 80%;
	}
	&:hover {
		background: rgba(0, 208, 176, 0.7);
		border-color: rgba(0, 208, 176, 0.7);
	}
`;
