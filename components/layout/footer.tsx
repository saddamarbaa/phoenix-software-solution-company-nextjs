/** @format */

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import React, { memo, useState, useEffect } from "react";
import { useRouter } from "next/router";

interface AdminProps {
	isAdminPage: boolean;
}

const Footer: React.FC = () => {
	const [isAdminPage, SetIsAdminPage] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		if (router.pathname == "/admin") {
			SetIsAdminPage(true);
		}
	}, [router.pathname]);

	return (
		<FooterWrapper isAdminPage={isAdminPage}>
			<AbsoluteBackGroundlinearGradient>
				<ImageContainer
					style={{
						position: "relative",
						cursor: "pointer",
					}}>
					<Image
						src='/es.png'
						alt='qsak Image'
						layout='fill'
						objectFit='cover'
					/>
				</ImageContainer>
			</AbsoluteBackGroundlinearGradient>

			<CustomContainer>
				<div
					className='drop-back-shadow'
					style={{
						position: "relative",
						cursor: "pointer",
					}}>
					<Image
						src='/home/starbucks.png'
						alt='Starbucks Image'
						layout='fill'
						objectFit='contain'
					/>
				</div>
				<FooterTop>
					<nav>
						<ul className='logo-container'>
							<li className='head logo-list'>
								<Link href='/'>
									<a>
										<LogoImage>
											<div
												className='logo'
												style={{
													position: "relative",
													cursor: "pointer",
												}}>
												<Image
													className='logo-img'
													src='/logo/logo.png'
													alt='PHOENIX LOGO'
													layout='fill'
													objectFit='contain'
												/>
											</div>
											<div>PHOENIX </div>
										</LogoImage>
									</a>
								</Link>
							</li>
							<li className='logo-list'>
								<span
									style={{
										maxWidth: "230px",
										display: "block",
										lineHeight: "1.7",
									}}>
									We are experienced in the field of interface design
									for websites, mobile applications
								</span>
							</li>
						</ul>

						<ul>
							<h3 className='head'>
								Our Work
								<div id='head'></div>
							</h3>

							<li>
								<Link href='#'>Portfolio</Link>
							</li>
							<li>
								<Link href='#'>Company Profile</Link>
							</li>
							<li>
								<Link href='#'>Marketing</Link>
							</li>
							<li>
								<Link href='#'>Mobile App</Link>
							</li>
							<li>
								<Link href='#'>Website Design</Link>
							</li>
							<li>
								<Link href='#'>Case Study</Link>
							</li>
						</ul>
						<ul>
							<h3 className='head'>
								Company
								<div id='head'></div>
							</h3>
							<li>
								<Link href='/about-us'>Our Team</Link>
							</li>
							<li>
								<Link href='/about-us'>About Us</Link>
							</li>
							<li>
								<Link href='/contact'>Contact Us</Link>
							</li>
							<li>
								<Link href='#'>Career?</Link>
							</li>
						</ul>
						<ul>
							<h3 className='head'>
								Contact
								<div id='head'></div>
							</h3>
							<li>
								<Link href='#'>Instagram.com/phonenixsoftllc</Link>
							</li>
							<li>
								<Link href='#'>Twitter.com/phoenixsoftllc</Link>
							</li>
							<li>
								<Link href='#'>linkedIn.com/phoenixsoftllc</Link>
							</li>
							<li>
								<Link href='#'>
									1415 Piper St Grand Island, NE 68803
								</Link>
							</li>

							<button>WHATSAPP US!</button>
						</ul>
					</nav>
				</FooterTop>
				<FooterBottom>&copy; 2021 All rights reserved</FooterBottom>
			</CustomContainer>
		</FooterWrapper>
	);
};

export default memo(Footer);

const FooterWrapper = styled.div<AdminProps>`
	position: relative;
	min-height: 38.5625rem;
	width: 100vw;
	color: white;
	padding: 5rem 9%;
	background: var(--color-primary);
	overflow: hidden;

	display: ${(props: any) => (props.isAdminPage ? `none` : `block`)};

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}
`;

const CustomContainer = styled.footer`
	width: 100%;
	max-width: var(--max-width);
	margin: 0 auto;

	nav {
		display: flex;
		justify-content: space-between;
		width: 100vw;
		flex-wrap: wrap;
		ul {
			flex: 1;
			min-width: 250px;
			position: relative;

			@media (min-width: 1200px) {
				padding-left: 1rem;

				&::before {
					content: "";
					position: absolute;
					width: 2px;
					height: 500%;
					background: rgba(255, 255, 255, 20%);
					left: -2px;
					top: -300px;
					display: none;
				}
			}
			li {
				margin-top: 2rem;
			}
			a {
				color: white;
				border: 2px solid transparent;
				transition-duration: var(--transition-duration);
				&:hover,
				&:active {
					border-bottom: 2px solid var(--color-secondary);
				}
			}
		}
	}

	#head {
		position: absolute;
		top: 4px;
		left: -17px;
		border-left: 2px solid var(--color-secondary);
		height: 30px;
		@media (max-width: 1200px) {
			display: none;
		}
	}

	.head {
		position: relative;
		font-weight: bold;
		font-size: 1.4rem;
		margin-top: 2.2rem;
		@media (max-width: 768px) {
			font-size: 1.3rem;
		}
	}
	.logo-container {
		@media (max-width: 768px) {
			display: none;
		}
	}

	button {
		width: 148px;
		height: 48px;
		font: inherit;
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
		margin-top: 3rem;
		display: block;
		cursor: pointer;
		&:hover {
			background: rgba(0, 208, 176, 0.7);
			border-color: rgba(0, 208, 176, 0.7);
		}
	}
`;

const LogoImage = styled.div`
	color: white;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	margin-left: -1rem;
	@media (max-width: 1200px) {
		margin-left: 0;
	}
	.logo {
		width: 3.825rem;
		height: 2.237rem;
		display: flex;
		align-items: center;
		img {
			display: block;
		}
	}
`;

const FooterTop = styled.div`
	display: flex;
	margin-bottom: 8rem;
`;

const FooterBottom = styled.div`
	position: relative;
	z-index: 300;
	opacity: 0.99;
	@media (min-width: 1200px) {
		padding-left: 1rem;
	}
`;

const AbsoluteBackGroundlinearGradient = styled.div`
	width: 1500px;
	height: 1600px;
	left: 0;
	bottom: 0;
	position: absolute;
	bottom: -510px;
	left: -550px;

	@media (min-width: 1500px) {
		width: 1800px;
		height: 1700px;
	}
`;

const ImageContainer = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
`;
