/** @format */

import React, { Fragment } from "react";
import AllBlog from "./all-blog";
import Welcoming from "./welcoming";
import { memo } from "react";

const BlogComponent = () => {
	return (
		<Fragment>
			<Welcoming />
			<AllBlog />
		</Fragment>
	);
};

export default memo(BlogComponent);
