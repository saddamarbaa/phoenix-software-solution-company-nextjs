/** @format */

import React, { Fragment } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import ContactComponent from "../components/contact-page/contact";

const ContactPage: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Contact us</title>
				<meta
					name='description'
					content='Contact us Lets Talk For The Next Project'
				/>
			</Head>
			<ContactComponent />
		</React.Fragment>
	);
};

export default ContactPage;
