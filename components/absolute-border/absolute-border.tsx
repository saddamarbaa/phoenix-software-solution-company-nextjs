/** @format */

import styled from "styled-components";
import { FC, memo } from "react";

const AbsoluteRoundBordersComponent: FC = () => {
	return (
		<CustomAbsoluteRoundBorders>
			<CustomContainer>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</CustomContainer>
		</CustomAbsoluteRoundBorders>
	);
};

export default memo(AbsoluteRoundBordersComponent);

const CustomAbsoluteRoundBorders = styled.div`
	pointer-events: none;
	div {
		pointer-events: none;
	}

	@media (max-width: 1100px) {
		display: none;
	}

	display: flex;
	justify-content: space-between;
	position: absolute;
	top: -500px;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 0 9%;
	z-index: 11;

	div {
		min-height: 100%;
		border-left: 1px solid rgba(255, 255, 255, 20%);
	}
`;

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
	margin: 0 auto;
	min-height: 43.5625rem;
	display: flex;
	color: white;
	justify-content: space-between;
	@media (max-width: 768px) {
		flex-wrap: wrap;
	}
`;
