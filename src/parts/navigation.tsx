import {Link} from 'wouter';
import {Button} from '../components/interaction/button';
import {NavigationBar, NavigationItem} from '../components/navigation/bar';
import {createDesktopOnlyComponent, HorizontalAligner} from '../components/position/any';
import {styled} from '../style/theme';

const FixedNavigationBar = styled(NavigationBar, {
	color: '$text',

	height: '72px',

	borderBottom: '1px solid #ececec',
});

const Heading = styled('h1', {
	fontSize: '$e',
	fontWeight: '500',
});

const DesktopOnlyNavigationItem = createDesktopOnlyComponent(NavigationItem);

export default function Navigation() {
	return (
		<FixedNavigationBar>
			<NavigationItem>
				<HorizontalAligner>
					<Link to='/'>
						<Button>
							<Heading>HoJeong Go</Heading>
						</Button>
					</Link>
				</HorizontalAligner>
			</NavigationItem>
			<DesktopOnlyNavigationItem>
				<HorizontalAligner direction='center'>
					<Button hover='shade'>
						<Link to='/cases'>
              프로젝트 보기
						</Link>
					</Button>
				</HorizontalAligner>
			</DesktopOnlyNavigationItem>
			<NavigationItem>
				<HorizontalAligner direction='right'>
          right
				</HorizontalAligner>
			</NavigationItem>
		</FixedNavigationBar>
	);
}
