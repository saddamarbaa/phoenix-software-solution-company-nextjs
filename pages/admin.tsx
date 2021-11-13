/** @format */

import React, { Fragment } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import AdminComponent from "../components/admin-page/admin";

const ContactPage: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Admin</title>
				<meta name='description' content='Admin page' />
			</Head>
			<AdminComponent />
		</React.Fragment>
	);
};

export default ContactPage;
