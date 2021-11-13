/** @format */

import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import WorkDetailComponent from "../components/work-detail-page/work-detail";
import MainNavigation from "../components/layout/main-navigation";

const BlogPage: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Work Details</title>
				<meta name='description' content='Work Details' />
			</Head>

			<MainNavigation />
			<WorkDetailComponent />
		</React.Fragment>
	);
};

export default BlogPage;
