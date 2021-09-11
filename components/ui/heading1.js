/** @format */
import styled from "styled-components";
const UIH1 = (props) => {
	return <Heading>{props.children}</Heading>;
};

export default UIH1;

const Heading = styled.h1`
	font-size: 1.2rem;
	margin-bottom: 1.5rem;
	color: var(--color-secondary-second);
	font-style: normal;
	font-weight: bold;
	line-height: 150%;

	@media (min-width: 568px) {
		font-size: 24px;
	}
`;
