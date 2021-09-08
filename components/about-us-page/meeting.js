/** @format */
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const Meeting = () => {
	return (
		<Wrapper>
			<AbsoluteContainer>
				<div className='content-container'>
					<h2>Lets Meet Our Team</h2>
					<div>
						<p>7 Member</p>
						<span>DESIGNER - DEVELOPER - MARKETING</span>
					</div>
				</div>
			</AbsoluteContainer>

			<TopContainer>
				<h2>OUR TEAM</h2>
				<p style={{ maxWidth: "620px" }}>
					Making people smile gets us out of bed every morning. Through
					thoughtful design, we create delightful digital experiences that
					make life simpler and more enjoyable.
				</p>
			</TopContainer>

			<BottomContainer>
				<TeamInfo>
					<div className='inner-info-container'>
						<h2>Lets Meet Our Team</h2>
						<div>
							<p>8 Member</p>
							<span>DESIGNER - DEVELOPER - MARKETING</span>
						</div>
					</div>
				</TeamInfo>
				<GridWrapper>
					<GidContainer>
						<GidContent style={{ background: "#0f0b33", color: "white" }}>
							<IconButton>
								<Avatar
									src='/about-us/tem-img.png'
									style={{ width: "90px", height: "90px" }}
								/>
							</IconButton>
							<div className='user'>
								<h3 className='name'>Otoniel Cortez </h3>
								<p>Founder</p>
							</div>
							<ArrowsWrapper>
								<Arrows
									style={{
										border: "1px solid #575470",
										background: "#0f0b33",
									}}>
									<IconButton InstagramIcon>
										<InstagramIcon
											style={{
												color: "#ff9700",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>
								<Arrows
									style={{
										border: "1px solid #575470",
										background: "#0f0b33",
									}}>
									<IconButton>
										<TwitterIcon
											style={{
												color: "#ff9700",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>

								<Arrows
									className='second'
									style={{
										border: "1px solid #575470",
										background: "#0f0b33",
									}}>
									<IconButton InstagramIcon>
										<LinkedInIcon
											style={{
												color: "#ff9700",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>
							</ArrowsWrapper>
						</GidContent>

						<GidContent>
							<IconButton>
								<Avatar
									src='/about-us/tem3.png'
									style={{ width: "90px", height: "90px" }}
								/>
							</IconButton>
							<div className='user'>
								<h3 className='name'>Saddam </h3>
								<p>FMarketer</p>
							</div>
							<ArrowsWrapper>
								<Arrows>
									<IconButton InstagramIcon>
										<InstagramIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>
								<Arrows>
									<IconButton>
										<TwitterIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>

								<Arrows className='second'>
									<IconButton InstagramIcon>
										<LinkedInIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>
							</ArrowsWrapper>
						</GidContent>

						<GidContent>
							<IconButton>
								<Avatar
									src='/about-us/tem2.png'
									style={{ width: "90px", height: "90px" }}
								/>
							</IconButton>
							<div className='user'>
								<h3 className='name'>Dimitris </h3>
								<p>UI Designer</p>
							</div>
							<ArrowsWrapper>
								<Arrows>
									<IconButton InstagramIcon>
										<InstagramIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>
								<Arrows>
									<IconButton>
										<TwitterIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>

								<Arrows className='second'>
									<IconButton InstagramIcon>
										<LinkedInIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>
							</ArrowsWrapper>
						</GidContent>

						<GidContent>
							<IconButton>
								<Avatar
									src='/about-us/tem2.png'
									style={{ width: "90px", height: "90px" }}
								/>
							</IconButton>
							<div className='user'>
								<h3 className='name'>Fariz Al Faridli </h3>
								<p>UI Designer</p>
							</div>
							<ArrowsWrapper>
								<Arrows>
									<IconButton InstagramIcon>
										<InstagramIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>
								<Arrows>
									<IconButton>
										<TwitterIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>

								<Arrows className='second'>
									<IconButton InstagramIcon>
										<LinkedInIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>
							</ArrowsWrapper>
						</GidContent>

						<GidContent>
							<IconButton>
								<Avatar
									src='/about-us/tem2.png'
									style={{ width: "90px", height: "90px" }}
								/>
							</IconButton>
							<div className='user'>
								<h3 className='name'>Safwann </h3>
								<p>UI Designer</p>
							</div>
							<ArrowsWrapper>
								<Arrows>
									<IconButton InstagramIcon>
										<InstagramIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>
								<Arrows>
									<IconButton>
										<TwitterIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>

								<Arrows className='second'>
									<IconButton InstagramIcon>
										<LinkedInIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>
							</ArrowsWrapper>
						</GidContent>

						<GidContent>
							<IconButton>
								<Avatar
									src='/about-us/tem2.png'
									style={{ width: "90px", height: "90px" }}
								/>
							</IconButton>
							<div className='user'>
								<h3 className='name'>Faris Setiawan </h3>
								<p>Developer</p>
							</div>
							<ArrowsWrapper>
								<Arrows>
									<IconButton InstagramIcon>
										<InstagramIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>
								<Arrows>
									<IconButton>
										<TwitterIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>

								<Arrows className='second'>
									<IconButton InstagramIcon>
										<LinkedInIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>
							</ArrowsWrapper>
						</GidContent>

						<GidContent>
							<IconButton>
								<Avatar
									src='/about-us/tem2.png'
									style={{ width: "90px", height: "90px" }}
								/>
							</IconButton>
							<div className='user'>
								<h3 className='name'>Faris Setiawan </h3>
								<p>Developer</p>
							</div>
							<ArrowsWrapper>
								<Arrows>
									<IconButton InstagramIcon>
										<InstagramIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>
								<Arrows>
									<IconButton>
										<TwitterIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>

								<Arrows className='second'>
									<IconButton InstagramIcon>
										<LinkedInIcon
											style={{
												color: "#0f0b33",
												fontSize: "1.7rem",
											}}
										/>
									</IconButton>
								</Arrows>
							</ArrowsWrapper>
						</GidContent>

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
					</GidContainer>
				</GridWrapper>
				<WorkSection>
					<h2>WORK WITH US</h2>
					<div className='bottom-inner-container'>
						<h1>Have you decided to work on a project with us?</h1>

						<p>
							Interested in joining our team and impacting the world?
							Reach out! We are always looking for new projects to help
							take design to the next level!
						</p>
					</div>

					<CustomButton>HIRE US</CustomButton>
				</WorkSection>
			</BottomContainer>
		</Wrapper>
	);
};

export default Meeting;

const Wrapper = styled.div`
	position: relative;
	min-height: 20vh;
	padding: 5rem 9% !important;
	background: #f6f6f6;

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}

	@media (min-width: 1169px) {
		padding-top: 260px !important;
	}

	@media (min-width: 991px) {
		padding-top: 260px !important;
	}
`;

const TopContainer = styled.div`
	p {
		line-height: var(--line-height);
		margin-bottom: 1.3rem;
		font-size: 1.1rem;
		@media (min-width: 968px) {
			font-size: 1.2rem;
		}
	}

	h2 {
		font-size: 24px;
		font-weight: 700;
		margin-bottom: 1.3rem;
		color: var(--color-secondary-second);
	}
`;

const BottomContainer = styled.div``;

const GridWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const GidContainer = styled.div`
	max-width: 1500px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
	grid-column-gap: 3.125rem;
	grid-row-gap: 3.75rem;
	margin-bottom: 5rem;

	@media (min-width: 991px) {
		margin-top: 3rem;
	}

	@media (max-width: 568px) {
		grid-template-columns: 1fr;
	}

	.design {
		color: #878599;
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

const TeamInfo = styled.div`
	padding: 1rem 0;

	@media (min-width: 500px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 12.5625rem;
		padding-bottom: 1rem;
		max-width: 35rem;
		overflow: hidden;
		transition: var(--transition-duration);
		background: white;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
		border: 1px solid #cfced6;
		margin: 6rem 0;
	}

	@media (min-width: 991px) {
		display: none;
	}

	h2 {
		font-size: 24px;
		font-weight: 700;

		@media (max-width: 500px) {
			margin-bottom: 2rem;
			color: var(--color-secondary-second);
		}

		@media (min-width: 568px) {
			font-size: 3.25rem;
		}
	}

	.inner-info-container {
		div {
			padding-left: 1rem;
			margin-top: 2rem;
			height: 60px;
			border-left: 2px solid #0f0b33;

			@media (max-width: 500px) {
				display: none;
			}

			p {
				color: var(--color-secondary);
				margin-bottom: 1rem;
				font-size: 1.1rem;
			}

			span {
				color: #878599;
			}
		}
	}
`;

const WorkSection = styled.div`
	margin-top: 5rem;
	h2 {
		margin-bottom: 2rem;
		color: var(--color-secondary-second);
	}

	h1 {
		max-width: 477px;
		color: #0f0b33;

		@media (max-width: 568px) {
			font-size: 1.4rem;
		}

		@media (min-width: 991px) {
			font-size: 2rem;
		}
	}

	.bottom-inner-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}
	p {
		line-height: var(--line-height);
		max-width: 36.5625rem;
		margin: 1rem 0 !important;
		font-size: 1.1rem;
		@media (max-width: 568px) {
			min-width: 12.5rem;
			font-size: 1rem;
		}
	}
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

const AbsoluteContainer = styled.div`
	width: 100vw;
	position: absolute;
	top: -150px;
	left: 0;
	right: 0;
	width: 100%;
	margin: 0rem 9%;
	width: 586px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	background-color: white;
	height: 418px;
	max-height: 300px;
	border-radius: 14px;
	padding: 2.3rem;
	display: grid;
	place-items: center;

	.content-container {
		div {
			padding-left: 1rem;
			margin-top: 2rem;
			height: 60px;
			border-left: 2px solid #0f0b33;

			p {
				color: var(--color-secondary);
				margin-bottom: 1rem;
				font-size: 24px;
				font-weight: bold;
			}

			span {
				color: #878599;
			}
		}

		h2 {
			margin-bottom: 3rem;

			@media (min-width: 992px) {
				font-size: 3.3125rem;
				font-weight: bold;
				max-width: 28.375rem;
				line-height: 78px;
			}
		}
	}

	@media (max-width: 992px) {
		display: none;
	}
`;
