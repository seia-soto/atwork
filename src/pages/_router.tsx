import {lazy, Suspense} from 'react';
import {Route} from 'wouter';
import {BottomPusher} from '../components/position/any';
import {Footer} from '../parts/footer';
import Navigation from '../parts/navigation';

const IndexPage = lazy(async () => import('./index'));

export default function Router() {
	return (
		<>
			<Navigation />
			<BottomPusher>
				<main>
					<Suspense fallback={null}>
						<Route path='/' component={IndexPage} />
					</Suspense>
				</main>
				<Footer />
			</BottomPusher>
		</>
	);
}
