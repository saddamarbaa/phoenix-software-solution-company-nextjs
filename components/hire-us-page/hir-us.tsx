/** @format */

import styled from "styled-components";
import Image from "next/image";
import AttachmentIcon from "@material-ui/icons/Attachment";
import { FC, memo, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import UIParagraph from "../ui/paragraph";
import AbsoluteRoundBordersComponent from "../absolute-border/absolute-border";

type UserSubmitForm = {
	name: string;
	email: string;
	subject: string;
};

const HirUsPageComponent: FC = () => {
	const autoScrollToBottomRef = useRef<HTMLDivElement>(null);

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

	// Auto Scroll functionality
	useEffect(() => {
		window.scrollTo({
			// top: 0,
			behavior: "smooth",
		});
		// Auto Scroll functionality
		autoScrollToBottomRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
	}, []);

	const onSubmit = (data: UserSubmitForm) => {
		console.log(JSON.stringify(data, null, 2));
		reset();
	};

	return (
		<Wrapper style={{ position: "relative" }}>
			{/* Empty div for auto scroll */}
			<div
				ref={autoScrollToBottomRef}
				style={{ paddingTop: "7rem", position: "absolute", top: "-100px" }}
				className='auto-scroll'></div>

			<CustomContainer>
				<HirUsContainer>
					<h1>Hire Us</h1>

					<div style={{ maxWidth: "25rem" }}>
						<UIParagraph>
							Let’s get to work! Please answer a couple of short
							questions about you and your project
						</UIParagraph>
					</div>
				</HirUsContainer>

				<ImageContainer
					style={{
						position: "relative",
						cursor: "pointer",
					}}>
					<Image
						src='/hir-us/img1.jpg'
						alt='Hir Us Image'
						layout='fill'
						objectFit='cover'
					/>
				</ImageContainer>

				<HiddenImageContainer>
					<Image
						src='/hir-us/img1.jpg'
						alt='Hir Us Image'
						width={500}
						height={400}
						layout='responsive'
					/>
				</HiddenImageContainer>

				<form onSubmit={handleSubmit(onSubmit)}>
					<ContactContainer>
						<LeftContent>
							<ContactInfo>
								<p>
									About You <span> & About Your Project</span>
								</p>
							</ContactInfo>

							<div className='control'>
								{errors.name && (
									<p className='error-is-invalid'>
										{errors.name?.message}
									</p>
								)}
								{!errors.name && <label htmlFor='name'> Name</label>}

								<input
									type='text'
									id='name'
									placeholder={errors.name ? "" : "Full Name"}
									{...register("name")}
									className={` ${errors.name ? "is-invalid" : ""}`}
								/>
							</div>

							<div className='control'>
								{!errors.email && <label htmlFor='email'> Email</label>}

								{errors.email && (
									<p className='error-is-invalid'>
										{errors.email.message}
									</p>
								)}

								<input
									type='text'
									id='email'
									placeholder={errors.email ? "" : "Email Address"}
									className={` ${
										errors.email ? "is-invalid" : "custom-input"
									}`}
									{...register("email")}
								/>
							</div>

							<div className='control'>
								<label htmlFor='phoneNumber'> Phone Number</label>
								<input
									type='number'
									id='number'
									required
									placeholder='Phone Number'
								/>
							</div>
						</LeftContent>

						<RightContent>
							<ContactInfo className='hid-s-phone'>
								About Your Project
							</ContactInfo>

							<div className='control'>
								{!errors.subject && (
									<label htmlFor='subject'>Description </label>
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
										errors.subject ? "" : "Tell us about your project"
									}
									className={` ${
										errors.email ? "is-invalid" : "custom-input"
									}`}></textarea>
							</div>

							<div className='control'>
								<label htmlFor='file'> Files</label>
								<label id='filePicker-label' htmlFor='filePicker'>
									<AttachmentIcon
										style={{ fontSize: "1.3rem", marginRight: "8px" }}
									/>
									<span>
										Attach any files you feel would be useful
									</span>
								</label>
								<input
									id='filePicker'
									style={{ visibility: "hidden" }}
									type={"file"}
									name='filePicker'
									required
									placeholder='Attach any files you feel would be useful'
								/>
							</div>

							<div className='actions'>
								<CustomButton onClick={handleSubmit(onSubmit)}>
									SUBMIT
								</CustomButton>
							</div>
						</RightContent>
					</ContactContainer>
				</form>
			</CustomContainer>
		</Wrapper>
	);
};

export default memo(HirUsPageComponent);

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width1250);
	overflow: hidden;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	background: #e5e5e5;
	padding: 5rem 9%;
	padding-top: 12rem;
	position: relative;
	padding-bottom: 8rem;
	@media (min-width: 768px) {
		padding-bottom: 11rem !important;
	}
`;

const HirUsContainer = styled.div`
	max-width: 35.563rem;
	margin: 0 auto;
	margin-bottom: 2rem;
	h1 {
		font-size: 24px;
		margin-bottom: 2rem;
		color: var(--color-primary);
		@media (min-width: 568px) {
			text-align: center;
			max-width: 25rem;
			font-style: normal;
			font-weight: bold;
			font-size: 64px;
		}
	}
`;

const ImageContainer = styled.div`
	height: 34.813rem;
	min-width: 34.813rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	background-color: white;
	overflow: hidden;
	max-width: 73.125rem;
	overflow: hidden;
	margin: 6rem auto;
	@media (max-width: 768px) {
		display: none;
	}
`;

const HiddenImageContainer = styled.div`
	width: 100%;
	max-height: 20rem;
	overflow: hidden;
	margin-top: 4rem;
	@media (min-width: 768px) {
		display: none;
	}
	img {
		object-fit: cover;
		display: block;
	}
`;

const ContactContainer = styled.div`
	min-height: 36.688rem;
	width: 100%;
	max-width: 73.125rem;
	display: flex;
	justify-content: space-between;
	margin-left: auto;
	margin-right: auto;
	margin-top: 5rem;
	flex-wrap: wrap;
	background-color: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	@media (min-width: 768px) {
		margin-top: 12rem;
		min-width: 34.813rem;
	}
	.control {
		margin-bottom: 2rem;
	}
	.control label {
		display: block;
		color: var(--color-primary);
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
	.control input {
		height: 3.1rem;
	}
	.control textarea {
		height: 9.688rem;
		resize: none;
	}
	.control label#filePicker-label,
	.control textarea,
	.control input {
		width: 100%;
		font: inherit;
		border-radius: 4px;
		text-align: left;
		padding: 1rem;
		transition: 0.3s;
		border: 1px solid rgba(231, 231, 235, 0.48);
		background: rgba(231, 231, 235, 0.48);
		backdrop-filter: blur(100px);
		@media (min-width: 768px) {
			max-width: 27.125rem;
		}
		&:hover {
			background: #e0d4fd;
			border: 1px solid #e0d4fd;
		}
		::placeholder {
			/* Chrome, Firefox, Opera, Safari 10.1+ */
			color: #878599;
			opacity: 1; /* Firefox */
		}
		:-ms-input-placeholder {
			/* Internet Explorer 10-11 */
			color: #878599;
		}
		::-ms-input-placeholder {
			/* Microsoft Edge */
			color: #878599;
		}
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
		transition: 0.3s;
	}

	.actions {
		margin-top: 1.5rem;
	}
`;

const LeftContent = styled.div`
	flex: 1;
	width: 500px;
	border-right: 1px solid #9f9ead;
	padding: 3rem 2rem;
	@media (max-width: 768px) {
		min-width: 100%;
		border-right: 0;
	}
	p {
		span {
			display: none;
			@media (max-width: 768px) {
				display: inline;
			}
		}
	}
`;

const RightContent = styled(LeftContent)`
	border: none;
	@media (min-width: 768px) {
		padding-left: 4rem;
	}
	@media (max-width: 768px) {
		padding-top: 0;
		margin-top: -1.4rem;
		.hid-s-phone {
			display: none;
		}
	}
	.control label#filePicker-label {
		font-style: normal;
		font-weight: normal;
		line-height: 150%;
		color: #878599;
		font-size: 0.85rem;
		display: flex;
		align-items: center;
		margin-bottom: 0;
		border: 1px dashed #cfced6;
		&:hover {
			border: 1px dashed #cfced6;
		}
	}
`;

const ContactInfo = styled.div`
	font-family: Poppins;
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 150%;
	margin-bottom: 3rem;
	color: var(--color-primary);
	padding-left: 1rem;
	border-left: 2px solid var(--color-secondary);
`;

const CustomButton = styled.button`
	width: 100%;
	max-width: 434px;
	min-height: 54px;
	font: inherit;
	cursor: pointer;
	background-color: var(--color-secondary);
	border: 1px solid var(--color-secondary);
	padding: 0.5rem 1rem;
	border-radius: 4px;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	transition-duration: var(--transition-duration);
	text-align: center;
	color: white;
	margin-top: -2rem;
	display: block;
	font-weight: bold;
	&:hover {
		background: rgba(0, 208, 176, 0.7);
		border-color: rgba(0, 208, 176, 0.7);
	}
`;
