import {Container} from '../components/baseline/container';
import {Card, CardBar} from '../components/interaction/card';
import {StackList, useStackList} from '../parts/stack';
import {projects} from '../sources/projects';
import {type StackOptionNames, stacks} from '../sources/stacks';

export default function IndexPage() {
	const {selection, setSelection} = useStackList(stacks);

	return <>
		<Container>
			<StackList
				selection={selection}
				setSelection={setSelection}
				options={stacks}
			/>
			<CardBar>
				{
					projects[selection as StackOptionNames].map((project, iter) => <Card key={iter} {...project} />)
				}
			</CardBar>
		</Container>
	</>;
}
