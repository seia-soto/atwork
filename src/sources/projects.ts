import {StackOptionNames} from './stacks';

export type Project = {
	displayName: string;
	excerpt: string;
	sourceLink?: string;
	previewLink?: string;
};

export const projects: Record<StackOptionNames, Project[]> = {
	[StackOptionNames.publishing]: [
		{
			displayName: 'JJIMC',
			excerpt: 'JJIMC 웹 사이트 퍼블리싱',
			sourceLink: 'https://github.com/JJ-IMC/website',
		},
		{
			displayName: 'Next.JS기반 마크다운 블로그',
			excerpt: 'Next.JS를 기반으로 한 정적 및 동적 일관성을 가진 마크다운 블로그',
			sourceLink: 'https://github.com/typed-sh/blog',
		},
		{
			displayName: 'Snowpack용 import문 치환 플러그인',
			excerpt: 'import문을 CDN 주소로 치환시켜 마이크로 프론트엔드 개념을 적용할 수 있는 플러그인',
			sourceLink: 'https://github.com/seia-soto/snowpack-plugin-import-map',
		},
		{
			displayName: '서버-클라이언트 타입 공유 샘플',
			excerpt: 'TypeBox를 사용하여 서버-클라이언트에서 타입을 공유할 수 있도록 한 샘플 프로젝트',
			sourceLink: 'https://github.com/seia-soto/s2c-example',
		},
		{
			displayName: 'Userscript 빌드 도구',
			excerpt: 'TypeScript와 NPM 의존성을 사용하여 유저스크립트를 빌드하고 합쳐주는 빌드 도구',
			sourceLink: 'https://github.com/seia-soto/userscript-composer',
		},
		{
			displayName: 'Neatified',
			excerpt: '웹 사이트에서 방지한 복사 및 붙여넣기 기능을 다시 해제해주는 확장 플러그인',
			sourceLink: 'https://github.com/seia-soto/neatified',
		},
		{
			displayName: 'Chrome용 Discord Rich Presence',
			excerpt: 'Chrome에서 외부 라이브러리없이 Discord RPC 통신을 허용해주는 확장 플러그인',
			sourceLink: 'https://github.com/seia-soto/chrome-discord-presence',
		},
	],
	[StackOptionNames.server]: [
		{
			displayName: 'Buffertly',
			excerpt: 'Node.JS에서 비트 단위 읽기 및 수정을 쉽게 하여 쉽게 네트워크 패킷을 다룰 수 있도록 해주는 라이브러리',
			sourceLink: 'https://github.com/seia-soto/progressive/tree/master/packages/buffertly',
		},
		{
			displayName: 'Dspace',
			excerpt: 'Node.JS용 DNS 패킷 라이브러리',
			sourceLink: 'https://github.com/seia-soto/progressive/tree/master/packages/dspace',
		},
		{
			displayName: 'WOTP',
			excerpt: 'Fastify 기반의 OTP 관리용 API',
			sourceLink: 'https://github.com/seia-soto/wotp',
		},
	],
	[StackOptionNames.distribution]: [
		{
			displayName: 'DNS',
			excerpt: '쉘 스크립트와 Docker를 사용하여 매 주기마다 자동 업데이트되는 광고 및 트래커 차단 DNS 서비스 운영',
			sourceLink: 'https://github.com/seia-soto/dns',
		},
		{
			displayName: 'Outline VPN용 다중 플랫폼 배포 도구',
			excerpt: 'x86용 Outline VPN을 ARM 플랫폼에서 사용 가능할 수 있게 하는 Docker 이미지 배포 도구',
			sourceLink: 'https://github.com/seia-soto/outline-server-multiarch',
		},
	],
	[StackOptionNames.automation]: [
		{
			displayName: 'libTwitch',
			excerpt: 'Twitch 비공식 API 클라이언트',
			sourceLink: 'https://github.com/seia-soto/libtwitch',
		},
		{
			displayName: '네이버 지도 운영시간 표시기',
			excerpt: '네이버 지도에서 매장의 운영 시간을 팝업 개체에서 보여주는 유저스크립트',
			sourceLink: 'https://github.com/seia-soto/naver-map-working-time-shower',
		},
		{
			displayName: 'Ohys용 데이터 전처리기',
			excerpt: 'Ohys에서 배포하는 영상 제목을 분석하여 전처리하는 라이브러리',
			sourceLink: 'https://github.com/seia-soto/ohys-api',
		},
		{
			displayName: '일상카페 비공식 API 라이브러리',
			excerpt: '일상카페 앱에서 사용되는 API를 대상의 라이브러리',
			sourceLink: 'https://github.com/seia-soto/dailycafe-api',
		},
		{
			displayName: 'Ghost 블로그용 원본 이미지 표시기',
			excerpt: 'Ghost로 배포된 블로그에서 원본 이미지를 최적화된 이미지 대신 표시해주는 유저스크립트',
			sourceLink: 'https://github.com/seia-soto/ghost-with-original-images',
		},
		{
			displayName: 'IPTIME 공유기용 비공식 API 라이브러리',
			excerpt: 'IPTIME 공유기를 JavaScript로 자동화할 수 있는 라이브러리',
			sourceLink: 'https://github.com/seia-soto/iniptime',
		},
	],
	[StackOptionNames.reverseEngeineering]: [
		{
			displayName: 'Clubhouse — 음성 채팅 앱',
			excerpt: 'Clubhouse 음성 채팅 앱 리버스 엔지니어링',
			sourceLink: 'https://github.com/seia-soto/clubhouse-api',
		},
		{
			displayName: 'tinyapp',
			excerpt: '앱에서 웹 사이트에 추적 스크립트를 삽입하는지의 여부를 보여주는 웹 사이트',
			sourceLink: 'https://github.com/seia-soto/tinyapp',
		},
		{
			displayName: 'Pkg용 소스코드 추출 도구',
			excerpt: 'Pkg로 컴파일된 Node.JS 애플리케이션에서 소스코드를 추출하는 도구',
			sourceLink: 'https://github.com/seia-soto/snapit-pkg',
		},
		{
			displayName: 'HTTP 패킷 DPI 우회 라이브러리',
			excerpt: 'HTTP 패킷을 우회하여 통신하게 해주는 라이브러리',
			sourceLink: 'https://github.com/seia-soto/packit-over',
		},
	],
};
