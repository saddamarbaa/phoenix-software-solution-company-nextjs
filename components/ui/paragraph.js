/** @format */
import styled from "styled-components";
const UIParagraph = (props) => {
	return <Paragraph>{props.children}</Paragraph>;
};

export default UIParagraph;

const Paragraph = styled.p`
	margin: 1rem 0;
	line-height: var(--line-height);
	color: #878599;
	@media (min-width: 768px) {
		font-size: 1.1rem;
	}
`;
