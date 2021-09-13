/** @format */

import { Fragment } from "react";
import Head from "next/head";
import WorkComponent from "../components/work-page/work";

function WorkPage() {
	return (
		<Fragment>
			<Head>
				<title> works</title>
				<meta name='description' content='Our latest client works' />
			</Head>
			<WorkComponent />
		</Fragment>
	);
}

export default WorkPage;
