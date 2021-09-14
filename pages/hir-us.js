/** @format */

import { Fragment } from "react";
import Head from "next/head";

import HirUsPageComponent from "../components/hire-us-page/hir-us";
import MainNavigation from "../components/layout/main-navigation";

function HirUsPage(props) {
	return (
		<Fragment>
			<Head>
				<title>Hire Us</title>
				<meta
					name='description'
					content='Let’s get to work! Please answer a couple of short questions about you and your project'
				/>
			</Head>

			<MainNavigation />
			<HirUsPageComponent />
		</Fragment>
	);
}

export default HirUsPage;
