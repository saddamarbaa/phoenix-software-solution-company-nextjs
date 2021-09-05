/** @format */

import styled from "styled-components";
import WebIcon from "@material-ui/icons/Web";
import AppleIcon from "@material-ui/icons/Apple";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import Image from "next/image";

const Services = () => {
	return (
		<ServicesWrapper>
			<ServicesTop>
				<h2>SERVICES</h2>
				<div className='content'>
					<div className='first'>
						<p>Where our services add value to your product</p>
					</div>
					<div>
						<p>
							Helping companies & individuals identify key solutions for
							their target markets. We boost their ability to create
							products.
						</p>

						<p>
							Our business model saves clients time and money. Don,t
							reinvent the wheel.
						</p>
					</div>
				</div>
			</ServicesTop>
			<ServicesGrid>
				<div className='contain'>
					<div className='icon'>
						<WebIcon style={{ color: "white", fontSize: "1.7rem" }} />
					</div>
					<h3>Web Development</h3>
					<p>
						We build websites based on client needs and of course the
						target market, because that,s our expertise
					</p>
				</div>
				<div className='contain'>
					<div className='icon'>
						<AppleIcon style={{ color: "white", fontSize: "1.7rem" }} />
					</div>
					<h3>App Development</h3>
					<p>
						It,s undeniable, everyone now has a smartphone, and of course
						we can also make your product app
					</p>
				</div>
				<div className='contain'>
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
				</div>
			</ServicesGrid>
			<AbsoluteContainer>
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
			</AbsoluteContainer>
		</ServicesWrapper>
	);
};

export default Services;

const ServicesWrapper = styled.section`
	position: relative;
	margin-top: 2rem;
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
`;

const ServicesTop = styled.div`
	margin-bottom: 60px;
	.first {
		font-size: 1rem;
		font-weight: bold;
		font-size: 1.1rem;

		@media (max-width: 768px) {
			margin: 2rem 0 !important;
		}

		@media (min-width: 768px) {
			margin-top: -5rem;
		}
	}

	h2 {
		margin-bottom: 2rem;
		color: var(--color-secondary-second);
	}

	.content {
		@media (min-width: 768px) {
			display: flex;
			align-items: center;
		}
	}

	div {
		p {
			line-height: var(--line-height);

			@media (min-width: 568px) {
				min-width: 450px;
				max-width: 500px;
			}
		}
	}
`;

const ServicesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20.625rem, 1fr));
	grid-column-gap: 50px;
	grid-row-gap: 60px;

	@media (max-width: 400px) {
		grid-template-columns: 1fr;
	}

	.contain {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid #cfced6;
		height: 22.625rem;
		overflow: hidden;
		padding: 1rem;
		border-bottom: 4px solid var(--color-secondary);
		transition: var(--transition-duration);
		cursor: pointer;
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
			line-height: var(--line-height);
		}
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
		max-width: 1170px;
		height: 196px;
		width: 100%;
		padding: 2rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
		border-radius: 14px;
		background-color: white;
		display: flex;
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
