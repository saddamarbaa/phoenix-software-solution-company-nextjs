/** @format */

import styled from "styled-components";
import React, { FC, memo } from "react";

import GridItem from "./grid-item";

const CustomGrid: FC = () => {
	return (
		<React.Fragment>
			<GridWrapper>
				<GridContainer>
					<GridItem src='/home/work1.jpg' title='Work Title' />
					<GridItem src='/home/work3.jpg' title='Work Title' />
					<GridItem src='/home/work5.jpg' title='Work Title' />
				</GridContainer>
			</GridWrapper>

			<GridWrapper>
				<GridContainer>
					<GridItem src='/home/work2.jpg' title='Work Title' />
					<GridItem src='/home/work4.jpg' title='Work Title' />
					<GridItem src='/home/work5.jpg' title='Work Title' />
				</GridContainer>
			</GridWrapper>

			<GridWrapper>
				<GridContainer>
					<GridItem src='/home/work3.jpg' title='Work Title' />
					<GridItem src='/home/work4.jpg' title='Work Title' />
					<GridItem src='/home/work5.jpg' title='Work Title' />
				</GridContainer>
			</GridWrapper>
		</React.Fragment>
	);
};

export default memo(CustomGrid);

const GridWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 3.75rem;
`;

const GridContainer = styled.div`
	width: 100%;
	max-width: var(--max-width1250);
	display: flex;
	gap: 3rem;

	@media (max-width: 992px) {
		flex-wrap: wrap;
	}
`;
