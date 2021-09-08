/** @format */

import styled from "styled-components";
import GridItem from "../work-page/grid-item";
const Work = () => {
	return (
		<WorkWrapper>
			<AbsoluteContainer>
				<div className='content-container'>
					<h2>OUR WORK</h2>
					<p>Our goal is to make clients happy</p>

					<div className='department'>
						<button className='main-btn'>Web Design (20)</button>
						<button>Mobile Apps (30)</button>
						<button>UI / UX Design (8)</button>
					</div>
				</div>
			</AbsoluteContainer>

			<HiddenOnBigText>
				<h2>OUR WORK</h2>
				<p className='head-co'>Our goal is to make clients happy</p>
			</HiddenOnBigText>

			<GridWrapper>
				<GridContainer>
					<GridItem src='/home/work1.jpg' title='Work Title' />
					<GridItem src='/home/work2.jpg' title='Work Title' />
					<GridItem src='/home/work3.jpg' title='Work Title' />
					<GridItem src='/home/work4.jpg' title='Work Title' />
					<GridItem src='/home/work3.jpg' title='Work Title' />
					<GridItem src='/home/work5.jpg' title='Work Title' />
				</GridContainer>
			</GridWrapper>

			<CustomButton>VIEW ALL WORK</CustomButton>
		</WorkWrapper>
	);
};

export default Work;

const WorkWrapper = styled.section`
	position: relative;
	min-height: 20vh;
	padding: 5rem 9% !important;

	background: #e5e5e5;

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}

	@media (min-width: 1169px) {
		padding-top: 350px !important;
	}
`;

const GridWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3.75rem;
`;

const GridContainer = styled.div`
	width: 100%;
	max-width: 1200px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	column-gap: 3.125rem;
	row-gap: 3.75rem;
`;

const AbsoluteContainer = styled.div`
	width: 100vw;
	position: absolute;
	top: -280px;
	left: 0;
	right: 0;
	padding: 0 9%;

	.content-container {
		height: 561px;
		width: 100%;
		padding: 2rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
		border-radius: 14px;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 0 auto;

		h2 {
			margin-bottom: 2rem;
			color: var(--color-secondary-second);
		}

		p {
			font-size: 3.25rem;
			margin-bottom: 2rem;
			font-weight: 700;
			max-width: 630px;
			line-height: 1.4;
		}
	}

	.department {
		display: flex;
		align-items: center;
		max-width: 630px;
		width: 100%;
		justify-content: space-between;
		margin-top: 2rem;

		button {
			min-height: 42px;
			cursor: pointer;
			font: inherit;
			background-color: #c4c4c4;
			border: 1px solid #c4c4c4;
			border-radius: 30px;
			padding: 0.9rem 1.1rem;
			transition-duration: var(--transition-duration);
			display: block;
			font-weight: bold;
			box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

			&:hover {
				background-color: rgba(196, 196, 196, 0.7);
				border-color: rgba(196, 196, 196, 0.7);
			}
		}
		button.main-btn {
			border-color: var(--color-secondary-second);
			background-color: var(--color-secondary-second);

			&:hover {
				background-color: rgba(255, 151, 0, 0.5);
				border-color: rgba(255, 151, 0, 0.5);
			}
		}
	}

	@media (max-width: 1169px) {
		display: none;
	}
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

	@media (min-width: 666px) {
		display: none;
	}
`;

const CustomButton = styled.button`
	margin: 0 auto;
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
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	-ms-border-radius: 4px;
	-o-border-radius: 4px;
	transition-duration: var(--transition-duration);
	min-width: fit-content;
	color: white;
	margin-top: 3rem;
	@media (max-width: 568px) {
		width: 80%;
	}
	&:hover {
		background: rgba(0, 208, 176, 0.7);
		border-color: rgba(0, 208, 176, 0.7);
	}
`;
