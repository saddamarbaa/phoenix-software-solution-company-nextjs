/** @format */

import styled from "styled-components";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ChatIcon from "@material-ui/icons/Chat";
import ScheduleIcon from "@material-ui/icons/Schedule";
import CallIcon from "@material-ui/icons/Call";
import HomeIcon from "@material-ui/icons/Home";
import { FC, memo, useRef, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type UserSubmitForm = {
	name: string;
	email: string;
	subject: string;
};

const ContactFormComponent: FC = () => {
	const nameRef = useRef<HTMLInputElement>(null!);
	const emailRef = useRef<HTMLInputElement>(null!);
	const subjectRef = useRef<HTMLTextAreaElement>(null);

	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Name is required"),
		email: Yup.string()
			.required("Email is required")
			.email("Email is invalid"),
		subject: Yup.string()
			.required("Subject is required")
			.min(6, "Subject must be at least 6 characters")
			.max(40, "Subject must not exceed 7000 characters"),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<UserSubmitForm>({
		resolver: yupResolver(validationSchema),
	});

	useEffect(() => {
		nameRef?.current?.focus();
	}, []);

	const sendMessageHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredEmail = emailRef?.current?.value;
		const enteredName = nameRef?.current?.value;
		const enteredMessage = subjectRef?.current?.value;

		// Server side validation
		if (
			!enteredEmail ||
			!enteredEmail.includes("@") ||
			!enteredName ||
			enteredName.trim() === "" ||
			!enteredMessage ||
			enteredMessage.trim() === ""
		) {
			// Throw error
			console.log("Invalid input.");
			return;
		}

		//DB CALL
		//show user message
		// rest input(on success)
		console.log(enteredEmail, enteredName, enteredMessage);
		emailRef.current.value = "";
		nameRef.current.value = "";
		subjectRef.current.value = "";
	};

	const onSubmit = (data: UserSubmitForm) => {
		console.log(JSON.stringify(data, null, 2));
		reset();
	};

	return (
		<Wrapper>
			<BottomWrapper>
				<CustomContainer>
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
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className='control'>
										{errors.name && (
											<p className='error-is-invalid'>
												{errors.name?.message}
											</p>
										)}
										{!errors.name && (
											<label htmlFor='name'> Name</label>
										)}

										<input
											type='text'
											id='name'
											placeholder={errors.name ? "" : "Full Name"}
											{...register("name")}
											className={` ${
												errors.name ? "is-invalid" : ""
											}`}
										/>
									</div>

									<div className='control'>
										{!errors.email && (
											<label htmlFor='email'> Email</label>
										)}

										{errors.email && (
											<p className='error-is-invalid'>
												{errors.email.message}
											</p>
										)}

										<input
											type='text'
											id='email'
											placeholder={
												errors.email ? "" : "Email Address"
											}
											className={` ${
												errors.email ? "is-invalid" : "custom-input"
											}`}
											{...register("email")}
										/>
									</div>

									<div className='control'>
										{!errors.subject && (
											<label htmlFor='subject'>Subject </label>
										)}

										{errors.subject && (
											<p className='error-is-invalid'>
												{errors.subject?.message}
											</p>
										)}
										<textarea
											id='subject'
											{...register("subject")}
											rows={4}
											cols={50}
											name='subject'
											placeholder={
												errors.subject ? "" : "Detail Project"
											}
											className={` ${
												errors.email ? "is-invalid" : "custom-input"
											}`}></textarea>
									</div>
									<div className='actions'>
										<CustomButton>SUBMIT</CustomButton>
									</div>
								</form>
							</section>
						</ContactForm>
					</ContactContainer>
				</CustomContainer>
			</BottomWrapper>

			<AbsoluteContainer>
				<CustomContainer>
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
				</CustomContainer>
			</AbsoluteContainer>
		</Wrapper>
	);
};

export default memo(ContactFormComponent);

const Wrapper = styled.div`
	width: 100%;
	background: #e5e5e5;
	position: relative;
`;

const ContactContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width1250);
	overflow: hidden;
	margin: 0 auto;
`;

const BottomWrapper = styled.div`
	padding: 5rem 9%;
	min-height: 100vh;

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
		padding-bottom: 0px !important;
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
		@media (min-width: 768px) {
			font-size: 2rem;
			max-width: 387px;
			font-weight: bold;
			margin-bottom: 2.2rem;
		}
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

	position: relative;
	z-index: 3;
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

		::placeholder {
			/* Chrome, Firefox, Opera, Safari 10.1+ */
			color: white;
			opacity: 1; /* Firefox */
		}

		:-ms-input-placeholder {
			/* Internet Explorer 10-11 */
			color: white;
		}

		::-ms-input-placeholder {
			/* Microsoft Edge */
			color: white;
		}
	}
	.actions {
		margin-top: 1.5rem;
	}

	.control .error-is-invalid {
		color: red;
		color: #ff9700;
		transition: 0.3s;
	}

	.control .is-invalid,
	.control .touched.invalid {
		border-color: red;
		background: #ffc2c2;
		box-shadow: none;
		color: white;
		transition: 0.3s;
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
	position: absolute;
	top: -200px;
	left: 0;
	right: 0;
	padding: 0 9%;
	.content-container {
		height: 401px;
		width: 100%;
		padding: 2rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
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
