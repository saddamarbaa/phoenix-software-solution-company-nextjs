/** @format */

import { Fragment } from "react";
import { memo } from "react";

import Landing from "./landing";
import ServicesOption from "./services-option";
import MainNavigation from "../layout/main-navigation";

const ServicesComponent = () => {
	return (
		<Fragment>
			<MainNavigation />
			<Landing />
			<ServicesOption />
		</Fragment>
	);
};

export default memo(ServicesComponent);
