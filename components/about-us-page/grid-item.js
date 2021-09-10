/** @format */

import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const GridItem = (props) => {
	const { src, title, name, founder, join } = props;

	if (props?.join) {
		return (
			<Wrapper>
				<GidContent>
					<IconButton>
						<CustomArrows>
							<IconButton>
								<AddCircleOutlineIcon
									style={{
										color: "#0f0b33",
										fontSize: "2.7rem",
									}}
								/>
							</IconButton>
						</CustomArrows>
					</IconButton>

					<CustomButton>JOIN NOW</CustomButton>
				</GidContent>
			</Wrapper>
		);
	} else {
		return (
			<Wrapper>
				<GidContent
					style={{
						background: founder ? "#0f0b33" : "white",
						color: "white",
					}}>
					<IconButton>
						<Avatar src={src} style={{ width: "90px", height: "90px" }} />
					</IconButton>
					<div className='user'>
						<h3 className='name'>{name} </h3>
						<p>{title}</p>
					</div>
					<ArrowsWrapper>
						<Arrows
							style={{
								border: founder ? "1px solid #575470" : "",
								background: founder ? "#0f0b33" : "",
							}}>
							<IconButton InstagramIcon>
								<InstagramIcon
									style={{
										color: founder ? "#ff9700" : "#0f0b33",
										fontSize: "1.7rem",
									}}
								/>
							</IconButton>
						</Arrows>
						<Arrows
							style={{
								border: founder ? "1px solid #575470" : "",
								background: founder ? "#0f0b33" : "",
							}}>
							<IconButton>
								<TwitterIcon
									style={{
										color: founder ? "#ff9700" : "#0f0b33",
										fontSize: "1.7rem",
									}}
								/>
							</IconButton>
						</Arrows>

						<Arrows
							className='second'
							style={{
								border: founder ? "1px solid #575470" : "",
								background: founder ? "#0f0b33" : "",
							}}>
							<IconButton InstagramIcon>
								<LinkedInIcon
									style={{
										color: founder ? "#ff9700" : "#0f0b33",
										fontSize: "1.7rem",
									}}
								/>
							</IconButton>
						</Arrows>
					</ArrowsWrapper>
				</GidContent>
			</Wrapper>
		);
	}
};

export default GridItem;

const Wrapper = styled.div`
	height: 25rem;
	width: 18.75rem;

	@media (max-width: 568px) {
		min-width: 100%;
	}
`;

const GidContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid #cfced6;
	height: 360px;
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
	@media (max-width: 568px) {
		height: 320px;
	}
	.user {
		margin-bottom: 1rem;
		.name {
			font-weight: 7000;
			font-size: 1.2rem;
			margin-top: 0.4rem;
			margin-bottom: 0.4rem;
		}
		p {
			color: #878599;
		}
	}
`;

const ArrowsWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 80%;
	margin-top: 2rem;
`;

const Arrows = styled.div`
	background: var(--color-secondary-second);
	width: 48px;
	height: 48px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition-duration: var(--transition-duration);
	background: #cfced6;
	border-color: #cfced6;
	&:hover {
		background-color: #878599;
		border-color: #878599;
	}
`;

const CustomArrows = styled(Arrows)`
	width: 78px;
	height: 78px;
	margin-bottom: 4rem;
`;

const CustomButton = styled.button`
	display: block;
	width: 148px;
	height: 54px;
	font: inherit;
	cursor: pointer;
	font-weight: bold;
	background-color: var(--color-secondary);
	border: 1px solid var(--color-secondary);
	padding: 0.5rem 1rem;
	border-radius: 4px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	-ms-border-radius: 4px;
	-o-border-radius: 4px;
	transition-duration: var(--transition-duration);
	min-width: fit-content;
	color: white;
	margin-top: 2rem;
	@media (max-width: 568px) {
		width: 80%;
	}
	&:hover {
		background: rgba(0, 208, 176, 0.7);
		border-color: rgba(0, 208, 176, 0.7);
	}
`;
