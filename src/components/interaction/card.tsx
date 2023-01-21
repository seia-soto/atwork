import {IoGitBranch} from 'react-icons/io5';
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

const CardLink = styled('a', {
	display: 'inline-block',

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
				{
					typeof sourceLink !== 'undefined' && (
						<CardLink href={sourceLink} target='_blank' referrerPolicy='no-referrer'>
							<IoGitBranch /> 소스코드
						</CardLink>
					)
				}
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
