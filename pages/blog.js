/** @format */

import { Fragment } from "react";
import Head from "next/head";

import BlogComponent from "../components/blog-page/blog";

function BlogPage() {
	return (
		<Fragment>
			<Head>
				<title>blog</title>
				<meta
					name='description'
					content='Collection of articles from our workers'
				/>
			</Head>
			<BlogComponent />
		</Fragment>
	);
}

export default BlogPage;
