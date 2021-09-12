/** @format */

import styled from "styled-components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Image from "next/image";

const GridItem = () => {
	return (
		<GridContainer>
			<Wrapper style={{ width: "750px" }}>
				<ContentContainer
					style={{
						width: "750px",
					}}>
					<ImageContainer
						style={{
							position: "relative",
							cursor: "pointer",
							width: "750px",
						}}>
						<Image
							src='/home/work1.jpg'
							alt='qsak Image'
							layout='fill'
							objectFit='cover'
						/>
					</ImageContainer>

					<Content>
						<div className='content'>
							<div className='title'> Work Title</div>
							<div className='icons'>
								View Detail
								<ArrowForwardIcon
									style={{ marginLeft: "1rem", color: "#00d0b0" }}
								/>
							</div>
						</div>
						<div className='design'>Web Design</div>
					</Content>
				</ContentContainer>
			</Wrapper>

			<Wrapper style={{ width: "369px", minWith: "369px" }}>
				<ContentContainer
					style={{
						width: "369px",
						minWith: "369px",
					}}>
					<ImageContainer
						style={{
							position: "relative",
							cursor: "pointer",
							width: "369px",
						}}>
						<Image
							src='/home/work2.jpg'
							alt='qsak Image'
							layout='fill'
							objectFit='cover'
						/>
					</ImageContainer>
					<Content>
						<div className='content'>
							<div className='title'> Work Title</div>
							<div className='icons'>
								View Detail
								<ArrowForwardIcon
									style={{ marginLeft: "1rem", color: "#00d0b0" }}
								/>
							</div>
						</div>
						<div className='design'>Web Design</div>
					</Content>
				</ContentContainer>
			</Wrapper>
		</GridContainer>
	);
};

export default GridItem;

const Wrapper = styled.div`
	height: 659px;
	width: 600px;

	margin-bottom: 3.75rem;

	.design {
		color: #878599;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 1px solid #cfced6;
	padding-bottom: 1rem;
	overflow: hidden;
	transition: var(--transition-duration);
	cursor: pointer;
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	&:hover {
		border: 1px solid var(--color-secondary);
		transform: translate3d(0, -5px, 0);
		-webkit-transform: translate3d(0, -5px, 0);
		-moz-transform: translate3d(0, -5px, 0);
		-ms-transform: translate3d(0, -5px, 0);
		-o-transform: translate3d(0, -5px, 0);
	}

	height: 659px;
	width: 600px;
`;

const ImageContainer = styled.div`
	width: 600px;
	height: 560px;

	img {
		display: block;
	}
`;

const Content = styled.div`
	width: 100%;
	padding: 1.5rem;
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.content {
		margin-bottom: 2rem;
		.title {
			font-weight: bold;
			color: var(--color-primary);
		}
		.icons {
			color: var(--color-secondary);
		}
	}
`;

const GridContainer = styled.div`
	width: 100%;
	max-width: 78.125rem;
	display: flex;
	justify-content: space-between;
	column-gap: 3rem;
	row-gap: 3.75rem;
	margin: 0 auto;
`;
