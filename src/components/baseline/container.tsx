import {uiNavigationHeightInPixel} from '../../flags';
import {styled} from '../../style/theme';

export const Container = styled('div', {
	maxWidth: '1400px',

	margin: '0 auto',

	variants: {
		pad: {
			vertical: {
				padding: '14px 0',
			},
			horizontal: {
				padding: '0 14px',
			},
			both: {
				padding: '14px',
			},
		},
		pusher: {
			true: {
				paddingTop: uiNavigationHeightInPixel,
			},
		},
	},
});
