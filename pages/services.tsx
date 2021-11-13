/** @format */

import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import ServicesComponent from "../components/services-page/services";

const ServicesPage: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>SERVICES</title>
				<meta
					name='description'
					content='We provide an injection of creative value to build a powerful yet beautiful experience.'
				/>
			</Head>
			<ServicesComponent />
		</React.Fragment>
	);
};

export default ServicesPage;
