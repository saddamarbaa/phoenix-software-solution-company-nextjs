/** @format */

import React, { fragment, memo } from "react";

import BlogArticle1 from "./blog-article1";
import BlogArticle2 from "./blog-article2";
import BlogLanding from "./blog-landing";
import MainNavigation from "../layout/main-navigation";

const BlogDetailComponent = () => {
	return (
		<fragment>
			<MainNavigation />
			<BlogLanding />
			<BlogArticle1 />
			<BlogArticle2 />
		</fragment>
	);
};

export default memo(BlogDetailComponent);
