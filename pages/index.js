/** @format */

import { Fragment } from "react";
import Head from "next/head";

import HomePageComponent from "../components/home-page/home-page";

import Hero from "../components/home-page/hero";
import AboutUsCom from "../components/home-page/about-us";
import Work from "../components/home-page/work";
import TESTIMONIAL from "../components/home-page/testimonial";
import Services from "../components/home-page/services";
import MainNavigation from "../components/layout/main-navigation";

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>PHOENIX SOFTWARE SOLUTION</title>
				<meta
					name='description'
					content='Helping companies & individuals identify key solutions for their target markets. We boost their ability to create products. Our business model saves clients time and money. Don`t reinvent the wheel..'
				/>
			</Head>
			{/* <HomePageComponent /> */}

			<MainNavigation />
			<Hero />
			<Services />
			<AboutUsCom />
			<Work />
			<TESTIMONIAL />
		</Fragment>
	);
}

export default HomePage;
