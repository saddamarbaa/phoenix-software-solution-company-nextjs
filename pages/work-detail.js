/** @format */

import { Fragment } from "react";
import Head from "next/head";

import WorkDetailComponent from "../components/work-detail-page/work-detail";
import MainNavigation from "../components/layout/main-navigation";

function BlogPage() {
	return (
		<Fragment>
			<Head>
				<title>Work Details</title>
				<meta name='description' content='Work Details' />
			</Head>

			<MainNavigation />
			<WorkDetailComponent />
		</Fragment>
	);
}

export default BlogPage;
