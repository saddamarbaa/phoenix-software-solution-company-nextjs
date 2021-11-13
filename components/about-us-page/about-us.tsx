/** @format */

import React, { FC, Fragment, memo } from "react";

import AboutContent from "./about-content";
import Team from "./team";
import Meeting from "./meeting";
import MainNavigation from "../layout/main-navigation";

const AboutUsComponent: FC = () => {
	return (
		<React.Fragment>
			<MainNavigation />
			<AboutContent />
			<Team />
			<Meeting />
		</React.Fragment>
	);
};

export default memo(AboutUsComponent);
