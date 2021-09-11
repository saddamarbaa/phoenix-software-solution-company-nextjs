/** @format */

import React from "react";
import styled from "styled-components";

const UIButton = (props) => {
	return <CustomButton>{props.children}</CustomButton>;
};

export default UIButton;

const CustomButton = styled.button`
	min-width: 164px;
	min-height: 53px;
	font: inherit;
	cursor: pointer;
	background-color: var(--color-secondary);
	border: 1px solid var(--color-secondary);
	padding: 0.5rem 1rem;
	border-radius: 4px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	transition-duration: var(--transition-duration);
	text-align: center;
	color: white;
	margin-top: 3rem;
	display: block;
	&:hover {
		background: rgba(0, 208, 176, 0.7);
		border-color: rgba(0, 208, 176, 0.7);
	}
	@media (max-width: 768px) {
		width: 80%;
	}
`;
