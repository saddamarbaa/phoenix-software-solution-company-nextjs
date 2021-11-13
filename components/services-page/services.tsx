/** @format */

import React, { FC, Fragment, memo } from "react";

import Landing from "./landing";
import ServicesOption from "./services-option";
import MainNavigation from "../layout/main-navigation";

const ServicesComponent: FC = () => {
	return (
		<React.Fragment>
			<MainNavigation />
			<Landing />
			<ServicesOption />
		</React.Fragment>
	);
};

export default memo(ServicesComponent);
