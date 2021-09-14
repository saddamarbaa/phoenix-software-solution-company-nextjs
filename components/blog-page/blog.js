/** @format */

import React, { Fragment, memo } from "react";

import AllBlog from "./all-blog";
import Welcoming from "./welcoming";
import MainNavigation from "../layout/main-navigation";

const BlogComponent = () => {
	return (
		<Fragment>
			<MainNavigation />
			<Welcoming />
			<AllBlog />
		</Fragment>
	);
};

export default memo(BlogComponent);
