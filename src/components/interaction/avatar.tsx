import {uiNavigationAvatarScale, uiNavigationHeight} from '../../flags';
import {styled} from '../../style/theme';

export const Avatar = styled('img', {
	height: `${uiNavigationHeight * uiNavigationAvatarScale}px`,

	variants: {
		shape: {
			circle: {
				borderRadius: '50%',
			},
		},
	},
});
