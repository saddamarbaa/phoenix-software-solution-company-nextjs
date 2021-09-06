/** @format */

import styled from "styled-components";

const AboutUsComponent = () => {
	return <Wrapper>about</Wrapper>;
};

export default AboutUsComponent;

const Wrapper = styled.div`
	min-height: 100vh;

	padding: 5rem 9%;

	@media (min-width: 768px) {
		padding: 8rem 0 !important;
	}

	@media (min-width: 1169px) {
		padding-bottom: 250px !important;
	}
`;
