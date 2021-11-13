/** @format */

import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventNoteIcon from "@mui/icons-material/EventNote";
import FolderIcon from "@mui/icons-material/Folder";

const Grid: React.FC = () => {
	return (
		<Wrapper>
			<GridItem>
				<Top>
					<span>Long Time</span>
					<AddIcon style={{ fontSize: "1.7rem" }} />
				</Top>

				<ButtonWrapper>
					<div>
						<IconDiv>
							<AccessTimeIcon />
						</IconDiv>
						<span> PHwep-200</span>
					</div>
					<div className='border-left'>4H</div>
				</ButtonWrapper>

				<ButtonWrapper>
					<div>
						<IconDiv>
							<AccessTimeIcon />
						</IconDiv>
						<span> PHwep-205</span>
					</div>
					<div className='border-left'>3H</div>
				</ButtonWrapper>

				<ButtonWrapper>
					<div></div>
					<div>4H Reported</div>
				</ButtonWrapper>
			</GridItem>

			<GridItem>
				<Top>
					<span>Calender</span>
					<AddIcon style={{ fontSize: "1.7rem" }} />
				</Top>

				<ButtonWrapper>
					<div>
						<IconDiv>
							<EventNoteIcon />
						</IconDiv>
						<span>WordPress Training</span>
					</div>
					<div className='border-left'>01/12</div>
				</ButtonWrapper>

				<ButtonWrapper>
					<div>
						<IconDiv>
							<EventNoteIcon />
						</IconDiv>
						<span>WepFlow Training</span>
					</div>
					<div className='border-left'>01/12</div>
				</ButtonWrapper>

				<ButtonWrapper>
					<div>
						<IconDiv>
							<EventNoteIcon />
						</IconDiv>
						<span>Google Meeting</span>
					</div>
					<div className='border-left'>01/25</div>
				</ButtonWrapper>
			</GridItem>

			<GridItem>
				<Top>
					<span>Documents</span>
					<AddIcon style={{ fontSize: "1.7rem" }} />
				</Top>

				<ButtonWrapper>
					<div>
						<IconDiv>
							<FolderIcon />
						</IconDiv>
						<span>TimeSheets.docs</span>
					</div>
					<div className='border-left'>98kb</div>
				</ButtonWrapper>

				<ButtonWrapper>
					<div>
						<IconDiv>
							<FolderIcon />
						</IconDiv>
						<span>Flexus.css</span>
					</div>
					<div className='border-left'>215mb</div>
				</ButtonWrapper>

				<ButtonWrapper>
					<div>
						<IconDiv>
							<FolderIcon />
						</IconDiv>
						<span>Flexus.html</span>
					</div>
					<div className='border-left'>100mb</div>
				</ButtonWrapper>
			</GridItem>
		</Wrapper>
	);
};

export default Grid;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 3rem;
	/* flex-wrap: wrap; */
`;

const GridItem = styled.div`
	width: 28rem;
	min-width: 28rem;
	height: 21.25rem;
	background: white;
	border-radius: 8px;
	padding: 1rem;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1rem;
	font-weight: bold;
	color: #59687a;
	margin-bottom: 1.3rem;
`;

const IconDiv = styled.div`
	background: white;
	height: 35px;
	width: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 1rem;

	#icon {
		color: #59687a;
		display: "block";
		font-size: 1.2rem;
	}
`;

const ButtonWrapper = styled.div`
	background: #f0ffff;
	padding: 0.7rem;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	border: none;
	color: #59687a;
	margin-bottom: 2rem;

	div {
		display: flex;
		align-items: center;
	}

	.border-left {
		border-left: 1px solid gray;
		padding-left: 1.2rem;
		margin-right: 6px;
	}
`;
