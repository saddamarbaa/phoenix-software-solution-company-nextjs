/** @format */

import ReactMapGL from "react-map-gl";
import styled from "styled-components";
import React, { useState } from "react";
const Map = () => {
	const [viewport, setViewport] = useState({
		latitude: 41.25716,
		longitude: -95.995102,
		zoom: 11,
		width: "100%",
		height: "100%",
	});

	return (
		<Wrapper>
			<ReactMapGL
				{...viewport}
				width='100%'
				height='100%'
				onViewportChange={(viewport) => setViewport(viewport)}
				mapStyle='mapbox://styles/saddams/ckui2fkbc4vue17ql8bt2d7d8'
				mapboxApiAccessToken='pk.eyJ1Ijoic2FkZGFtcyIsImEiOiJja3VmZ3o5a3AxdWJhMnVvMW91bTdieW53In0.aHyMyQahu3VeA6oXZR9plg'
			/>
		</Wrapper>
	);
};

export default Map;

const Wrapper = styled.div`
	height: 500px;
	position: relative;
	z-index: 2;
	margin-top: -200px;

	@media (max-width: 768px) {
		display: none;
	}
`;

/** 
 pk.eyJ1Ijoic2FkZGFtcyIsImEiOiJja3VmZ3o5a3AxdWJhMnVvMW91bTdieW53In0.aHyMyQahu3VeA6oXZR9plg
 */
