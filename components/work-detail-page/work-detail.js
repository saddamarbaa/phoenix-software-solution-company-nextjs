/** @format */

import styled from "styled-components";
import { memo } from "react";
import Image from "next/image";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import GridItem from "../work-page/grid-item";
import UIParagraph from "../ui/paragraph";

const WorkDetailComponent = () => {
	return (
		<Wrapper>
			<CustomContainer>
				<section>
					<h2>DETAIL WORK</h2>
					<div className='inner-container'>
						<div>
							<h1>Landing Page for Marketing</h1>

							<div className='project'>
								<p>Project Type</p>
								<h3>Website Application</h3>
							</div>
						</div>
						<div>
							<UIParagraph>
								The founding members of this project approached us with
								an idea for a platform. We used our history of
								delivering platforms to the market to help them identify
								important features and estimate how long it would take
								to develop those features.
							</UIParagraph>

							<UIParagraph>
								Once we had a solid set of features, we went through our
								collaborative design and user experience process. Using
								tools like Figma, we nailed a great design before
								starting any development.
							</UIParagraph>
							<CustomButton>LIVE PREVIEW</CustomButton>
						</div>
					</div>

					<HiddenImageContainer>
						<Image
							src='/home/home2.jpg'
							alt='Hero Image'
							width={500}
							height={400}
							layout='responsive'
						/>
					</HiddenImageContainer>
				</section>

				<ImageSection>
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
				</ImageSection>

				<FeatureSection>
					<div>
						<p>
							<FiberManualRecordIcon
								style={{
									color: "#00d0b0",
									fontSize: "1.3rem",
									marginRight: "10px",
								}}
							/>
							<span>
								Implemented machine learning on our video processing
								networks to identify and block pornography and violence
								automatically.
							</span>
						</p>
						<p>
							<FiberManualRecordIcon
								style={{
									color: "#00d0b0",
									fontSize: "1.3rem",
									marginRight: "10px",
								}}
							/>
							<span>
								Implemented Kubernetes to deliver Streaming and video
								that can support millions of users at the same time.
							</span>
						</p>

						<p>
							<FiberManualRecordIcon
								style={{
									color: "#00d0b0",
									fontSize: "1.3rem",
									marginRight: "10px",
								}}
							/>
							<span>
								Super admin panels control the content and users on the
								platform.
							</span>
						</p>

						<p>
							<FiberManualRecordIcon
								style={{
									color: "#00d0b0",
									fontSize: "1.3rem",
									marginRight: "10px",
								}}
							/>
							<span>
								Auto banning and flagging features from stopping
								malicious users.
							</span>
						</p>
					</div>
					<div>
						<p>
							<FiberManualRecordIcon
								style={{
									color: "#00d0b0",
									fontSize: "1.3rem",
									marginRight: "10px",
								}}
							/>
							<span>
								Implemented machine learning on our video processing
								networks to identify and block pornography and violence
								automatically.
							</span>
						</p>
						<p>
							<FiberManualRecordIcon
								style={{
									color: "#00d0b0",
									fontSize: "1.3rem",
									marginRight: "10px",
								}}
							/>
							<span>
								Implemented Kubernetes to deliver Streaming and video
								that can support millions of users at the same time.
							</span>
						</p>

						<p>
							<FiberManualRecordIcon
								style={{
									color: "#00d0b0",
									fontSize: "1.3rem",
									marginRight: "10px",
								}}
							/>
							<span>
								Super admin panels control the content and users on the
								platform.
							</span>
						</p>

						<p>
							<FiberManualRecordIcon
								style={{
									color: "#00d0b0",
									fontSize: "1.3rem",
									marginRight: "10px",
								}}
							/>
							<span>
								Auto banning and flagging features from stopping
								malicious users.
							</span>
						</p>
					</div>
				</FeatureSection>

				<RelatedWork>
					<h2>THERE’S MORE</h2>
					<h1>Explore Other Works</h1>

					<GridWrapper>
						<GridContainer>
							<GridItem src='/home/work3.jpg' title='Work Title' />
							<GridItem src='/home/work4.jpg' title='Work Title' />
							<GridItem src='/home/work5.jpg' title='Work Title' />
						</GridContainer>
					</GridWrapper>
				</RelatedWork>
			</CustomContainer>
		</Wrapper>
	);
};

export default memo(WorkDetailComponent);

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
`;

const Wrapper = styled.div`
	background: #e5e5e5;
	display: grid;
	place-items: center;
	position: relative;
	width: 100vw;
	padding: 5rem 9% !important;

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
		min-height: 100vh;
		padding-bottom: 10rem !important;
	}

	section {
		max-width: 73.125rem;
		margin: 0 auto;

		h2 {
			text-align: left;
			margin-bottom: 2rem;
			font-size: 1.3rem;
			color: var(--color-secondary-second);
		}

		h1 {
			font-weight: bold;
			font-size: 3.25rem;
			color: var(--color-primary);
			margin-bottom: 2rem;
			max-width: 29.688rem;

			@media (max-width: 568px) {
				font-size: 1.4rem;
				width: 100%;
			}

			@media (min-width: 991px) {
				font-size: 2rem;
				min-width: 29.813rem;
				font-style: normal;
				font-weight: bold;
				font-size: 52px;
				line-height: 150%;
			}
		}
	}

	.inner-container {
		display: flex;
		justify-content: space-between;

		@media (max-width: 992px) {
			flex-wrap: wrap;
		}

		p {
			line-height: var(--line-height);
			color: #878599;
			max-width: 36.625rem;
			@media (min-width: 768px) {
				font-size: 1.1rem;
				width: 36.625rem;
			}
		}
	}

	.project {
		display: none;
		@media (min-width: 991px) {
			margin-top: 6rem;
			display: block;
		}

		font-size: 1rem;
		p {
			padding-left: 1rem;
			border-left: 2px solid var(--color-secondary);
		}

		h3 {
			color: var(--color-primary);
			font-style: normal;
			font-weight: bold;
			line-height: 150%;
			margin-top: 1rem;
		}
	}
`;

const HiddenImageContainer = styled.div`
	width: 100%;
	max-height: 20rem;
	overflow: hidden;
	margin-top: 5rem;
	margin-bottom: 2rem;
	@media (min-width: 768px) {
		display: none;
	}

	img {
		object-fit: cover;
		display: block;
	}
`;

const ImageSection = styled.div`
	max-width: 73.125rem;
	height: 33.813rem;
	width: 100%;
	margin: 6rem auto;

	transition: var(--transition-duration);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	background: linear-gradient(180deg, rgba(15, 11, 51, 0) 0%, #0f0b33 100%);

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

const FeatureSection = styled.div`
	max-width: 73.125rem;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	column-gap: 3.125rem;

	div {
		max-width: 31.938rem;
	}

	p {
		display: flex;
		margin: 1rem 0;
		line-height: var(--line-height);
		color: #878599;
		font-size: 1rem;
	}
`;

const RelatedWork = styled.div`
	margin: 0 auto;
	margin-top: 5rem;
	max-width: 73.125rem;

	h2 {
		text-align: center;
		margin-bottom: 2rem;
		font-size: 1.3rem;
		color: var(--color-secondary-second);

		@media (max-width: 768px) {
			text-align: left;
		}
	}

	h1 {
		color: var(--color-primary);
		font-style: normal;
		text-align: center;
		font-weight: bold;
		font-size: 52px;
		line-height: 150%;
		@media (max-width: 768px) {
			font-size: 1.4rem;
			text-align: left;
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

const GridWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 4rem;
`;

const GridContainer = styled.div`
	width: 100%;
	max-width: var(--max-width1250);
	display: flex;
	gap: 3rem;

	@media (max-width: 992px) {
		flex-wrap: wrap;
	}
`;
