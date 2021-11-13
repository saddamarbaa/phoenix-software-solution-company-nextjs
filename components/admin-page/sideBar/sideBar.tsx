/** @format */

import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import NoteIcon from "@mui/icons-material/Note";
import FolderIcon from "@mui/icons-material/Folder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import React from "react";

import Option from "./sideBarOption";

const SideBar: React.FC = () => {
	return (
		<SideBarWrapper>
			<div id='fixed-position'>
				<Link href='/'>
					<a>
						<ImageDiv
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Image
								src='/admin/logo.png'
								alt='Picture of the logo'
								layout='fill'
								objectFit='contain'
							/>
						</ImageDiv>
					</a>
				</Link>
				<div>
					<ul>
						<Option Icon={HomeIcon} title='Home' isActive='active' />
						<Option Icon={PersonIcon} title='Client' />
						<Option Icon={PeopleAltIcon} title='Projects Teams' />
						<Option Icon={AccessTimeIcon} title='Time Tracking ' />
					</ul>
					<ul>
						<Option Icon={NoteIcon} title='Notes ' />
						<Option Icon={FolderIcon} title='Documents ' />
					</ul>
				</div>
			</div>
		</SideBarWrapper>
	);
};

export default SideBar;

const SideBarWrapper = styled.div`
	min-height: 100%;
	background: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 26rem;
	min-width: 23rem;

	#fixed-position {
		position: fixed;
		max-width: 26rem;
		min-width: 23rem;
		padding: 2rem 4rem;
	}

	.active {
		background: #212122;
		color: white;
		padding: 0.7rem 0;
		border-radius: 5px;
	}

	.active:hover {
		background: rgba(33, 33, 34, 0.9);
		transition: 0.3s;
	}

	.active .title {
		color: white;
	}

	ul {
		padding: 2.5rem 0;
	}

	ul > li:first-child {
		margin-top: 0;
	}

	ul + ul {
		border-top: 1px solid #cbcbcd;
	}
`;

const ImageDiv = styled.div`
	width: 170px;
	height: 61px;
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
	img {
		display: block;
	}
`;
