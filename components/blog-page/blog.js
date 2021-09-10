/** @format */

import React, { Fragment } from "react";
import AllBlog from "./all-blog";
import Welcoming from "./welcoming";

const BlogComponent = () => {
	return (
		<Fragment>
			<Welcoming />
			<AllBlog />
		</Fragment>
	);
};

export default BlogComponent;
