/** @format */
import styled from "styled-components";
import React from "react";

type UIH2Props = {
	children: React.ReactNode;
};

const UIH2: React.FC<UIH2Props> = (props: UIH2Props) => {
	return <Heading>{props.children}</Heading>;
};

export default UIH2;

const Heading = styled.h2`
	font-size: 1.1rem;
	margin-bottom: 1.5rem;
	line-height: 1.4;
	color: var(--color-primary);

	@media (min-width: 568px) {
		font-size: 3.25rem;
		font-weight: 700;
	}
`;
