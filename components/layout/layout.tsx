/** @format */

import React, { Fragment } from "react";

import Footer from "./footer";
import ScrollToTopComponent from "./scroll-to-top";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
	return (
		<Fragment>
			<main>{props.children}</main>
			<Footer />
			<ScrollToTopComponent />
		</Fragment>
	);
};

export default Layout;
