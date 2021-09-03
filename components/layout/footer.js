/** @format */
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<FooterWrapper>
			<FooterTop>
				<nav>
					<ul className='logo-container'>
						<li className='head logo-list'>
							<Link href='/'>
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
							</Link>
						</li>
						<li className='logo-list'>
							<span
								style={{
									maxWidth: "230px",
									display: "block",
									lineHeight: "1.7",
								}}>
								We are experienced in the field of interface design for
								websites, mobile applications
							</span>
						</li>
					</ul>

					<ul>
						<h3 className='head'>Our Work</h3>

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
						<h3 className='head'>Company</h3>
						<li>
							<Link href='#'>Our Team</Link>
						</li>
						<li>
							<Link href='#'>About Us</Link>
						</li>
						<li>
							<Link href='#'>Contact Us</Link>
						</li>
						<li>
							<Link href='#'>Career?</Link>
						</li>
					</ul>
					<ul>
						<h3 className='head'>Contact</h3>
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
							<Link href='#'>1415 Piper St Grand Island, NE 68803</Link>
						</li>

						<button>WHATSAPP US!</button>
					</ul>
				</nav>
			</FooterTop>
			<FooterBottom>&copy; 2021 All rights reserved</FooterBottom>
		</FooterWrapper>
	);
};

export default Footer;

const FooterWrapper = styled.footer`
	min-height: 38.5625rem;
	width: 100vw;
	color: white;
	padding: 5rem 9%;
	background: var(--color-primary);

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}

	nav {
		display: flex;
		justify-content: space-between;
		width: 100vw;
		flex-wrap: wrap;

		ul {
			flex: 1;
			min-width: 250px;
			li {
				margin-top: 2rem;
			}

			li.logo-list {
				padding-top: 0;
				margin-top: 0rem;
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

	.head {
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
		cursor: pointer;
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

		&:hover {
			background: rgba(0, 208, 176, 0.7);
			border-color: rgba(0, 208, 176, 0.7);
		}
	}
`;

const LogoImage = styled.div`
	min-height: 6rem;
	color: white;
	display: flex;
	align-items: center;
	text-transform: uppercase;

	.logo {
		width: 6.62rem;
		min-height: 6rem;
		display: flex;
		align-items: center;
	}
`;

const FooterTop = styled.div`
	display: flex;
	margin-bottom: 8rem;
`;

const FooterBottom = styled.div``;
