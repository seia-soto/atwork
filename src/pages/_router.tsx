import {Route} from 'wouter';
import Navigation from '../parts/navigation';
import IndexPage from './index';

export default function Router() {
	return (
		<>
			<Navigation />
			<Route path='/' component={IndexPage} />
		</>
	);
}
