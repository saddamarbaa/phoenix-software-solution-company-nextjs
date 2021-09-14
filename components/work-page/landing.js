/** @format */

import styled from "styled-components";
import { memo } from "react";

import AbsoluteRoundBordersComponent from "../absolute-border/absolute-border";

const Landing = () => {
	return (
		<Wrapper>
			<AbsoluteRoundBordersComponent />
			<CustomContainer>
				<h2>OUR WORK</h2>
				<p>Our latest client works</p>
			</CustomContainer>
		</Wrapper>
	);
};

export default memo(Landing);

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
	margin: 0 auto;
	display: grid;
	place-items: center;
	text-align: center;

	h2 {
		margin-bottom: 2rem;
		color: var(--color-secondary-second);

		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 150%;
	}

	p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		line-height: 1.4;

		@media (min-width: 768px) {
			font-size: 3.25rem;
			max-width: 478px;
			line-height: 150%;
			font-style: normal;
			font-weight: bold;
		}
	}
`;

const Wrapper = styled.div`
	background: var(--color-primary);
	background-image: linear-gradient(
		to right,
		rgba(0, 208, 176, 0.4),
		rgba(15, 11, 51, 0.3),
		#0f0b33
	);
	padding: 5rem 9%;
	color: white;
	display: grid;
	place-items: center;
	text-align: center;
	display: none;
	position: relative;
	width: 100vw;

	@media (min-width: 1169px) {
		display: grid;
		padding-bottom: 400px !important;
	}
`;
