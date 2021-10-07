/** @format */

import styled from "styled-components";
import { memo } from "react";
import Image from "next/image";

import UIParagraph from "../ui/paragraph";

const BlogLanding = () => {
	return (
		<Wrapper>
			<CustomContainer>
				<section>
					<h2>DETAIL BLOG</h2>
					<div className='inner-container'>
						<h1>The importance of color in design</h1>

						<UIParagraph>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Rutrum leo penatibus mauris nibh ligula faucibus sagittis
							id.
						</UIParagraph>
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
			</CustomContainer>
		</Wrapper>
	);
};

export default BlogLanding;

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
	padding-top: 10rem !important;

	@media (min-width: 768px) {
		padding: 10rem 9% !important;

		min-height: 100vh;
	}

	@media (min-width: 1169px) {
		padding-bottom: 400px !important;
	}

	section {
		max-width: 1170px;
		margin: 0 auto;
		h2 {
			text-align: left;
			margin-bottom: 2rem;
			color: var(--color-secondary-second);

			@media (max-width: 568px) {
				font-size: 1.4rem;
			}
		}

		h1 {
			color: var(--color-primary);
			margin-bottom: 2rem;

			@media (max-width: 568px) {
				font-size: 1.4rem;
				width: 100%;
			}

			@media (min-width: 991px) {
				font-size: 2rem;
				min-width: 477px;
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
			max-width: 500px;
			@media (min-width: 768px) {
				font-size: 1.1rem;
				width: 500px;
			}
		}
	}
`;

const HiddenImageContainer = styled.div`
	width: 100%;
	max-height: 20rem;
	overflow: hidden;
	margin-top: 4rem;
	@media (min-width: 768px) {
		display: none;
	}

	img {
		object-fit: cover;
		display: block;
	}
`;
