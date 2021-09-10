/** @format */

import { Fragment } from "react";
import Head from "next/head";
import BlogComponent from "../components/blog-page/blog";

function BlogPage() {
	return (
		<Fragment>
			<Head>
				<title></title>
				<meta name='description' content='!' />
			</Head>
			<BlogComponent />
		</Fragment>
	);
}

export default BlogPage;
