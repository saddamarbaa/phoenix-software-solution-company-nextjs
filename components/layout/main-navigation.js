/** @format */

import Link from "next/link";
import styled from "styled-components";

import Logo from "./logo";
import classes from "./main-navigation.module.css";

function MainNavigation() {
	return (
		<Header className={classes.header}>
			<Link href='/'>
				<a>
					<Logo />
				</a>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href='/posts'>Posts</Link>
					</li>
					<li>
						<Link href='/contact'>Contact</Link>
					</li>
						<li>
						<Link href='/contact'>Contact</Link>
					</li>
						<li>
						<Link href='/contact'>Contact</Link>
					</li>
						<li>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
		</Header>
	);
}

export default MainNavigation;

const Header = styled.div`
	background: var(--color-primary);
`;
