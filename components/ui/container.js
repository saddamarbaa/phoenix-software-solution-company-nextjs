/** @format */

import React from "react";

const UIContainer = (props) => {
	return (
		<div style={{ width: "100%", maxWidth: "87.5rem", margin: "0 auto" }}>
			{props.children}
		</div>
	);
};

export default UIContainer;
