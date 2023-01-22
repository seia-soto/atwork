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
	gap: '10px',
});

const FooterHeading = styled('h2', {
	fontSize: '$f',
	fontWeight: 600,

	margin: '8px 0',
});

const FooterDescription = styled('p', {
	color: '$text',

	fontSize: '$f',
	fontWeight: 400,

	padding: 0,
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
					<p>
						<a href='https://typed.sh' target='_blank' rel='noreferrer'>Typed.sh</a>에서 더 많은 스토리를 더 읽어보세요.
					</p>
					<Gallery posts={posts} />
					<div>
						<FooterHeading>
						Copyright {year < 2023 ? 2023 : year} HoJeong Go.
						</FooterHeading>
						<FooterDescription>
							웹 사이트 컨텐츠는 타 네트워크 사업자 망에서 호스트 중인 Typed.sh에서도 제공됩니다.
							웹 사이트에 문의 사항이 있으신 경우 seia@outlook.kr로 연락하십시오.
						</FooterDescription>
					</div>
				</FooterInner>
			</Container>
		</FooterBar>
	);
}
