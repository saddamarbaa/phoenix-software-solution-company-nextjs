/** @format */

import Head from "next/head";
import Router from "next/router";

import "../styles/globals.css";
import Layout from "../components/layout/layout";

import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
	// The size (height) of the progress bar.
	// Numeric values get converted to px.
	size: 4,

	// Color of the progress bar.
	// Also used for the glow around the bar.
	color: "#00daff",

	// Class name used for the progress bar element.
	className: "bar-of-progress",

	// How many milliseconds to wait before the progress bar
	// animation starts after calling .start().
	delay: 80,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Head>
				<title>Saddam' Blog</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta name='author' content='Saddam Arbaa' />
				<meta
					name='description'
					content='I post about programming and web development.'
				/>
			</Head>

			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
