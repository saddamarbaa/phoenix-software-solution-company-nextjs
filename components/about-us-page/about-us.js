/** @format */

import React, { fragment, memo } from "react";

import AboutContent from "./about-content";
import Team from "./team";
import Meeting from "./meeting";
import MainNavigation from "../layout/main-navigation";

const AboutUsComponent = () => {
	return (
		<fragment>
			<MainNavigation />
			<AboutContent />
			<Team />
			<Meeting />
		</fragment>
	);
};

export default memo(AboutUsComponent);
