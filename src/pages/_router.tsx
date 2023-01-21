import {Route} from 'wouter';
import {BottomPusher} from '../components/position/any';
import {Footer} from '../parts/footer';
import Navigation from '../parts/navigation';
import IndexPage from './index';

export default function Router() {
	return (
		<>
			<Navigation />
			<BottomPusher>
				<main>
					<Route path='/' component={IndexPage} />
				</main>
				<Footer />
			</BottomPusher>
		</>
	);
}
