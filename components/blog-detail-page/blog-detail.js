/** @format */

import React, { fragment } from "react";
import BlogLanding from "./blog-landing";

import { memo } from "react";

const BlogDetailComponent = () => {
	return (
		<fragment>
			<BlogLanding />
		</fragment>
	);
};

export default memo(BlogDetailComponent);
