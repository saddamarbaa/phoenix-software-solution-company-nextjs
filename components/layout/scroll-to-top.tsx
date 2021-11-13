/** @format */
import styled from "styled-components";
import { useEffect, useState } from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const ScrollToTopComponent: React.FC = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisible);
	}, []);

	return (
		<ScrollToTopWrapper style={{ display: visible ? "flex" : "none" }}>
			<ExpandLessIcon onClick={scrollToTop} className='icon' />
		</ScrollToTopWrapper>
	);
};

export default ScrollToTopComponent;

const ScrollToTopWrapper = styled.div`
	position: fixed;
	right: 1rem;
	bottom: 5rem;
	min-width: 3rem;
	min-height: 3rem;
	z-index: 9999999;
	background-color: var(--color-secondary);
	border: 1px solid var(--color-secondary);
	transition-duration: var(--transition-duration);
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-ms-border-radius: 50%;
	-o-border-radius: 50%;

	&:hover {
		background: rgba(0, 208, 176, 0.7);
		border-color: rgba(0, 208, 176, 0.7);
	}

	.icon {
		font-size: 2.3rem;
		cursor: pointer;
	}
`;
