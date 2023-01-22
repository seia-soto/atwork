import {IoEnterOutline, IoGitBranch} from 'react-icons/io5';
import {type Project} from '../../sources/projects';
import {styled} from '../../style/theme';

const CardBox = styled('div', {
	padding: '18px',
	borderRadius: '12px',

	boxShadow: 'rgba(100, 100, 111, 0.2) 0px 4px 8px 0px',
});

const CardHeading = styled('h3', {
	paddingBottom: '8px',
	margin: 0,

	fontSize: '$e',
	fontWeight: 500,
});

const CardExcerpt = styled('p', {
	paddingBottom: '8px',
	margin: 0,

	color: '$text',

	fontSize: '$f',
	lineHeight: '1.6em',
});

const CardLinkBar = styled('ul', {
	display: 'flex',
	flexDirection: 'column',
	gap: '5px',

	padding: 0,
	margin: 0,
	listStyle: 'none',

	'& > li': {
		padding: 0,
	},
});

const CardLink = styled('a', {
	display: 'block',

	color: '$acentActive',
	fontSize: '$f',

	// eslint-disable-next-line @typescript-eslint/naming-convention
	'&:visited': {
		color: '$acent',
	},
});

export function Card({
	displayName,
	excerpt,
	sourceLink,
	previewLink,
}: Project) {
	return (
		<>
			<CardBox>
				<CardHeading>{displayName}</CardHeading>
				<CardExcerpt>
					{excerpt}
				</CardExcerpt>
				<CardLinkBar>
					{
						typeof sourceLink !== 'undefined' && (
							<li>
								<CardLink href={sourceLink} target='_blank' referrerPolicy='no-referrer'>
									<IoGitBranch /> 소스코드
								</CardLink>
							</li>
						)
					}
					{
						typeof previewLink !== 'undefined' && (
							<li>
								<CardLink href={previewLink} target='_blank' referrerPolicy='no-referrer'>
									<IoEnterOutline /> 미리보기
								</CardLink>
							</li>
						)
					}
				</CardLinkBar>
			</CardBox>
		</>
	);
}

export const CardBar = styled('div', {
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
	gap: '12px',

	margin: '18px 0',
});
