import {styled} from '../../style/theme';

export const Placeholder = styled('div', {
	background: '$selection',

	border: 'none',
	borderRadius: '8px',

	variants: {
		pretend: {
			heading: {
				width: '40px',
				height: '20px',
			},
		},
	},
});
