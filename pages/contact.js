/** @format */

import { Fragment } from "react";
import Head from "next/head";
import Contact from "../components/contact-page/contact";

function ContactPage() {
	return (
		<Fragment>
			<Head>
				<title>Contact </title>
				<meta
					name='description'
					content='CONTACT US Lets Talk For The Next Project'
				/>
			</Head>
			<Contact />
		</Fragment>
	);
}

export default ContactPage;
