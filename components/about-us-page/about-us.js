/** @format */

import React, { fragment } from "react";

import AboutContent from "./about-content";
import Team from "./team";
import Meeting from "./meeting";

const AboutUsComponent = () => {
	return (
		<fragment>
			<AboutContent />
			<Team />
			<Meeting />
		</fragment>
	);
};

export default AboutUsComponent;
