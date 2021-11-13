/** @format */

import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import HirUsPageComponent from "../components/hire-us-page/hir-us";
import MainNavigation from "../components/layout/main-navigation";

import HirUsPageComponentTemp from "../components/hire-us-page/hir-us";

const HirUsPage: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Hire Us</title>
				<meta
					name='description'
					content='Let’s get to work! Please answer a couple of short questions about you and your project'
				/>
			</Head>

			<MainNavigation />
			<HirUsPageComponent />
			<HirUsPageComponentTemp />
		</React.Fragment>
	);
};

export default HirUsPage;
