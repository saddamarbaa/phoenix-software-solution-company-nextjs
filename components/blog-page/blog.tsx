/** @format */

import React, { Fragment, memo } from "react";

import AllBlog from "./all-blog";
import Welcoming from "./welcoming";
import MainNavigation from "../layout/main-navigation";

const BlogComponent: React.FC = () => {
	return (
		<React.Fragment>
			<MainNavigation />
			<Welcoming />
			<AllBlog />
		</React.Fragment>
	);
};

export default memo(BlogComponent);
