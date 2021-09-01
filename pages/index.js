/** @format */

import { Fragment } from "react";
import Head from "next/head";

import Hero from "../components/home-page/hero";

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
			{/* <Hero /> */}
			hello
		</Fragment>
	);
}

export default HomePage;
