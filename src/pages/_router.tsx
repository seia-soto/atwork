import {Route} from 'wouter';
import Navigation from '../parts/navigation';
import CasesPage from './cases';
import IndexPage from './index';

export default function Router() {
	return (
		<>
			<Navigation />
			<Route path='/' component={IndexPage} />
			<Route path='/cases' component={CasesPage} />
		</>
	);
}
