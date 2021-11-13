/** @format */

import React, { FC, Fragment, memo } from "react";

import BlogArticle1 from "./blog-article1";
import BlogArticle2 from "./blog-article2";
import BlogLanding from "./blog-landing";
import MainNavigation from "../layout/main-navigation";

const BlogDetailComponent: FC = () => {
	return (
		<React.Fragment>
			<MainNavigation />
			<BlogLanding />
			<BlogArticle1 />
			<BlogArticle2 />
		</React.Fragment>
	);
};

export default memo(BlogDetailComponent);
