/** @format */
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const TESTIMONIAL = () => {
	return (
		<Wrapper>
			<TopContainer>
				<div className='first-content'>
					<div className='inner-container'>
						<h2>TESTIMONIAL</h2>
						<p className='head-co'>What Our Customers Are Saying</p>
						<div className='testimonial'>
							<p>30+ Testimonial</p>
						</div>
					</div>
				</div>

				<div className='second-content'>
					<h2>Web Development</h2>
					<p className='p-s'>
						Phoenix Software Solutions is absolutely incredible. They are
						the most talented group of designers I,ve ever worked with or
						encountered.
					</p>
					<p className='p-s'>
						They are also very professional and complete everything to the
						highest quality bar. A+ will be my first call for design work
						for years to come.
					</p>
					<div className='user'>
						<IconButton style={{ marginLeft: "-1rem" }}>
							<Avatar
								src='/home/user.png'
								style={{ width: "70px", height: "70px" }}
							/>
						</IconButton>
						<div>
							<p style={{ fontWeight: "bold" }}>Eleuterio Prieto</p>
							<p>CEO at prieto ministries</p>
						</div>
					</div>
					<ArrowsWrapper>
						<Arrows className='first'>
							<ArrowBackIosIcon
								style={{ color: "white", fontSize: "1.7rem" }}
							/>
						</Arrows>
						<Arrows className='second'>
							<ArrowForwardIosIcon
								style={{ color: "white", fontSize: "1.7rem" }}
							/>
						</Arrows>
					</ArrowsWrapper>
				</div>
			</TopContainer>
			<BottomContainer>
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

export default TESTIMONIAL;

const Wrapper = styled.div`
	background: #e5e5e5;

	padding: 5rem 9%;
	@media (min-width: 768px) {
		padding: 8rem 9%;
		padding-left: 0;
	}
`;

const TopContainer = styled.div`
	margin-bottom: 5rem;
	@media (min-width: 768px) {
		display: flex;
		justify-content: space-between;
	}

	.first-content {
		height: 220px;
		max-width: 700px;
		background: var(--color-primary);
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 2rem 1rem;
		overflow: hidden;

		@media (min-width: 768px) {
			height: 575px;
			width: 705px;
			max-width: 700px;
			align-items: center;
			justify-content: flex-start;
			padding: 5rem 1rem;
		}

		h2 {
			color: var(--color-secondary-second);
		}

		p.head-co {
			font-size: 1rem;
			font-weight: bold;
			font-size: 1.1rem;
			margin: 1.2rem 0;

			@media (min-width: 768px) {
				font-size: 52px;
				font-weight: 700;
				max-width: 382px;
				margin: 2rem 0;
				margin-right: 1rem;
			}
		}

		.testimonial {
			padding-left: 1rem;
			border-left: 4px solid var(--color-secondary);

			@media (min-width: 768px) {
				font-weight: bold;
			}
		}
	}

	.second-content {
		margin: 2rem 0;

		@media (min-width: 768px) {
			max-width: 400px;
		}

		h2 {
			margin: 1.2rem 0;
			margin-bottom: 2rem;
		}

		p {
			line-height: var(--line-height);
		}

		p.p-s {
			font-size: 1.1rem;
			@media (max-width: 568px) {
				min-width: 12.5rem;
				font-size: 1rem;
			}
		}

		.user {
			display: flex;
			align-items: center;
			margin-top: 1.2rem;

			p {
				margin-bottom: 0;
			}
		}
	}
`;

const ArrowsWrapper = styled.div`
	display: flex;
	align-items: center;

	.first {
		background: var(--color-primary);
		border: 1px solid var(--color-primary);
		margin-right: 2rem;

		&:hover {
			background: rgba(15, 11, 51, 0.9);
			border-color: rgba(15, 11, 51, 0.9);
		}
	}

	.second {
		background: var(--color-secondary);
		border: 1px solid var(--color-secondary);

		&:hover {
			background: rgba(0, 208, 176, 0.7);
			border-color: rgba(0, 208, 176, 0.7);
		}
	}
`;

const Arrows = styled.div`
	margin-top: 2rem;
	background: var(--color-secondary-second);
	width: 50px;
	height: 50px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const BottomContainer = styled.div`
	@media (min-width: 768px) {
		padding-left: 9%;
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
