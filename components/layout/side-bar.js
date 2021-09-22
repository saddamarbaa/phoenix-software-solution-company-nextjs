/** @format */

import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Link from "next/link";
import ReactDOM from "react-dom";

import BackDrop from "../ui/backdrop";

const SideBar = ({ burgerMenuStatus, SetBurgerMenuStatus }) => {
	// Portal
	return (
		<BackDrop>
			{ReactDOM.createPortal(
				<ModalOverlay
					burgerMenuStatus={burgerMenuStatus}
					onClick={() => {
						SetBurgerMenuStatus(false);
					}}>
					<IconButton style={{ marginLeft: "-1rem" }}>
						<CloseIcon
							style={{ color: "#00d0b0" }}
							onClick={() => {
								SetBurgerMenuStatus(false);
							}}
						/>
					</IconButton>
					<ul>
						<li
							onClick={() => {
								SetBurgerMenuStatus(false);
							}}>
							<Link href='/'>Home</Link>
						</li>
						<li
							onClick={() => {
								SetBurgerMenuStatus(false);
							}}>
							<Link href='/work'>Work</Link>
						</li>
						<li
							onClick={() => {
								SetBurgerMenuStatus(false);
							}}>
							<Link href='/services'>Services</Link>
						</li>
						<li
							onClick={() => {
								SetBurgerMenuStatus(false);
							}}>
							<Link href='/blog'>Blog</Link>
						</li>
						<li
							onClick={() => {
								SetBurgerMenuStatus(false);
							}}>
							<Link href='/about-us'>About us</Link>
						</li>
						<li
							onClick={() => {
								SetBurgerMenuStatus(false);
							}}>
							<Link href='/contact'>Contact us</Link>
						</li>
					</ul>
				</ModalOverlay>,
				document.getElementById("modal--overlay--root"),
			)}
		</BackDrop>
	);
};

export default SideBar;

const ModalOverlay = styled.div`
	transform: ${(props) =>
		props.burgerMenuStatus ? "translateX(0)" : "translateX(100%)"};
	z-index: 99999;
	position: fixed;
	top: 0;
	right: 0;
	min-height: 100vh;
	min-width: 15.75rem;
	width: 15.75rem;
	padding: 1.2rem;
	background-color: #f8fbfe;
	border-radius: 6px;
	transition: transform var(--transition-duration);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	-webkit-transition: transform var(--transition-duration);
	-moz-transition: transform var(--transition-duration);
	-ms-transition: transform var(--transition-duration);
	-o-transition: transform var(--transition-duration);
	-webkit-border-radius: 6px;
	-moz-border-radius: 6px;
	-ms-border-radius: 6px;
	-o-border-radius: 6px;
	li {
		list-style-type: none;
		padding: 1rem 0;
		border-bottom: 1px solid var(--color-secondary);
	}
	a {
		color: black;
		font-size: 1.1;
		color: black;
		cursor: pointer;
	}
`;
