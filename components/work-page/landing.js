/** @format */

import styled from "styled-components";

const Landing = () => {
	return (
		<Wrapper>
			<TopWrapper>
				<Container>
					<h2>OUR WORK</h2>
					<p>Our latest client works</p>
				</Container>
			</TopWrapper>
		</Wrapper>
	);
};

export default Landing;

const Wrapper = styled.div`
	background: var(--color-primary);
	padding: 5rem 9%;
	color: white;
	display: grid;
	place-items: center;
	text-align: center;
	display: none;
	@media (min-width: 1169px) {
		display: grid;
		padding-bottom: 400px !important;
	}
`;

const TopWrapper = styled.div``;

const Container = styled.div`
	h2 {
		margin-bottom: 2rem;
		color: var(--color-secondary-second);
	}

	p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		line-height: 1.4;

		@media (min-width: 768px) {
			font-size: 3.25rem;
			font-weight: 700;
			max-width: 478px;
		}
	}
`;
