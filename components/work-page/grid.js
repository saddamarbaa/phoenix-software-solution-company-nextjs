/** @format */

import styled from "styled-components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Image from "next/image";
import GridItem from "./grid-item";

const CustomGrid = () => {
	return (
		<GridWrapper>
			<GridContainer>
				<GridItem src='/home/work1.jpg' title='Work Title' />
				<GridItem src='/home/work3.jpg' title='Work Title' />
				<GridItem src='/home/work5.jpg' title='Work Title' />
				<GridItem src='/home/work2.jpg' title='Work Title' />
				<GridItem src='/home/work4.jpg' title='Work Title' />
				<GridItem src='/home/work5.jpg' title='Work Title' />
				<GridItem src='/home/work3.jpg' title='Work Title' />
				<GridItem src='/home/work4.jpg' title='Work Title' />
				<GridItem src='/home/work5.jpg' title='Work Title' />
			</GridContainer>
		</GridWrapper>
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
	max-width: 1200px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	column-gap: 3.125rem;
	row-gap: 3.75rem;
`;
