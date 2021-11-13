/** @format */

import React, { FC, memo } from "react";

import Landing from "./landing";
import WorkFeed from "./work-feed";
import MainNavigation from "../layout/main-navigation";

const WorkComponent: FC = () => {
	return (
		<React.Fragment>
			<MainNavigation />
			<Landing />
			<WorkFeed />
		</React.Fragment>
	);
};

export default memo(WorkComponent);
