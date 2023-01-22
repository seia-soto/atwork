import {styled} from '../../style/theme';

export const Button = styled('a', {
	textAlign: 'center',
	fontSize: '$f',
	fontWeight: 600,

	color: '$text',
	background: '$white',

	padding: '12px 20px',
	border: 'none',
	borderRadius: '9999vh',

	cursor: 'pointer',

	variants: {
		hover: {
			shade: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				'&:hover': {
					background: '$selection',
				},
			},
			underline: {
				borderRadius: 0,
				borderWidth: '0.5em',

				// eslint-disable-next-line @typescript-eslint/naming-convention
				'&:hover': {
					borderBottom: '1px solid #000',
				},
			},
		},
		acent: {
			true: {
				color: '$white',
				background: '$acentActive',

				// eslint-disable-next-line @typescript-eslint/naming-convention
				'&:hover': {
					background: '$acent',
				},

				// eslint-disable-next-line @typescript-eslint/naming-convention
				'&:visited': {
					color: '$white',
				},
			},
		},
	},
});
