/** @format */

import styled from "styled-components";
import GridItem from "./grid-item";

const CustomGrid = () => {
	return (
		<>
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
		</>
	);
};

export default CustomGrid;

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
