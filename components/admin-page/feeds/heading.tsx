/** @format */

import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import React from "react";
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

const Heading: React.FC = () => {
	return (
		<Wrapper>
			<HeadingLeft>
				<IconDiv>
					<SearchIcon id='icon' />
				</IconDiv>
			</HeadingLeft>

			<HeadingRight>
				<IconDiv>
					<SettingsIcon id='icon' />
				</IconDiv>

				<IconDiv2>
					<NotificationsActiveIcon id='icon' />
				</IconDiv2>
				<User>
					<IconButton>
						<Avatar
							src='/admin/user.jpg'
							style={{
								height: "2.813rem",
								width: "2.813rem",
							}}
						/>
					</IconButton>
					<Name>Otoniel Cortez </Name>
				</User>
			</HeadingRight>
		</Wrapper>
	);
};

export default Heading;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HeadingRight = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
`;

const HeadingLeft = styled(HeadingRight)``;

const IconDiv = styled.div`
	background: white;
	height: 40px;
	width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	cursor: pointer;

	#icon {
		color: #59687a;
		display: "block";
		font-size: 1.375rem;
	}
`;

const IconDiv2 = styled(IconDiv)`
	background: #e2eaf5;
`;

const Name = styled.h2`
	color: #59687a;
	font-size: 1.375rem;
`;

const User = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
