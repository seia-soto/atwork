import {type PostsOrPages} from '@tryghost/content-api';
import {useEffect, useState} from 'react';
import {Container} from '../components/baseline/container';
import {HorizontalAligner} from '../components/position/any';
import {createApiInterface} from '../externs/blog';
import {indexBlogContentDump} from '../sources/dumps';
import {styled} from '../style/theme';

const featuredItemHeight = '400px';

const GalleryItemBox = styled(HorizontalAligner, {
	alignContent: 'flex-end',
	alignItems: 'flex-end',
});

const GalleryPlaceholder = styled('div', {
	background: '$selection',

	borderRadius: '8px',

	width: '100%',
	height: featuredItemHeight,
});

const GalleryImage = styled('img', {
	position: 'absolute',
	top: 0,
	left: 0,

	width: '100%',
	height: featuredItemHeight,
	objectFit: 'cover',

	zIndex: -1,

	transition: 'ease transform 0.28s',
});

const GalleryHeader = styled('h2', {
	borderRadius: '8px',
});

const GalleryBox = styled('div', {
	position: 'relative',

	height: featuredItemHeight,
	padding: '32px',
	borderRadius: '8px',

	color: '$selection',
	background: 'linear-gradient(to top, rgba(0,0,0,.88), transparent)',

	overflow: 'hidden',

	// eslint-disable-next-line @typescript-eslint/naming-convention
	'&:hover': {
		// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
		[`& ${GalleryImage}`]: {
			transform: 'scale(1.05)',
			transition: 'ease transform 1s',
		},
	},
});

const GalleryBar = styled('div', {
	padding: '20px',

	display: 'flex',
	flexDirection: 'row',
	flexBasis: 1,
	flexGrow: 1,
	flexShrink: 0,
	flexWrap: 'wrap',
	justifyContent: 'flex-start',
	alignContent: 'flex-start',
	alignItems: 'center',
	gap: '20px',

	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
	[`& ${GalleryBox}, ${GalleryPlaceholder}`]: {
		width: 'calc(25% - 20px)',

		// eslint-disable-next-line @typescript-eslint/naming-convention
		'@w900': {
			width: 'calc(50% - 10px)',
		},

		// eslint-disable-next-line @typescript-eslint/naming-convention
		'@w600': {
			width: '100%',
		},
	},

	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
	[`& ${GalleryBox}[data-featured-item="true"], ${GalleryPlaceholder}[data-featured-item="true"]`]: {
		width: 'calc(50% - 20px)',

		// eslint-disable-next-line @typescript-eslint/naming-convention
		'@w900': {
			width: '100%',
		},
	},
});

const isThisPostFeatured = (n: number) => (n % 3) === (n / 3) % 3;

export default function IndexPage() {
	const [posts, setPosts] = useState<PostsOrPages>();

	useEffect(() => {
		const next = async () => {
			const api = createApiInterface();
			const posts = await api.posts.browse({
				limit: 7,
				fields: [
					'title',
					'feature_image',
					'url',
					'reading_time',
				],
			})
				.catch(_ => indexBlogContentDump);

			// @ts-expect-error Dump content type is compatible
			setPosts(posts);
		};

		void next();
	}, []);

	if (!posts) {
		return <>
			<Container pusher>
				<GalleryBar>
					{
						(new Array(8).fill(0)).map((_, iter) => {
							const shouldThisPostFeatured = isThisPostFeatured(iter);

							return <GalleryPlaceholder key={iter} data-featured-item={shouldThisPostFeatured} />;
						})
					}
				</GalleryBar>
			</Container>
		</>;
	}

	return <>
		<Container pusher>
			<GalleryBar>
				{
					posts.map((post, iter) => {
						const shouldThisPostFeatured = isThisPostFeatured(iter);

						return (
							<GalleryBox key={iter} data-featured-item={shouldThisPostFeatured}>
								<GalleryImage src={post.feature_image!} />
								<GalleryItemBox>
									<GalleryHeader>
										<a href={post.url} target='_blank' referrerPolicy='no-referrer-when-downgrade' rel='noreferrer'>{post.title}</a>
									</GalleryHeader>
								</GalleryItemBox>
							</GalleryBox>
						);
					})
				}
				<GalleryBox data-featured-item={posts.length < 6}>
					<GalleryItemBox>
						<GalleryHeader>
							<a href='https://typed.sh' target='_blank' referrerPolicy='no-referrer-when-downgrade' rel='noreferrer'>Typed.sh에서 더 보기</a>
						</GalleryHeader>
					</GalleryItemBox>
				</GalleryBox>
			</GalleryBar>
		</Container>
	</>;
}
