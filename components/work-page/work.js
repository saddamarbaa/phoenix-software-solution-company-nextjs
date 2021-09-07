/** @format */

import React, { fragment } from "react";
import Landing from "./landing";
import WorkFeed from "./work-feed";

const WorkComponent = () => {
	return (
		<fragment>
			<Landing />
			<WorkFeed />
		</fragment>
	);
};

export default WorkComponent;
