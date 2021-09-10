/** @format */
import styled from "styled-components";
import GridItem from "./blog-grid-item";

const BlogGrid = () => {
	return (
		<GridWrapper>
			<GridItem
				src='/home/work1.jpg'
				title='Technology never dies'
				name='Fariz Al Faridli'
				authorImageSrc='/blog/auhor1.png'
			/>
			<GridItem
				src='/home/work1.jpg'
				title='Robots will replace humans'
				name='Fariz Al Faridli'
				authorImageSrc='/blog/auhor1.png'
			/>

			<GridItem
				src='/home/work1.jpg'
				title='VR is the latest technology'
				name='Fariz Al Faridli'
				authorImageSrc='/blog/auhor1.png'
			/>

			<GridItem
				src='/home/work1.jpg'
				title='Technology never dies'
				name='Fariz Al Faridli'
				authorImageSrc='/blog/auhor1.png'
			/>

			<GridItem
				src='/home/work1.jpg'
				title='Robots will replace humans'
				name='Fariz Al Faridli'
				authorImageSrc='/blog/auhor1.png'
			/>

			<GridItem
				src='/home/work1.jpg'
				title='Technology never dies'
				name='Fariz Al Faridli'
				authorImageSrc='/blog/auhor1.png'
			/>
		</GridWrapper>
	);
};

export default BlogGrid;

const GridWrapper = styled.div`
	width: 100%;
	max-width: 1500px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	row-gap: 3.75rem;
	margin-top: 6rem;
	row-gap: 3.75rem;
	column-gap: 1rem;
`;
