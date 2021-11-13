/** @format */

import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import WorkComponent from "../components/work-page/work";

const WorkPage: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title> works</title>
				<meta name='description' content='Our latest client works' />
			</Head>
			<WorkComponent />
		</React.Fragment>
	);
};

export default WorkPage;
