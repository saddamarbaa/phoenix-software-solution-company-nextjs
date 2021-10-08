/** @format */

import styled from "styled-components";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
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
				onViewportChange={(nextViewport) => setViewport(nextViewport)}
				mapStyle='mapbox://styles/saddams/ckufh8s0h7qjf18s0104egbh7'
				mapboxApiAccessToken='pk.eyJ1Ijoic2FkZGFtcyIsImEiOiJja3VmZ3o5a3AxdWJhMnVvMW91bTdieW53In0.aHyMyQahu3VeA6oXZR9plg'
			/>

			{/* <ReactMapGL
				{...viewport}
				onViewportChange={(nextViewport) => setViewport(nextViewport)}
				mapStyle='mapbox://styles/saddams/ckui02rvk7cwg18qjrl0jlvof'
				mapboxApiAccessToken='pk.eyJ1Ijoic2FkZGFtcyIsImEiOiJja3VmZ3o5a3AxdWJhMnVvMW91bTdieW53In0.aHyMyQahu3VeA6oXZR9plg'
			/> */}
		</Wrapper>
	);
};

export default Map;

const Wrapper = styled.div`
	height: 500px;
	background-color: red;

	/* margin-top: -200px; */

	/* @media (max-width: 768px) {
		display: none;
	} */
`;
