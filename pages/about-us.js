/** @format */

import { Fragment } from "react";
import Head from "next/head";
import AboutUsComponent from "../components/about-us-page/about-us";

function AboutUsPage() {
	return (
		<Fragment>
			<Head>
				<title></title>
				<meta name='description' content='!' />
			</Head>
			<AboutUsComponent />
		</Fragment>
	);
}

export default AboutUsPage;
