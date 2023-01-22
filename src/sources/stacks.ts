import {IoCog, IoFileTrayFull, IoHammer, IoPaperPlane, IoPrism} from 'react-icons/io5';
import {type StackListEntry} from '../parts/stack';

export enum StackOptionNames {
	publishing = '프론트엔드',
	server = '서버',
	distribution = '인프라 및 배포',
	automation = '자동화',
	reverseEngeineering = '리버스 엔지니어링',
}

export const stacks: StackListEntry[] = [
	{
		displayName: StackOptionNames.publishing,
		icon: IoPrism,
	},
	{
		displayName: StackOptionNames.server,
		icon: IoFileTrayFull,
	},
	{
		displayName: StackOptionNames.distribution,
		icon: IoPaperPlane,
	},
	{
		displayName: StackOptionNames.automation,
		icon: IoCog,
	},
	{
		displayName: StackOptionNames.reverseEngeineering,
		icon: IoHammer,
	},
];
