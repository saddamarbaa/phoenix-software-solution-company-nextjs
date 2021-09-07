/** @format */

import Hero from "./hero";
import React, { Fragment } from "react";
import AboutUsCom from "./about-us";
import Work from "./work";
import TESTIMONIAL from "./testimonial";
import Services from "./services";

const HomePageComponent = () => {
	return (
		<Fragment>
			<Hero />
			<Services />
			<AboutUsCom />
			<Work />
			<TESTIMONIAL />
		</Fragment>
	);
};

export default HomePageComponent;
