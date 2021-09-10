/** @format */

import Hero from "./hero";
import React from "react";
import AboutUsCom from "./about-us";
import Work from "./work";
import TESTIMONIAL from "./testimonial";
import Services from "./services";

const HomePageComponent = () => {
	return (
		<React.Fragment>
			<Hero />
			<Services />
			<AboutUsCom />
			<Work />
			<TESTIMONIAL />
		</React.Fragment>
	);
};

export default HomePageComponent;
