/** @format */
import styled from "styled-components";
import GridItem from "./grid-item";

const Grid = () => {
	return (
		<GridWrapper>
			<GridContainer>
				<GridItem
					src='/about-us/tem-img.png'
					title='Founder'
					founder='Founder'
					name='Otoniel Cortez'
				/>

				<GridItem
					src='/about-us/tem3.png'
					title='FMarketer'
					name='Saddam'
				/>

				<GridItem
					src='/about-us/tem2.png'
					title='UI Designer'
					name='Dimitris'
				/>

				<GridItem
					src='/about-us/tem2.png'
					title='UI Designer'
					name='Fariz Al Faridli'
				/>

				<GridItem
					src='/about-us/tem2.png'
					title='UI Designer'
					name='Safwann'
				/>

				<GridItem
					src='/about-us/tem2.png'
					title='UI Designer'
					name='Faris Setiawan'
				/>

				<GridItem
					src='/about-us/tem2.png'
					title='UI Designer'
					name='Developer'
				/>

				<GridItem
					src='/about-us/tem2.png'
					title='UI Designer'
					name='Faris Setiawan'
				/>

				<GridItem join='Join' />
			</GridContainer>
		</GridWrapper>
	);
};

export default Grid;

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
	margin: 0 auto;
`;