/** @format */

import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@material-ui/core";

import Heading from "./heading";
import Body from "./body";

const Feeds: React.FC = () => {
	return (
		<FeedWrapper>
			<Heading />
			<Body />
		</FeedWrapper>
	);
};

export default Feeds;

const FeedWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-width: 34.375rem;
	background: #f1f5fb;
	min-height: 100vh;
	padding: 2.7rem 4rem;
`;
