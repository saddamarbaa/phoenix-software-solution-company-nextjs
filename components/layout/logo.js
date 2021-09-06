/** @format */

import styled from "styled-components";
import Image from "next/image";

function Logo() {
	return (
		<Wrapper>
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

export default Logo;

const Wrapper = styled.div`
	height: 6rem;
	color: white;
	display: flex;
	align-items: center;
	text-transform: uppercase;
	font-size: var(--size-5);
	font-weight: bold;

	.logo {
		width: 6.62rem;
		height: 6rem;
		display: flex;
		align-items: center;
		@media (max-width: 568px) {
			width: 5rem;
			height: 6rem;
			@media (max-width: 300px) {
				display: none;
			}
		}
		img {
			display: block;
		}
	}
`;
