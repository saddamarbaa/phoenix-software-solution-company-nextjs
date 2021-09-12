/** @format */

import styled from "styled-components";
import Image from "next/image";

const AboutContent = () => {
	return (
		<Wrapper>
			<Container>
				<RightContainer>
					<h2>
						<span>About</span> Software Agency
					</h2>
				</RightContainer>
				<LeftContainer>
					<p>
						We are a remote design agency based in Omaha, Nebraska,
						working with clients around the world. As passionate
						designers, we love building products that are easy to use,
						accessible, engaging, and delightful.
					</p>
				</LeftContainer>
			</Container>

			<ImageWrapper
				style={{
					position: "relative",
					cursor: "pointer",
				}}>
				<ImageContainer
					style={{
						position: "relative",
						cursor: "pointer",
					}}>
					<Image
						src='/about-us/about1.jpg'
						alt='about-us Image'
						layout='fill'
						objectFit='cover'
					/>
				</ImageContainer>
			</ImageWrapper>
		</Wrapper>
	);
};

export default AboutContent;

const Wrapper = styled.div`
	min-height: 100vh;
	padding: 5rem 9%;
	background: #e5e5e5;

	@media (min-width: 768px) {
		padding: 8rem 9%;
	}

	@media (min-width: 1169px) {
		padding-bottom: 500px !important;
	}

	position: relative;
`;

const Container = styled.div`
	width: 100%;
	max-width: var(--max-width1250);
	overflow: hidden;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;

	@media (max-width: 968px) {
		flex-wrap: wrap;
	}
`;

const RightContainer = styled.div`
	margin-bottom: 1.3rem;
	font-size: 24px;

	span {
		color: var(--color-secondary);
	}

	@media (min-width: 768px) {
		margin-right: 1rem;
		max-width: 700px;
		font-weight: bold;
		font-size: 53px;
		font-style: normal;
		line-height: 150%;
	}
`;

const LeftContainer = styled.div`
	line-height: var(--line-height);
	max-width: 585px;
	color: #6f6d85;

	@media (min-width: 968px) {
		font-size: 1.1rem;
		margin-top: -2rem;
	}
`;

const ImageContainer = styled.div`
	min-height: 100%;
	min-width: 100%;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	background-color: white;
	overflow: hidden;
`;

const ImageWrapper = styled.div`
	max-width: 1170px;
	width: 100%;
	height: 21.875rem;
	max-height: 21.875rem;
	margin: 0rem auto;
	margin-top: 2.5rem;
	overflow: hidden;
	@media (min-width: 968px) {
		display: none;
	}
`;
