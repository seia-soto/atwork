import {useEffect, useState} from 'react';
import {Container} from '../components/baseline/container';
import {createApiInterface} from '../externs/blog';
import {indexBlogContentDump} from '../sources/dumps';
import {styled} from '../style/theme';
import {Gallery} from './gallery';

const FooterBar = styled('footer', {
	background: '$offside',
});

const FooterInner = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
});

const FooterHeading = styled('h2', {
	fontSize: '$f',
	fontWeight: 600,

	margin: '8px 0',
});

export function Footer() {
	const [posts, setPosts] = useState<Array<{title: string; feature_image: string; url: string; excerpt: string}>>(indexBlogContentDump);

	useEffect(() => {
		const next = async () => {
			const api = createApiInterface();
			const posts = await api.posts.browse({
				limit: 5,
				fields: [
					'title',
					'feature_image',
					'url',
					'excerpt',
				],
			})
				.catch(_ => indexBlogContentDump);

			// @ts-expect-error Dump content type is compatible
			setPosts(posts);
		};

		void next();
	}, []);

	const year = new Date().getFullYear();

	return (
		<FooterBar>
			<Container pad='both'>
				<FooterInner>
					<FooterHeading>
						Copyright {year < 2023 ? 2023 : year} HoJeong Go.
					</FooterHeading>
					<Gallery posts={posts} />
				</FooterInner>
			</Container>
		</FooterBar>
	);
}
