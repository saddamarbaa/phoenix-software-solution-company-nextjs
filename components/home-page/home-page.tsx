/** @format */

import React,{FC} from "react";

import Hero from "./hero";
import AboutUsCom from "./about-us";
import Work from "./work";
import TESTIMONIAL from "./testimonial";
import Services from "./services";
import MainNavigation from "../layout/main-navigation";

const HomePageComponent:FC = () => {
	return (
		<React.Fragment>
			<MainNavigation />
			<Hero />
			<Services />
			<AboutUsCom />
			<Work />
			<TESTIMONIAL />
		</React.Fragment>
	);
};

export default HomePageComponent;
