/** @format */

import styled from "styled-components";

import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { SvgIconComponent } from "@mui/icons-material";

import { SvgIconProps } from "@material-ui/core/SvgIcon";

type Props = {
	title?: string;
	isActive?: string;
	Icon?: any;
	// just for reference
	// Icon2?: (props: SvgIconProps) => JSX.Element;
};

// type SvgIconComponent = typeof SvgIcon;

const SideBarOption: React.FC<Props> = ({ title, isActive, Icon }) => {
	return (
		<Wrapper className={isActive ? "active" : ""}>
			<span>
				<Icon
					style={{
						color: isActive ? "white" : "#212122",
						display: "block",
						fontSize: "2rem",
					}}
				/>
			</span>
			<span className='title'> {title}</span>
		</Wrapper>
	);
};

export default SideBarOption;

const Wrapper = styled.li`
	display: flex;
	align-self: left;
	align-items: center;
	margin-top: 2.5rem;
	cursor: pointer;
	cursor: pointer;
	transition: 0.3s;
	padding: 0.7rem 0;
	border-radius: 5px;

	&:hover {
		background-color: rgba(220, 227, 232);
	}

	span {
		padding: 0 1rem;
	}

	.title {
		/* color: #e2eaf5; */
		color: #646e7c;
		font-family: "Poppins", sans-serif;
	}
`;

// stackoverflow reference
// https://stackoverflow.com/questions/64555625/type-for-material-ui-icons
