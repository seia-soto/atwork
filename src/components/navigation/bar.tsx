import {styled} from '../../style/theme';

export const NavigationBar = styled('ol', {
	width: '100%',

	display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap',
	flexBasis: 1,
	alignItems: 'center',
	alignContent: 'center',
	justifyContent: 'center',

	listStyle: 'none',
	padding: 0,
	margin: 0,
});

export const NavigationItem = styled('li', {
	height: '100%',

	flexBasis: 1,
	flexShrink: 0,
	flexGrow: 1,
});
