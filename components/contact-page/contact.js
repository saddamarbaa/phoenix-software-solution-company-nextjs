/** @format */

import { Fragment, memo } from "react";

import ContactFormComponent from "./contact-form";
import ContactLanding from "./contact-landing";
import MainNavigation from "../layout/main-navigation";

const ContactComponent = () => {
	return (
		<Fragment>
			<MainNavigation />
			<ContactLanding />
			<ContactFormComponent />
		</Fragment>
	);
};

export default memo(ContactComponent);
