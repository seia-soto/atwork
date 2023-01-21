import {writeFile} from 'fs/promises';
import path from 'path';
import {createApiInterface} from '../src/externs/blog.js';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const target = path.join(import.meta.url.split(':/')[1], '../../src/sources/dumps.ts');
const header = '/* eslint-disable */';

const api = createApiInterface();

(async () => {
	const response = await api.posts.browse({
		limit: 7,
		fields: [
			'title',
			'feature_image',
			'url',
			'excerpt',
		],
	});

	await writeFile(target, `${header}
export const indexBlogContentDump = ${JSON.stringify(response)}`);
})();
