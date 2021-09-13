/** @format */

import styled from "styled-components";
import { memo } from "react";
import UIParagraph from "../ui/paragraph";
import UIH1 from "../ui/heading1";
import UIH2 from "../ui/heading2";

const Landing = () => {
	return (
		<Wrapper>
			<CustomContainer>
				<section>
					<h2>WORK WITH US</h2>
					<div className='inner-container'>
						<h1>Have you decided to work on a project with us?</h1>

						<UIParagraph>
							Interested in joining our team and impacting the world?
							Reach out! We are always looking for new projects to help
							take design to the next level!
						</UIParagraph>
					</div>
				</section>
			</CustomContainer>
		</Wrapper>
	);
};

export default Landing;

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
`;

const Wrapper = styled.div`
	background: #e5e5e5;
	padding: 5rem 9%;
	display: grid;
	place-items: center;
	position: relative;
	width: 100vw;

	@media (min-width: 1169px) {
		display: grid;
		padding-bottom: 400px !important;
		min-height: 100vh;
	}

	section {
		h2 {
			text-align: left;
			margin-bottom: 2rem;
			color: var(--color-secondary-second);

			@media (max-width: 568px) {
				font-size: 1.4rem;
			}
		}

		h1 {
			width: 477px;

			color: var(--color-primary);
			margin-bottom: 2rem;

			@media (max-width: 568px) {
				font-size: 1.4rem;
				width: 100%;
			}

			@media (min-width: 991px) {
				font-size: 2rem;
				min-width: 477px;
			}
		}
	}

	.inner-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;

		p {
			margin: 1rem 0;
			line-height: var(--line-height);
			color: #878599;
			margin: 1rem 0;
			max-width: 500px;
			@media (min-width: 768px) {
				font-size: 1.1rem;
				width: 500px;
			}
		}
	}
`;
