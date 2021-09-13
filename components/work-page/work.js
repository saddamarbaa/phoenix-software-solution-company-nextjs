/** @format */

import React from "react";
import Landing from "./landing";
import WorkFeed from "./work-feed";
import { memo } from "react";

const WorkComponent = () => {
	return (
		<React.Fragment>
			<Landing />
			<WorkFeed />
		</React.Fragment>
	);
};

export default memo(WorkComponent);
