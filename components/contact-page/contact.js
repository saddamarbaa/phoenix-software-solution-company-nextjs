/** @format */

import { Fragment, memo } from "react";

import ContactFormComponent from "./contact-form";
import ContactLanding from "./contact-landing";
import MainNavigation from "../layout/main-navigation";
import Map from "../map/map";

const ContactComponent = () => {
	return (
		<Fragment>
			<MainNavigation />
			<ContactLanding />
			<ContactFormComponent />
			<Map />
		</Fragment>
	);
};

export default memo(ContactComponent);
