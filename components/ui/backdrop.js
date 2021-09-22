/** @format */
import React from "react";
import styled from "styled-components";

import ReactDOM from "react-dom";

const BackDrop = (props) => {
	return ReactDOM.createPortal(
		<BackdropWrapper>{props.children}</BackdropWrapper>,
		document.getElementById("backdrop--root"),
	);
};

export default BackDrop;

const BackdropWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 200;
	background: rgba(0, 0, 0, 0.75);
`;
