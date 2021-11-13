/** @format */

import React from "react";

type UIContainerProps = {
	children: React.ReactNode;
};

const UIContainer: React.FC<UIContainerProps> = (props: UIContainerProps) => {
	return (
		<div style={{ width: "100%", maxWidth: "87.5rem", margin: "0 auto" }}>
			{props.children}
		</div>
	);
};

export default UIContainer;
