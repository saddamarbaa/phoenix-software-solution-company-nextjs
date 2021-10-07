/** @format */

import styled from "styled-components";
import Image from "next/image";
import { memo } from "react";

function Logo({ isTransparent, visible }) {
	return (
		<Wrapper isTransparent={isTransparent} visible={visible}>
			<div
				className='logo'
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
			</div>
			<div>PHOENIX </div>
		</Wrapper>
	);
}

export default memo(Logo);

const Wrapper = styled.div`
	height: 6rem;
	color: white;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	font-size: var(--size-5);
	font-weight: bold;
	position: relative;
	z-index: 101;

	* {
		opacity: 0.99;
		z-index: 101;
	}

	.logo {
		width: 3.825rem;
		height: 2.237rem;
		display: flex;
		align-items: center;
		img {
			display: block;
		}
	}

	div {
		font-weight: 600;
		font-size: 24px;
		letter-spacing: -6%;
		color: ${(props) =>
			props.isTransparent && !props.visible ? `#0f0b33` : `white`};
	}
`;
