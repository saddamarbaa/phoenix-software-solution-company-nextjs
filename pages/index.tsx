/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import React, { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
	setLogInState,
	setLogOutState,
	selectUser,
} from "../features/user/userSlice";

import HomePageComponent from "../components/home-page/home-page";
import Hero from "../components/home-page/hero";
import AboutUsCom from "../components/home-page/about-us";
import Work from "../components/home-page/work";
import TESTIMONIAL from "../components/home-page/testimonial";
import Services from "../components/home-page/services";
import MainNavigation from "../components/layout/main-navigation";

const Home: NextPage = () => {
	const user = useAppSelector(selectUser); // grab the user from global state
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			setLogInState({
				displayName: "User Name",
				uid: "Demmy ID",
				email: "Email",
				photoURL: "Image",
			}),
		);
	}, []);

	// console.log(" user", user);

	return (
		<React.Fragment>
			<Head>
				<title>PHOENIX SOFTWARE SOLUTION</title>
				<meta
					name='description'
					content='Helping companies & individuals identify key solutions for their target markets. We boost their ability to create products. Our business model saves clients time and money. Don`t reinvent the wheel..'
				/>
			</Head>

			<AbsoluteBackGroundlinearGradient>
				<LinearGradientImageContainer
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
				</LinearGradientImageContainer>
			</AbsoluteBackGroundlinearGradient>
			<MainNavigation />
			<Hero />
			<Services />
			<AboutUsCom />
			<Work />
			<TESTIMONIAL />
		</React.Fragment>
	);
};

export default Home;

const AbsoluteBackGroundlinearGradient = styled.div`
	width: 1500px;
	height: 1500px;
	top: -700px;
	left: -700px;
	position: absolute;
	pointer-events: none;
	z-index: 10;
	@media (min-width: 1500px) {
		width: 1800px;
		height: 1700px;
	}
`;

const LinearGradientImageContainer = styled.div`
	height: 100%;
	width: 100%;
	overflow: hidden;
`;
