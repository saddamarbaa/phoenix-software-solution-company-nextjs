/** @format */

import { Fragment } from "react";
import Head from "next/head";
import AboutUsComponent from "../components/about-us-page/about-us";

function AboutUsPage() {
	return (
		<Fragment>
			<Head>
				<title>About Software Agency</title>
				<meta
					name='description'
					content='We are a remote design agency based in Omaha, Nebraska, working with clients around the world. As passionate designers, we love building products that are easy to use, accessible, engaging, and delightful.'
				/>
			</Head>
			<AboutUsComponent />
		</Fragment>
	);
}

export default AboutUsPage;
