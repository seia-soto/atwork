import {styled} from '../../style/theme';

export const HorizontalAligner = styled('div', {
	width: '100%',
	height: '100%',

	display: 'flex',
	alignItems: 'center',
	alignContent: 'center',

	variants: {
		direction: {
			center: {
				justifyContent: 'center',
			},
			right: {
				justifyContent: 'flex-end',
			},
		},
	},
});

export const IconContainer = styled(HorizontalAligner, {
	width: '100%',
	height: '100%',

	fontSize: '$d',

	margin: '16px 0',
});

export const BottomPusher = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	alignContent: 'space-between',

	width: '100%',
	minHeight: '100vh',

	'& > main': {
		minHeight: '100vh',
	},
});

export const createDesktopOnlyComponent = <T extends Parameters<typeof styled>[0]>(component: T) => styled(component, {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	'@w600': {
		display: 'none',
	},
});
