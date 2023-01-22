import {Container} from '../components/baseline/container';
import {Button} from '../components/interaction/button';
import {Card, CardBar} from '../components/interaction/card';
import {SectionDescription, SectionHeader, SectionHeading} from '../components/interaction/header';
import {Highlighter} from '../components/interaction/inline';
import {StackList, useStackList} from '../parts/stack';
import {projects} from '../sources/projects';
import {stacks, type StackOptionNames} from '../sources/stacks';
import {styled} from '../style/theme';

const ActionBar = styled('div', {
	display: 'flex',
	flexDirection: 'row',
	gap: '10px',

	marginTop: '25px',
});

export default function IndexPage() {
	const {selection, setSelection} = useStackList(stacks);

	return <>
		<Container pusher pad='both'>
			<SectionHeader>
				<SectionHeading>
					<Highlighter>웹 생태계</Highlighter>를 이해하고<br />
					<Highlighter>방향성</Highlighter>을 제시합니다.
				</SectionHeading>
				<SectionDescription>
					회사의 프로젝트에 트렌디하고 알맞은 기술을 선택하면서도 한 발자국 앞서 나가보세요.
				</SectionDescription>
				<ActionBar>
					<Button hover='shade' acent href='https://github.com/seia-soto' target='_blank'>
						GitHub 프로필 보기
					</Button>
				</ActionBar>
			</SectionHeader>
			<StackList
				selection={selection}
				setSelection={setSelection}
				options={stacks}
			/>
			<CardBar>
				{projects[selection as StackOptionNames].map((project, iter) => <Card key={iter} {...project} />)}
			</CardBar>
		</Container>
	</>;
}
