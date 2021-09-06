/** @format */

import { Fragment } from "react";
import Head from "next/head";
import Contact from "../components/contact-page/contact";

function ContactPage() {
	return (
		<Fragment>
			<Head>
				<title>Contact </title>
				<meta name='description' content='Send me your messages!' />
			</Head>
			<Contact />
		</Fragment>
	);
}

export default ContactPage;
