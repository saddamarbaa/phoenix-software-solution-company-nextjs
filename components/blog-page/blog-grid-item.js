/** @format */

import styled from "styled-components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Image from "next/image";
import { Avatar, IconButton } from "@material-ui/core";

const GridItem = ({ src, title, name, authorImageSrc }) => {
	return (
		<Wrapper>
			<TopWrapper>
				<p className='post-title'>{title}</p>
				<Author>
					<IconButton>
						<Avatar src={authorImageSrc} />
					</IconButton>
					{name}
				</Author>
			</TopWrapper>
			<BottomWrapper>
				<div className='title'> Read More </div>
				<div className='icons'>
					<ArrowForwardIcon
						style={{
							marginLeft: "1rem",
							color: "#00d0b0",
							fontSize: "2rem",
						}}
					/>
				</div>
			</BottomWrapper>
		</Wrapper>
	);
};

export default GridItem;

const Wrapper = styled.div`
	height: 27.5rem;
	width: 23.625rem;
	cursor: pointer;
	overflow: hidden;
	transition: var(--transition-duration);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

	@media (min-width: 768px) and (max-width: 1400px) {
		width: 21.25rem;
	}

	&:hover {
		border-bottom: 1px solid var(--color-secondary);
		transform: translate3d(0, -5px, 0);
		-webkit-transform: translate3d(0, -5px, 0);
		-moz-transform: translate3d(0, -5px, 0);
		-ms-transform: translate3d(0, -5px, 0);
		-o-transform: translate3d(0, -5px, 0);
	}
`;

const Author = styled.div`
	display: flex;
	align-items: center;
`;

const TopWrapper = styled.div`
	height: 23rem;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	color: white;
	padding: 2rem;

	background: linear-gradient(
		180deg,
		rgba(15, 11, 51, 0) 0%,
		rgba(15, 11, 51, 0.81) 100%
	);
	box-shadow: 0 2px 8px rgba(15, 11, 51, 0.5);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);

	.post-title {
		font-size: 20px;
		font-weight: 700;
		margin-bottom: 0.2rem;
	}
`;

const BottomWrapper = styled.div`
	height: 4.5rem;
	display: flex;
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

	.title {
		font-size: 24px;
		font-weight: bold;
		color: var(--color-primary);
	}
`;
