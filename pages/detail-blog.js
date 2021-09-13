/** @format */

import { Fragment } from "react";
import Head from "next/head";
import BlogDetailComponent from "../components/blog-detail-page/blog-detail";

function HirUsPage(props) {
	return (
		<Fragment>
			<Head>
				<title>DETAIL BLOG</title>
				<meta
					name='description'
					content='The importance of color in design'
				/>
			</Head>

			<BlogDetailComponent />
		</Fragment>
	);
}

export default HirUsPage;
