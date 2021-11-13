/** @format */

import Image from "next/image";
import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import { FC, useRef, useEffect, memo } from "react";

const BlogArticle1: FC = () => {
	const autoScrollToBottomRef = useRef<HTMLInputElement>(null);

	// Auto Scroll functionality
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return (
		<AboutAsWrapper>
			{/* Empty div for auto scroll */}
			<div
				ref={autoScrollToBottomRef}
				style={{ paddingTop: "7rem" }}
				className='auto-scroll'></div>

			<AbsoluteContainer>
				<CustomContainer>
					<div className='content-container'>
						<ImageContainer
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Image
								src='/home/home2.jpg'
								alt='qsak Image'
								layout='fill'
								objectFit='cover'
							/>
						</ImageContainer>
					</div>
				</CustomContainer>
			</AbsoluteContainer>

			<CustomContainer>
				<BlogContent>
					<User>
						<div>
							<IconButton
								style={{ marginLeft: "-1rem", marginTop: "-1rem" }}>
								<Avatar
									src='/home/user.png'
									style={{ width: "70px", height: "70px" }}
								/>
							</IconButton>
						</div>
						<div>
							<p
								style={{
									fontWeight: "bold",
									color: "white",
									marginBottom: "0px",
								}}>
								Fariz Al Faridli
							</p>
							<p style={{ color: "#878599" }}>Author</p>
						</div>
					</User>

					<p>
						For entrepreneurs, brands are very important for business
						continuity. Brands can be said to be the face of
						entrepreneurs&apos; business in the public, or it can also be
						said that brands are their personal identities. As a business
						person, it is very important to know and define your brand,
						not only to try to make a strong impression but make it
						possible for consumers and partners to get to know your
						company. The purpose of branding is to convey a message to the
						public and users either through marketing materials or through
						a chosen logo and name. On the other hand, the startup that
						you build needs to be known and seen by many people to open up
						opportunities for more people to know. Building a brand for a
						startup is like investing in increasing your name and placing
						your position in society as something to remember. In
						addition, the brand is also the right way to convey value to
						the community.
					</p>

					<h2>Why Branding?</h2>
					<p>
						With a strong and consistent brand image, it will help in
						business. Brands will make it easier for consumers to
						recognize, remember, and recommend your brand to many people.
						Therefore, that is one of the reasons that branding is very
						important. If our brand is already well known and strong in
						our business, it will be very easy to bring in new consumers.
						It is very clear, isn&apos;t it very unfortunate if we have
						been in a business sector for a long time, but we don&apos;t
						have a strong brand or don&apos;t even have a brand at all. A
						strong brand goes hand in hand with a positive market
						impression and consumers will be happy to do business with you
						because of the reputation and consumer trust with the brand.
					</p>
					<p>
						For entrepreneurs, brands are very important for business
						continuity. Brands can be said to be the face of
						entrepreneurs&apos; business in the public, or it can also be
						said that brands are their personal identities. As a business
						person, it is very important to know and define your brand,
						not only to try to make a strong impression but make it
						possible for consumers and partners to get to know your
						company. The purpose of branding is to convey a message to the
						public and users either through marketing materials or through
						a chosen logo and name. On the other hand, the startup that
						you build needs to be known and seen by many people to open up
						opportunities for more people to know. Building a brand for a
						startup is like investing in increasing your name and placing
						your position in society as something to remember. In
						addition, the brand is also the right way to convey value to
						the community.
					</p>
					<p>
						With a strong and consistent brand image, it will help in
						business. Brands will make it easier for consumers to
						recognize, remember, and recommend your brand to many people.
						Therefore, that is one of the reasons that branding is very
						important. If our brand is already well known and strong in
						our business, it will be very easy to bring in new consumers.
						It is very clear, isn&apos;t it very unfortunate if we have
						been in a business sector for a long time, but we don&apos;t
						have a strong brand or don&apos;t even have a brand at all. A
						strong brand goes hand in hand with a positive market
						impression and consumers will be happy to do business with you
						because of the reputation and consumer trust with the brand.
					</p>
				</BlogContent>
			</CustomContainer>
		</AboutAsWrapper>
	);
};

export default memo(BlogArticle1);

const AboutAsWrapper = styled.div`
	min-height: 90vh;
	background: var(--color-primary);
	background-image: linear-gradient(
		to right,
		rgba(15, 11, 51, 0.3),
		#0f0b33,
		rgba(0, 208, 176, 0.4)
	);

	padding: 5rem 9%;
	position: relative;

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}
	@media (min-width: 1169px) {
		padding-top: 400px !important;
	}

	color: white;
`;

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
	margin: 0 auto;
	position: relative;
`;

const AbsoluteContainer = styled.div`
	width: 100vw;
	position: absolute;
	top: -270.5px;
	left: 0;
	right: 0;
	padding: 0 9%;

	.content-container {
		max-width: 1170px;
		height: 541px;
		width: 100%;
		margin: 0 auto;
	}

	@media (max-width: 1169px) {
		display: none;
	}
`;

const ImageContainer = styled.div`
	min-height: 100%;
	min-width: 100%;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	background-color: white;
	overflow: hidden;
`;

const User = styled.div`
	display: flex;
	align-items: center;
	margin-top: 1.2rem;
	margin-bottom: 1rem;

	p {
		margin-bottom: 0;
	}
`;

const BlogContent = styled.div`
	max-width: 927px;
	margin: 0 auto;

	h2 {
		font-family: Poppins;
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 150%;
		color: white;
		margin-bottom: 2rem;

		@media (max-width: 768px) {
			font-size: 1.4rem;
		}
	}

	p {
		margin-bottom: 2rem;
		line-height: var(--line-height);
		color: #878599;
		@media (min-width: 768px) {
			font-size: 1.1rem;
		}
	}
`;
