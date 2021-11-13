/** @format */

import React, { Fragment } from "react";
import Head from "next/head";
import type { NextPage } from "next";

import BlogDetailComponent from "../components/blog-detail-page/blog-detail";

const HirUsPage: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>DETAIL BLOG</title>
				<meta
					name='description'
					content='The importance of color in design'
				/>
			</Head>

			<BlogDetailComponent />
		</React.Fragment>
	);
};

export default HirUsPage;
