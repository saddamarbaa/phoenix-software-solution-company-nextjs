/** @format */
import styled from "styled-components";
import React from "react";

import Grid from "./grid";
import Calendar from "../../calendar/calendar";

const Body: React.FC = () => {
	return (
		<Wrapper>
			<Greeting>
				<h3>Good morning, Otoniel</h3>
				<p>Here what&apos;s happening in your VL account today!</p>
			</Greeting>

			<Grid />

			{/* <Calendar /> */}
		</Wrapper>
	);
};

export default Body;

const Wrapper = styled.div`
	margin: 2rem 0;
`;

const Greeting = styled.div`
	color: #59687a;
	margin: 2.2rem 0;
`;
