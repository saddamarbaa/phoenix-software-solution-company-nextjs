/** @format */

import styled from "styled-components";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ChatIcon from "@material-ui/icons/Chat";
import ScheduleIcon from "@material-ui/icons/Schedule";
import CallIcon from "@material-ui/icons/Call";
import HomeIcon from "@material-ui/icons/Home";

const Contact = () => {
	return (
		<Wrapper>
			<TopWrapper>
				<Container>
					<h2>CONTACT US</h2>
					<p>Let&apos;s Talk For The Next Project</p>
				</Container>
			</TopWrapper>
			<BottomWrapper>
				<ContactContainer>
					<ContactInfo>
						<div className='first'>
							<h2>CONTACT</h2>
							<p className='head-p'>
								You can contact us with the contact below
							</p>

							<div className='first-contact'>
								<ArrowsWrapper>
									<ModifiedArrows className='first'>
										<KeyboardArrowDownIcon
											style={{ color: "white" }}
										/>
									</ModifiedArrows>
								</ArrowsWrapper>
								<p>info@phoenixsoftwaresolutionsllc.com</p>
							</div>

							<div className='first-contact'>
								<ArrowsWrapper>
									<ModifiedArrows className='first'>
										<CallIcon style={{ color: "white" }} />
									</ModifiedArrows>
								</ArrowsWrapper>
								<p>(308) 850 - 3206</p>
							</div>
							<div className='first-contact'>
								<ArrowsWrapper>
									<ModifiedArrows className='first'>
										<HomeIcon style={{ color: "white" }} />
									</ModifiedArrows>
								</ArrowsWrapper>
								<p>1415 Piper St Grand Island, NE 68803</p>
							</div>
						</div>
					</ContactInfo>

					<ContactForm>
						<section>
							<h1>GET IN TOUCH</h1>
							<form>
								<div className='control'>
									<label htmlFor='name'> Name</label>
									<input
										type='text'
										id='name'
										required
										placeholder='Full Name'
									/>
								</div>

								<div className='control'>
									<label htmlFor='email'> Email</label>
									<input
										type='email'
										id='email'
										required
										placeholder='Email Address'
									/>
								</div>

								<div className='control'>
									<label htmlFor='subject'>Subject </label>
									<textarea
										id='subject'
										maxLength='500'
										minLength='10'
										rows='4'
										cols='50'
										name='subject'
										placeholder='Detail Project'
										required></textarea>
								</div>
								<div className='actions'>
									<CustomButton>SUBMIT</CustomButton>
								</div>
							</form>
						</section>
					</ContactForm>
				</ContactContainer>

				<AbsoluteContainer>
					<div className='content-container'>
						<div className='content'>
							<ArrowsWrapper>
								<Arrows className='first'>
									<ChatIcon
										style={{ color: "white", fontSize: "1.7rem" }}
									/>
								</Arrows>
							</ArrowsWrapper>
							<h2>Live Chat</h2>
							<p>Click the button to start!</p>
							<CustomButton>CHAT WITH US</CustomButton>
						</div>

						<div className='content'>
							<ArrowsWrapper>
								<Arrows className='first'>
									<KeyboardArrowDownIcon
										style={{ color: "white", fontSize: "1.7rem" }}
									/>
								</Arrows>
							</ArrowsWrapper>
							<h2>Submit a Request</h2>
							<p>Send a request directly to us!</p>
							<CustomButton>SUBMIT</CustomButton>
						</div>

						<div className='content'>
							<ArrowsWrapper>
								<Arrows className='first'>
									<ScheduleIcon
										style={{ color: "white", fontSize: "1.7rem" }}
									/>
								</Arrows>
							</ArrowsWrapper>
							<h2>Schedule a Meeting</h2>
							<p>Setup a meeting with us!</p>
							<CustomButton>SCHEDULE</CustomButton>
						</div>
					</div>
				</AbsoluteContainer>
			</BottomWrapper>
		</Wrapper>
	);
};

export default Contact;

const Wrapper = styled.div`
	width: 100vw;
`;

const TopWrapper = styled.div`
	@media (max-width: 768px) {
		display: none;
	}

	background: var(--color-primary);
	padding: 5rem 9%;
	padding-bottom: 2rem;
	color: white;

	@media (min-width: 768px) {
		min-height: 100vh;
		padding: 8rem 0 !important;
		width: 100vw;
		display: grid;
		place-items: center;
	}

	@media (min-width: 1169px) {
		padding-bottom: 300px !important;
	}
`;

const Container = styled.div`
	h2 {
		margin-bottom: 2rem;
		color: var(--color-secondary-second);
	}

	p {
		font-size: 1.1rem;
		margin-bottom: 2rem;
		line-height: 1.4;

		@media (min-width: 768px) {
			font-size: 3.25rem;
			font-weight: 700;
			max-width: 478px;
		}
	}
`;

const ContactContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const BottomWrapper = styled.div`
	padding: 5rem 9%;
	position: relative;
	min-height: 100vh;
	background: white;

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}

	@media (min-width: 1169px) {
		padding-top: 350px !important;
	}
`;

const ContactInfo = styled.div`
	margin-bottom: 3rem;

	@media (max-width: 400px) {
		display: none;
	}

	h2 {
		margin-bottom: 2rem;
		color: var(--color-secondary-second);
	}

	p.head-p {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		font-weight: 700;

		@media (max-width: 768px) {
			margin-bottom: 1rem;
		}
	}

	.first-contact {
		display: flex;
		min-height: 40px;
		margin-top: 2rem;
		align-items: center;

		@media (max-width: 568px) {
			margin-top: 1rem;
		}

		@media (max-width: 400px) {
			display: none;
		}

		p {
			font-size: 1rem;
			font-weight: normal;
		}
	}
`;

const ContactForm = styled.div`
	background: var(--color-primary);
	height: 38.188rem;
	color: white;
	width: 100%;
	max-width: 35.625rem;
	border-radius: 6px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	padding: 2rem;

	h1 {
		font-weight: 700;
		color: var(--color-secondary-second);
		margin-bottom: 2rem;
	}

	.control {
		margin-bottom: 2rem;
	}

	.control label {
		display: block;
		color: white;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
	.control input {
		height: 3.1rem;
	}

	.control textarea {
		height: 7.5rem;
		resize: none;
	}

	.control textarea,
	.control input {
		width: 100%;
		background: rgba(255, 255, 255, 0.12);
		backdrop-filter: blur(100px);
		font: inherit;
		border: none;
		outline: none;
		color: white;
		border-radius: 4px;
		border: 1px solid rgba(255, 255, 255, 0.12);
		text-align: left;
		padding: 1rem;
		transition: 0.3s;
		-webkit-transition: 0.3s;
		-moz-transition: 0.3s;
		-ms-transition: 0.3s;
		-o-transition: 0.3s;

		&:hover {
			background: rgba(255, 255, 255, 0.1);
			border: 1px solid rgba(255, 255, 255, 0.3);
		}
	}

	.actions {
		margin-top: 1.5rem;
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

const ModifiedArrows = styled(Arrows)`
	margin-top: 0rem;
	width: 40px;
	height: 40px;
	border-color: var(--color-secondary) !important;
	background: var(--color-secondary) !important;

	@media (max-width: 568px) {
		display: none;
	}
`;

const AbsoluteContainer = styled.div`
	width: 100vw;
	position: absolute;
	top: -200px;
	left: 0;
	right: 0;
	padding: 0 9%;

	.content-container {
		max-width: 1170px;
		height: 401px;
		width: 100%;
		padding: 2rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
		border-radius: 14px;
		background-color: white;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.content {
			min-height: 300px;
			min-width: 260px;
			display: grid;
			place-items: center;
			overflow: hidden;

			h2 {
				font-size: 24px;
				font-weight: 700;
			}

			p {
				color: #6f6d85;
			}
		}
	}

	@media (max-width: 1169px) {
		display: none;
	}
`;

const CustomButton = styled.button`
	display: block;
	width: 148px;
	height: 48px;
	font: inherit;
	font-size: 0.9rem;
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

	&:hover {
		background: rgba(0, 208, 176, 0.7);
		border-color: rgba(0, 208, 176, 0.7);
	}
`;
