/** @format */

import classes from "./logo.module.css";
import styled from "styled-components";
import Image from "next/image";

function Logo() {
	return (
		<Wrapper
			className={classes.logo}
			style={{
				position: "relative",
				cursor: "pointer",
			}}>
			<Image
				className='logo-img'
				src='/logo/logo.png'
				alt='PHOENIX LOGO'
				layout='fill'
				objectFit='contain'
			/>
		</Wrapper>
	);
}

export default Logo;

const Wrapper = styled.div`
	width: 6.62rem;
	height: 6rem;
	margin: 0 0.5rem;
`;
