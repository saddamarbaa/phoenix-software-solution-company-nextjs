/** @format */

import { Fragment } from "react";
import Head from "next/head";
import ServicesComponent from "../components/services-page/services";

function ServicesPage() {
	return (
		<Fragment>
			<Head>
				<title>SERVICES</title>
				<meta
					name='description'
					content='We provide an injection of creative value to build a powerful yet beautiful experience.'
				/>
			</Head>
			<ServicesComponent />
		</Fragment>
	);
}

export default ServicesPage;
