import {IoGitBranch} from 'react-icons/io5';
import {type Project} from '../../sources/projects';
import {styled} from '../../style/theme';

const CardBox = styled('div', {
	padding: '18px',
	borderRadius: '12px',

	boxShadow: 'rgba(100, 100, 111, 0.2) 0px 4px 8px 0px',
});

const CardHeader = styled('h3', {
	paddingBottom: '8px',

	fontSize: '$e',
	fontWeight: 500,
});

const CardExcerpt = styled('p', {
	paddingBottom: '8px',

	color: '$text',

	fontSize: '$f',
	lineHeight: '1.6em',
});

const CardLink = styled('a', {
	display: 'inline-block',

	fontSize: '$f',
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
				<CardHeader>{displayName}</CardHeader>
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
	display: 'flex',
	flexWrap: 'wrap',
	gap: '12px',

	margin: '18px',

	// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
	[`& ${CardBox}`]: {
		width: 'calc(25% - 12px)',

		// eslint-disable-next-line @typescript-eslint/naming-convention
		'@w900': {
			width: 'calc(33% - 12px)',
		},

		// eslint-disable-next-line @typescript-eslint/naming-convention
		'@w600': {
			width: 'calc(50% - 12px)',
		},

		// eslint-disable-next-line @typescript-eslint/naming-convention
		'@w400': {
			width: '100%',
		},
	},
});
