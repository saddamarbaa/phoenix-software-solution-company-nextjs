/** @format */
import styled from "styled-components";
import React from "react";

type UIH1Props = {
	children: React.ReactNode;
};

const UIH1: React.FC<UIH1Props> = (props: UIH1Props) => {
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
