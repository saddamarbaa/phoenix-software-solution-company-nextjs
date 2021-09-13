/** @format */

import React, { fragment } from "react";
import Landing from "./Landing";

import { memo } from "react";

const BlogDetailComponent = () => {
	return (
		<fragment>
			<Landing />
		</fragment>
	);
};

export default memo(BlogDetailComponent);
