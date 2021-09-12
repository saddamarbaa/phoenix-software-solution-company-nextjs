/** @format */

import styled from "styled-components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Image from "next/image";

const GridItem = ({ src, title }) => {
	return (
		<Wrapper>
			<ContentContainer>
				<ImageContainer>
					<Image
						src={src ? src : "/home/work3.jpg"}
						alt='work Image'
						width={500}
						height={500}
						layout='responsive'
					/>
				</ImageContainer>
				<Content>
					<div className='content'>
						<div className='title'> {title}</div>
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
	);
};

export default GridItem;

const Wrapper = styled.div`
	height: 25rem;
	width: 18.75rem;
	margin-right: 3rem;

	.design {
		color: #878599;
	}

	@media (max-width: 568px) {
		min-width: 100%;
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

	height: 25rem;
	width: 22rem;

	@media (max-width: 568px) {
		width: 100%;
	}
`;

const ImageContainer = styled.div`
	width: 100%;
	max-width: 48rem;
	max-height: 18.188rem;
	overflow: hidden;
	margin-bottom: 1rem;
	img {
		object-fit: cover;
		display: block;
	}
	@media (max-width: 568px) {
		max-height: 18.188rem;
	}
`;

const Content = styled.div`
	width: 100%;
	padding: 1rem;
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.content {
		margin-bottom: 1.5rem;
		.title {
			font-weight: bold;
			color: var(--color-primary);
		}
		.icons {
			color: var(--color-secondary);
		}
	}
`;
