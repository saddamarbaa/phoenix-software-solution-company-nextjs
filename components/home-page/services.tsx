/** @format */

import styled from "styled-components";
import WebIcon from "@material-ui/icons/Web";
import AppleIcon from "@material-ui/icons/Apple";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import Image from "next/image";
import React, { FC } from "react";

const Services: FC = () => {
	return (
		<ServicesWrapper>
			<CustomContainer>
				<ServicesTop>
					<h2>SERVICES</h2>
					<div className='content-container'>
						<h1>Where our services add value to your product</h1>

						<p>
							Helping companies & individuals identify key solutions for
							their target markets. We boost their ability to create
							products. Our business model saves clients time and money.
							Don,t reinvent the wheel.
						</p>
					</div>
				</ServicesTop>

				<ServicesGrid>
					<GidItem>
						<div className='icon'>
							<WebIcon style={{ color: "white", fontSize: "1.7rem" }} />
						</div>
						<h3>Web Development</h3>
						<p>
							We build websites based on client needs and of course the
							target market, because that,s our expertise
						</p>
					</GidItem>
					<GidItem>
						<div className='icon'>
							<AppleIcon
								style={{ color: "white", fontSize: "1.7rem" }}
							/>
						</div>
						<h3>App Development</h3>
						<p>
							It,s undeniable, everyone now has a smartphone, and of
							course we can also make your product app
						</p>
					</GidItem>
					<GidItem>
						<div className='icon'>
							<BusinessCenterIcon
								style={{ color: "white", fontSize: "1.7rem" }}
							/>
						</div>
						<h3>UI & UX Design</h3>
						<p>
							We are aware of the importance of design before making a
							product, that,s why we provide our best service
						</p>
					</GidItem>
				</ServicesGrid>
			</CustomContainer>

			<AbsoluteContainer>
				<CustomContainer>
					<div className='content-container'>
						<ImageContainer
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Image
								src='/home/starbucks.png'
								alt='Starbucks Image'
								layout='fill'
								objectFit='contain'
							/>
						</ImageContainer>
						<ImageContainer
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Image
								src='/home/aquire.png'
								alt='Aquire Image'
								layout='fill'
								objectFit='contain'
							/>
						</ImageContainer>
						<ImageContainer
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Image
								src='/home/tanx.png'
								alt='Tanx Image'
								layout='fill'
								objectFit='contain'
							/>
						</ImageContainer>
						<ImageContainer
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Image
								src='/home/sunday.png'
								alt='Sunday Image'
								layout='fill'
								objectFit='contain'
							/>
						</ImageContainer>
						<ImageContainer
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Image
								src='/home/qsak.png'
								alt='qsak Image'
								layout='fill'
								objectFit='contain'
							/>
						</ImageContainer>
					</div>
				</CustomContainer>
			</AbsoluteContainer>
		</ServicesWrapper>
	);
};

export default Services;

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
	margin: 0 auto;
	position: relative;
`;

const ServicesWrapper = styled.section`
	position: relative;
	padding-top: 2rem;
	min-height: 100vh;
	padding: 5rem 9% !important;
	background: white;
	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}
	@media (min-width: 1169px) {
		padding-top: 200px !important;
		padding-bottom: 560px !important;
	}

	background: white;
`;

const ServicesGrid = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 50px;
	@media (max-width: 1169px) {
		flex-wrap: wrap;
	}
`;

const GidItem = styled.div`
	width: 23.125rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid #cfced6;
	height: 26.25rem;
	overflow: hidden;
	padding: 1rem;
	border-bottom: 4px solid var(--color-secondary);
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
	.icon {
		margin-bottom: 2rem;
		background: var(--color-secondary-second);
		width: 80px;
		height: 80px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h3 {
		font-size: 1.1rem;
		font-weight: bold;
		margin: 2rem 0;
	}
	p {
		color: #878599;
		line-height: var(--line-height);
		font-size: 1rem;
	}
`;

const AbsoluteContainer = styled.div`
	width: 100vw;
	position: absolute;
	top: -146px;
	left: 0;
	right: 0;
	padding: 0 9%;
	.content-container {
		height: 196px;
		width: 100%;
		padding: 2rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
		background-color: white;
		display: flex;
		column-gap: 50px;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
	}
	@media (max-width: 1169px) {
		display: none;
	}
`;

const ImageContainer = styled.div`
	width: 152px;
	height: 38px;
`;

const ServicesTop = styled.div`
	margin-bottom: 80px;
	h2 {
		margin-bottom: 2rem;
		color: var(--color-secondary-second);
	}
	h1 {
		font-style: normal;
		font-weight: bold;
		font-size: 32px;
		line-height: 150%;
		max-width: 504px;
		color: #0f0b33;

		@media (max-width: 568px) {
			font-size: 1.4rem;
			margin-bottom: 1rem;
		}
		@media (min-width: 991px) {
			font-size: 2rem;
		}
	}
	.content-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
	p {
		line-height: var(--line-height);
		max-width: 36.5625rem;
		margin: 1rem 0 !important;
		font-size: 1.1rem;
		color: #6f6d85;
		@media (max-width: 568px) {
			min-width: 12.5rem;
			font-size: 1rem;
		}
	}
`;
