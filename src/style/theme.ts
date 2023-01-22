import {createStitches} from '@stitches/react';

export const {styled, css} = createStitches({
	media: {
		w1400: '(max-width: 1400px)',
		w900: '(max-width: 900px)',
		w600: '(max-width: 600px)',
		w400: '(max-width: 400px)',
	},
	theme: {
		colors: {
			white: '#fff',
			whiteExplicit: '#fff',
			black: '#000',
			blackExplicit: '#000',
			text: '#6a6a6a',
			textActive: '#000',
			acent: '#b98eff',
			acentActive: '#651ed9',
			selection: '#eaeaea',
			offside: '#eaeaea',
		},
		space: {},
		fontSizes: {
			a: '44px',
			b: '34px',
			c: '26px',
			d: '20px',
			e: '16px',
			f: '14px',
		},
		fonts: {},
		fontWeights: {},
		lineHeights: {},
		letterSpacings: {},
		sizes: {},
		borderWidths: {},
		borderStyles: {},
		radii: {},
		shadows: {},
		zIndices: {},
		transitions: {},
	},
});
