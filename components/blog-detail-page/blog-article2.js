/** @format */

import styled from "styled-components";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import GridItem from "../blog-page/blog-grid-item";

function BlogArticle2() {
	return (
		<Wrapper>
			<CustomContainer>
				<BlogContent>
					<h2>What’s Next?</h2>
					<p>
						With a strong and consistent brand image, it will help in
						business. Brands will make it easier for consumers to
						recognize, remember, and recommend your brand to many people.
						Therefore, that is one of the reasons that branding is very
						important. If our brand is already well known and strong in
						our business, it will be very easy to bring in new consumers.
						It is very clear, isn&apos;t it very unfortunate if we have
						been in a business sector for a long time, but we don&apos;t
						have a strong brand or don&apos;t even have a brand at all. A
						strong brand goes hand in hand with a positive market
						impression and consumers will be happy to do business with you
						because of the reputation and consumer trust with the brand.
					</p>

					<p>
						For entrepreneurs, brands are very important for business
						continuity. Brands can be said to be the face of
						entrepreneurs&apos; business in the public, or it can also be
						said that brands are their personal identities. As a business
						person, it is very important to know and define your brand,
						not only to try to make a strong impression but make it
						possible for consumers and partners to get to know your
						company. The purpose of branding is to convey a message to the
						public and users either through marketing materials or through
						a chosen logo and name. On the other hand, the startup that
						you build needs to be known and seen by many people to open up
						opportunities for more people to know. Building a brand for a
						startup is like investing in increasing your name and placing
						your position in society as something to remember. In
						addition, the brand is also the right way to convey value to
						the community.
					</p>
					<p>
						For entrepreneurs, brands are very important for business
						continuity. Brands can be said to be the face of
						entrepreneurs&apos; business in the public, or it can also be
						said that brands are their personal identities. As a business
						person, it is very important to know and define your brand,
						not only to try to make a strong impression but make it
						possible for consumers and partners to get to know your
						company. The purpose of branding is to convey a message to the
						public and users either through marketing materials or through
						a chosen logo and name. On the other hand, the startup that
						you build needs to be known and seen by many people to open up
						opportunities for more people to know. Building a brand for a
						startup is like investing in increasing your name and placing
						your position in society as something to remember. In
						addition, the brand is also the right way to convey value to
						the community.
					</p>
				</BlogContent>
				<RelatedArticle>
					<h2>OTHER BLOG</h2>
					<div className='head-content'>
						<h1>Explore Other Article</h1>
						<div className='icons-arrow'>
							<p
								style={{
									color: "#00d0b0",
									fontSize: "1.3rem",
								}}>
								View All
							</p>

							<p>
								<ArrowForwardIcon
									style={{
										marginLeft: "1rem",
										color: "#00d0b0",
										fontSize: "1.8rem",
									}}
								/>
							</p>
						</div>
					</div>
				</RelatedArticle>

				<GridWrapper>
					<GridItem
						src='/home/work1.jpg'
						title='Technology never dies'
						name='Fariz Al Faridli'
						authorImageSrc='/blog/auhor1.png'
					/>
					<GridItem
						src='/home/work1.jpg'
						title='Robots will replace humans'
						name='Fariz Al Faridli'
						authorImageSrc='/blog/auhor1.png'
					/>

					<GridItem
						src='/home/work1.jpg'
						title='VR is the latest technology'
						name='Fariz Al Faridli'
						authorImageSrc='/blog/auhor1.png'
					/>
				</GridWrapper>
			</CustomContainer>
		</Wrapper>
	);
}

export default BlogArticle2;

const Wrapper = styled.div`
	min-height: 90vh;
	background: #e5e5e5;
	padding: 5rem 9%;
	position: relative;

	@media (min-width: 768px) {
		padding: 8rem 9% !important;
	}

	@media (min-width: 1200px) {
		padding-bottom: 10rem !important;
	}
`;

const CustomContainer = styled.div`
	width: 100%;
	max-width: var(--max-width);
	overflow: hidden;
	margin: 0 auto;
	position: relative;
`;

const BlogContent = styled.div`
	max-width: 927px;
	margin: 0 auto;

	h2 {
		font-style: normal;
		font-weight: bold;
		font-size: 1.7rem;
		line-height: 150%;
		color: var(--color-primary);
		margin-bottom: 2rem;

		@media (max-width: 768px) {
			font-size: 1.4rem;
		}
	}

	p {
		margin-bottom: 2rem;
		line-height: var(--line-height);
		color: #878599;
		@media (min-width: 768px) {
			font-size: 1.1rem;
		}
	}
`;

const RelatedArticle = styled(BlogContent)`
	margin-top: 5rem;

	.head-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	h2 {
		font-style: normal;
		font-weight: bold;
		font-size: 1rem;
		color: var(--color-secondary);
	}

	h1 {
		color: var(--color-primary);
		font-style: normal;
		font-weight: bold;
		font-size: 31.891px;
		line-height: 150%;

		@media (max-width: 768px) {
			font-size: 1.4rem;
		}
	}

	.icons-arrow {
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-width: 150px;
		color: var(--color-secondary);

		@media (max-width: 768px) {
			display: none;
		}
	}
`;

const GridWrapper = styled.div`
	width: 100%;
	max-width: var(--max-width1250);
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	row-gap: 3.75rem;
	margin-top: 6rem;
	row-gap: 3.75rem;
	column-gap: 1rem;
`;
