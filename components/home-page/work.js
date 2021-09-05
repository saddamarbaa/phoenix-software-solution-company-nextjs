/** @format */

import styled from "styled-components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Image from "next/image";
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
			<Container>
				<ContentContainer>
					<ImageContainer>
						<Image
							src='/home/work1.jpg'
							alt='work Image'
							width={500}
							height={500}
							layout='responsive'
						/>
					</ImageContainer>
					<Content>
						<div className='content'>
							<div>Judul work 1</div>
							<div className='icons'>
								View Detail
								<ArrowForwardIcon
									style={{ marginLeft: "1rem", color: "#00d0b0" }}
								/>
							</div>
						</div>
						<div className='design'>Web Design</div>
					</Content>
				</ContentContainer>
				<ContentContainer>
					<ImageContainer>
						<Image
							src='/home/work2.jpg'
							alt='work Image'
							width={500}
							height={500}
							layout='responsive'
						/>
					</ImageContainer>
					<Content>
						<div className='content'>
							<div>Judul work 1</div>
							<div className='icons'>
								View Detail
								<ArrowForwardIcon
									style={{ marginLeft: "1rem", color: "#00d0b0" }}
								/>
							</div>
						</div>
						<div className='design'>Web Design</div>
					</Content>
				</ContentContainer>
			</Container>

			<Container3grid>
				<ContentContainer3D>
					<ImageContainer3D>
						<Image
							src='/home/work3.jpg'
							alt='work Image'
							width={500}
							height={500}
							layout='responsive'
						/>
					</ImageContainer3D>
					<Content>
						<div className='content'>
							<div>Judul work 1</div>
							<div className='icons'>
								View Detail
								<ArrowForwardIcon
									style={{ marginLeft: "1rem", color: "#00d0b0" }}
								/>
							</div>
						</div>
						<div className='design'>Web Design</div>
					</Content>
				</ContentContainer3D>
				<ContentContainer3D>
					<ImageContainer3D>
						<Image
							src='/home/work4.jpg'
							alt='work Image'
							width={500}
							height={500}
							layout='responsive'
						/>
					</ImageContainer3D>
					<Content>
						<div className='content'>
							<div>Judul work 1</div>
							<div className='icons'>
								View Detail
								<ArrowForwardIcon
									style={{ marginLeft: "1rem", color: "#00d0b0" }}
								/>
							</div>
						</div>
						<div className='design'>Web Design</div>
					</Content>
				</ContentContainer3D>
				<ContentContainer3D>
					<ImageContainer3D>
						<Image
							src='/home/work5.jpg'
							alt='work Image'
							width={500}
							height={500}
							layout='responsive'
						/>
					</ImageContainer3D>
					<Content>
						<div className='content'>
							<div>Judul work 1</div>
							<div className='icons'>
								View Detail
								<ArrowForwardIcon
									style={{ marginLeft: "1rem", color: "#00d0b0" }}
								/>
							</div>
						</div>
						<div className='design'>Web Design</div>
					</Content>
				</ContentContainer3D>
			</Container3grid>
			<CustomButton>VIEW ALL WORK</CustomButton>
		</WorkWrapper>
	);
};

export default Work;

const WorkWrapper = styled.section`
	position: relative;
	margin-top: 2rem;
	min-height: 20vh;
	padding: 5rem 9% !important;
	background: #e5e5e5;

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}

	@media (min-width: 1169px) {
		padding-top: 450px !important;
	}
`;

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
	grid-column-gap: 3.125rem;
	grid-row-gap: 3.75rem;

	@media (max-width: 568px) {
		grid-template-columns: 1fr;
	}

	.design {
		color: #878599;
	}
`;

const Container3grid = styled(Container)`
	grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
	margin-top: 3.75rem;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #cfced6;
	height: 34rem;
	padding-bottom: 1rem;
	overflow: hidden;
	transition: var(--transition-duration);
	cursor: pointer;
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

	&:hover {
		border: 1px solid var(--color-secondary);
		transform: translate3d(0, -5px, 0);
		-webkit-transform: translate3d(0, -5px, 0);
		-moz-transform: translate3d(0, -5px, 0);
		-ms-transform: translate3d(0, -5px, 0);
		-o-transform: translate3d(0, -5px, 0);
	}

	@media (max-width: 568px) {
		height: 25rem;
	}
`;

const ContentContainer3D = styled(ContentContainer)`
	height: 25rem;
`;

const ImageContainer = styled.div`
	width: 100%;
	max-width: 48rem;
	max-height: 25rem;
	overflow: hidden;
	margin-bottom: 2rem;

	img {
		object-fit: cover;
		display: block;
	}

	@media (max-width: 568px) {
		max-height: 18.188rem;
	}
`;

const ImageContainer3D = styled(ImageContainer)`
	max-height: 18.188rem;
`;

const Content = styled.div`
	width: 100%;
	padding: 1rem;

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.content {
		margin-bottom: 2rem;

		.icons {
			color: var(--color-secondary);
		}
	}
`;

const AbsoluteContainer = styled.div`
	width: 100vw;
	position: absolute;
	top: -280px;
	left: 0;
	right: 0;
	padding: 0 9%;

	.content-container {
		max-width: 1170px;
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
		margin-top: 1rem;

		button {
			min-height: 2rem;
			cursor: pointer;
			font: inherit;
			background-color: #e7e7eb;
			border: 1px solid #e7e7eb;
			border-radius: 30px;
			padding: 0.7rem 1rem;
			transition-duration: var(--transition-duration);

			&:hover {
				background-color: rgba(231, 231, 235, 0.5);
				border-color: rgba(231, 231, 235, 0.5);
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
	display: block;
	margin: 0 auto;
	width: 148px;
	height: 48px;
	font: inherit;
	font-size: 0.9rem;
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

	&:hover {
		background: rgba(0, 208, 176, 0.7);
		border-color: rgba(0, 208, 176, 0.7);
	}
`;
