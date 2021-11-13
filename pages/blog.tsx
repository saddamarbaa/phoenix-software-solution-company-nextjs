/** @format */

import React, { Fragment } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import BlogComponent from "../components/blog-page/blog";

const BlogPage: NextPage = () => {
	return (
		<React.Fragment>
			<Head>
				<title>blog</title>
				<meta
					name='description'
					content='Collection of articles from our workers'
				/>
			</Head>
			<BlogComponent />
		</React.Fragment>
	);
};

export default BlogPage;
