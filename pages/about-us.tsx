/** @format */

import type { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";

import AboutUsComponent from "../components/about-us-page/about-us";

const AboutUsPage: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>About Software Agency</title>
				<meta
					name='description'
					content='We are a remote design agency based in Omaha, Nebraska, working with clients around the world. As passionate designers, we love building products that are easy to use, accessible, engaging, and delightful.'
				/>
			</Head>
			<AboutUsComponent />
		</React.Fragment>
	);
};

export default AboutUsPage;
