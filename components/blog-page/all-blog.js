/** @format */
import styled from "styled-components";
import Image from "next/image";
import BlogGrid from "./blog-grid";

const AllBlog = () => {
	return (
		<Wrapper>
			<CustomContainer>
				<Container>
					<BlogTopContainer>
						<h2>Our Latest Blog</h2>
						<SearchContainer>
							<label htmlFor='text'> </label>
							<input
								type='text'
								id='text'
								required
								placeholder='Search'
							/>
						</SearchContainer>
					</BlogTopContainer>

					<MiddleContainer>
						<ImageContainer
							style={{
								position: "relative",
								cursor: "pointer",
							}}>
							<Image
								src='/home/home1.jpg'
								alt='Hero Image'
								layout='fill'
								objectFit='cover'
							/>
						</ImageContainer>
						<ContentSection>
							<h2>All about design thinking</h2>
							<div className='user'>
								<p className='name'>Fariz Al Faridli</p>
								<p>
									<span>Author</span>
								</p>
							</div>
							<div className='article'>
								<p>
									We create delightful digital experiences that make
									life simpler and more enjoyable. We create enterprise
									software that has the polished, snappy feel of the
									best consumer apps. From Slack to Facebook, we team
									up with marketing departments of large companies and
									startups to deliver award‑winning websites.
								</p>
							</div>

							<HiddenImageContainer>
								<Image
									src='/home/home1.jpg'
									alt='Hero Image'
									width={500}
									height={400}
									layout='responsive'
								/>
							</HiddenImageContainer>

							<CustomButton>READ MORE</CustomButton>
						</ContentSection>
					</MiddleContainer>
					<BlogGrid />
				</Container>
			</CustomContainer>
		</Wrapper>
	);
};

export default AllBlog;

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
	margin: 0 auto;
`;

const Wrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	background: #e5e5e5;
	padding: 5rem 9%;
	padding-bottom: 7rem;
	position: relative;

	@media (min-width: 768px) {
		padding: 6rem 9%;
		padding-bottom: 10rem;
	}
`;

const Container = styled.div``;

const BlogTopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;

	h2 {
		color: var(--color-primary);
		font-size: 24px;
	}
`;

const SearchContainer = styled.div`
	width: 22.438rem;

	@media (max-width: 568px) {
		width: 90%;
	}

	input {
		width: 100%;
		height: 50px;
		font: inherit;
		color: #0f0b33;
		border-radius: 4px;
		background: #c7c7d1;
		border: 1px solid #868080;
		text-align: left;
		padding: 1rem;
		transition: 0.3s;
		-webkit-transition: 0.3s;
		-moz-transition: 0.3s;
		-ms-transition: 0.3s;
		-o-transition: 0.3s;
		margin: 2rem 0;

		::placeholder {
			/* Chrome, Firefox, Opera, Safari 10.1+ */
			color: #0f0b33;
			opacity: 1; /* Firefox */
		}

		:-ms-input-placeholder {
			/* Internet Explorer 10-11 */
			color: #0f0b33;
		}

		::-ms-input-placeholder {
			/* Microsoft Edge */
			color: #0f0b33;
		}

		&:hover {
			border: 1px solid #868080;
		}
	}
`;

const MiddleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 3rem 0;
	@media (max-width: 768px) {
		flex-wrap: wrap;
		margin: 1.2rem 0;
	}
`;

const ContentSection = styled.div`
	@media (min-width: 968px) {
		min-width: 18.75rem;
	}

	width: 31.25rem;

	h2 {
		margin-bottom: 2rem;
		font-weight: 700;
		color: var(--color-primary);

		@media (min-width: 968px) {
			font-size: 3.25rem;
		}
	}

	.article {
		margin: 1rem 0;
		p {
			line-height: var(--line-height);
			color: #878599;
			@media (min-width: 968px) {
				font-size: 1.1rem;
			}
		}
	}

	.user {
		.name {
			font-size: 1rem;
			font-weight: bold;
			margin-bottom: 0.5rem;
			color: var(--color-primary);
		}
		span {
			color: #878599;
			font-size: 0.9rem;
		}
	}
`;

const CustomButton = styled.button`
	display: block;
	width: 164px;
	height: 53px;
	font: inherit;
	cursor: pointer;
	font-weight: bold;
	background-color: var(--color-secondary);
	border: 1px solid var(--color-secondary);
	padding: 0.5rem 1rem;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
	transition-duration: var(--transition-duration);
	min-width: fit-content;
	color: white;
	font-weight: bold;

	@media (max-width: 568px) {
		width: 80%;
	}

	&:hover {
		background: rgba(0, 208, 176, 0.7);
		border-color: rgba(0, 208, 176, 0.7);
	}
`;

const ImageContainer = styled.div`
	width: 45.125rem;
	max-width: 45.125rem;
	height: 32.688rem;
	min-width: 40.5rem;
	max-height: 43.5625rem;
	overflow: hidden;
	margin-right: 3rem;

	@media (max-width: 968px) {
		width: 28.125rem;
		height: 26.438rem;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const HiddenImageContainer = styled.div`
	width: 100%;
	max-height: 20rem;
	overflow: hidden;
	margin: 2rem 0;

	@media (min-width: 768px) {
		display: none;
	}

	img {
		object-fit: cover;
		display: block;
	}
`;
