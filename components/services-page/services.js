/** @format */

import Landing from "./landing";
import ServicesOption from "./services-option";
import { Fragment } from "react";
import { memo } from "react";

const ServicesComponent = () => {
	return (
		<Fragment>
			<Landing />
			<ServicesOption />
		</Fragment>
	);
};

export default memo(ServicesComponent);
