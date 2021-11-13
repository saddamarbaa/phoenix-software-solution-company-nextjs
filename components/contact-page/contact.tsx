/** @format */

import React, { FC, Fragment, memo } from "react";

import ContactFormComponent from "./contact-form";
import ContactLanding from "./contact-landing";
import MainNavigation from "../layout/main-navigation";
import Map from "../map/map";

const ContactComponent: FC = () => {
	return (
		<React.Fragment>
			<MainNavigation />
			<ContactLanding />
			<ContactFormComponent />
			<Map />
		</React.Fragment>
	);
};

export default memo(ContactComponent);
