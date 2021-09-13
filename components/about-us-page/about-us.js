/** @format */

import React, { fragment } from "react";
import AboutContent from "./about-content";
import Team from "./team";
import Meeting from "./meeting";
import { memo } from "react";

const AboutUsComponent = () => {
	return (
		<fragment>
			<AboutContent />
			<Team />
			<Meeting />
		</fragment>
	);
};

export default memo(AboutUsComponent);
