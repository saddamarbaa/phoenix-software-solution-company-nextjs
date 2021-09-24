/** @format */

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<FooterWrapper>
			<CustomAbsoluteRoundBorders>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</CustomAbsoluteRoundBorders>

			<AbsoluteContainer>
				<ImageContainer
					style={{
						position: "relative",
						cursor: "pointer",
					}}>
					<Image
						src='/gbgrrr.png'
						alt='qsak Image'
						layout='fill'
						objectFit='cover'
					/>
				</ImageContainer>
			</AbsoluteContainer>

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

export default Footer;

const CustomAbsoluteRoundBorders = styled.div`
	pointer-events: none;
	div {
		pointer-events: none;
	}

	@media (max-width: 1100px) {
		display: none;
	}

	display: flex;
	justify-content: space-between;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 0 9%;
	div {
		min-height: 100%;
		border-left: 1px solid rgba(255, 255, 255, 20%);
	}
`;

const FooterWrapper = styled.div`
	position: relative;
	min-height: 38.5625rem;
	width: 100vw;
	color: white;
	padding: 5rem 9%;
	background: var(--color-primary);

	/* background-image: linear-gradient(
		to right,
		rgba(0, 208, 176, 0.4),
		rgba(15, 11, 51, 0.3),
		#0f0b33
	); */

	overflow: hidden;

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}
`;

const CustomContainer = styled.footer`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
	margin: 0 auto;
	nav {
		display: flex;
		justify-content: space-between;
		width: 100vw;
		flex-wrap: wrap;
		ul {
			flex: 1;
			min-width: 250px;
			@media (min-width: 1200px) {
				padding-left: 1rem;
			}
			li {
				margin-top: 2rem;
			}
			a {
				color: white;
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

const AbsoluteContainer = styled.div`
	width: 1200px;
	height: 1200px;
	position: absolute;
	bottom: -700px;
	left: -450px;
`;

const ImageContainer = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
`;
