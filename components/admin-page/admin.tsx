/** @format */

import styled from "styled-components";
import Feeds from "./feeds/feeds";
import SideBar from "./sideBar/sideBar";

const Admin = () => {
	return (
		<AdminComponentWrapper>
			<AdminInnerWrapper>
				<SideBar />
				<Feeds />
			</AdminInnerWrapper>
		</AdminComponentWrapper>
	);
};

export default Admin;

const AdminComponentWrapper = styled.div`
	min-height: 100vh;
	width: 100%;
	font-family: "Poppins", "Roboto", sans-serif;
	background: #f1f5fb;
`;

const AdminInnerWrapper = styled.div`
	display: flex;
	flex-direction: row;
	min-height: 100%;
	align-items: stretch;
	max-width: 125rem;
	overflow: hidden;
	/* margin: 0 auto; */
`;
