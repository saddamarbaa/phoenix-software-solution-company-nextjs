/** @format */

import { Fragment } from "react";

import Footer from "./footer";
import ScrollToTopComponent from "./scroll-to-top";
import MainNavigation from "./main-navigation";

function Layout(props) {
	return (
		<Fragment>
			{/* <MainNavigation /> */}
			<main>{props.children}</main>
			<Footer />
			<ScrollToTopComponent />
		</Fragment>
	);
}

export default Layout;
