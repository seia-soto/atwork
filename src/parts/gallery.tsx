import {uiGalleryItemDescriptionLength} from '../flags';
import {styled} from '../style/theme';

const GalleryImage = styled('img', {
	width: '100%',
	height: '165px',
	objectFit: 'cover',

	borderRadius: '8px',
	boxShadow: 'rgba(100, 100, 111, 0.2) 0px 4px 8px 0px',
});

const GalleryInner = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '12px',

	width: '100%',
	padding: '14px',
});

const GalleryHeading = styled('h2', {
	width: '100%',

	fontSize: '$e',
	fontWeight: 500,
	color: '$black',
});

const GalleryDescription = styled('p', {
	color: '$text',
});

const GalleryBar = styled('div', {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
	gap: '20px',
});

export function Gallery({posts}: {
	posts: Array<{title: string; feature_image: string; url: string; excerpt: string}>;
}) {
	return (
		<GalleryBar>
			{
				posts.map((post, iter) => {
					if (post.excerpt.length > uiGalleryItemDescriptionLength) {
						const excerptBeforeDot = post.excerpt.split('.')[0];

						if (excerptBeforeDot.length > uiGalleryItemDescriptionLength) {
							post.excerpt = post.excerpt.slice(0, uiGalleryItemDescriptionLength - 3) + '...';
						} else {
							post.excerpt = excerptBeforeDot + '.';
						}
					}

					return (
						<article key={iter}>
							<GalleryImage src={post.feature_image} />
							<GalleryInner>
								<GalleryHeading>
									<a href={post.url} target='_blank' referrerPolicy='no-referrer-when-downgrade' rel='noreferrer'>{post.title}</a>
								</GalleryHeading>
								<GalleryDescription>{post.excerpt}</GalleryDescription>
							</GalleryInner>
						</article>
					);
				})
			}
		</GalleryBar>
	);
}
