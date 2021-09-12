/** @format */

import { Fragment } from "react";
import Head from "next/head";
import ServicesComponent from "../components/services-page/services";

function ServicesPage() {
	return (
		<Fragment>
			<Head>
				<title></title>
				<meta name='description' content='!' />
			</Head>
			<ServicesComponent />
		</Fragment>
	);
}

export default ServicesPage;
