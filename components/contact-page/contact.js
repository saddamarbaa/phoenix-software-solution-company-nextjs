/** @format */

import ContactLanding from "./contact-landing";
import { Fragment } from "react";
import ContactFormComponent from "./contact-form";
import { memo } from "react";

const ContactComponent = () => {
	return (
		<Fragment>
			<ContactLanding />
			<ContactFormComponent />
		</Fragment>
	);
};

export default memo(ContactComponent);
