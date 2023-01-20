import GhostContentApi from '@tryghost/content-api';

export const createApiInterface = () => new GhostContentApi({
	url: 'https://typed.sh',
	key: '1112f99335d48db06114625b6c',
	version: 'v5.0',
});
