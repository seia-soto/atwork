import {styled} from '../../style/theme';

export const ListBar = styled('ol', {
	maxWidth: '100%',

	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap',
	flexBasis: 1,
	flexShrink: 0,
	alignItems: 'flex-start',
	alignContent: 'center',
	justifyContent: 'flex-start',
	gap: '4px',

	listStyle: 'none',
	padding: 0,
	margin: 0,

	overflow: 'scroll',
	scrollBehavior: 'smooth',

	'&::-webkit-scrollbar': {
		width: 0,
		height: 0,
		background: 'transparent',
	},

	scrollbarWidth: 'none',
});

export const ListItem = styled('li', {
	height: '100%',

	flexShrink: 0,
});
