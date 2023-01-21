import {Link} from 'wouter';
import {Avatar} from '../components/interaction/avatar';
import {Button} from '../components/interaction/button';
import {NavigationBar, NavigationItem} from '../components/navigation/bar';
import {createDesktopOnlyComponent, HorizontalAligner} from '../components/position/any';
import {uiNavigationHeightInPexel} from '../flags';
import {styled} from '../style/theme';

const FixedNavigationBar = styled(NavigationBar, {
	position: 'fixed',
	height: uiNavigationHeightInPexel,

	padding: '0 8px',

	color: '$text',
	background: '$white',
	zIndex: 2,

	borderBottom: '1px solid #ececec',
});

const SignatureBar = styled('a', {
	height: '100%',

	display: 'inline-flex',
	alignItems: 'center',
	alignContent: 'center',
	flexDirection: 'row',
	gap: '10px',
});

const DesktopOnlyNavigationItem = createDesktopOnlyComponent(NavigationItem);
const DesktopOnlySignatureText = styled(createDesktopOnlyComponent('h1'), {
	fontSize: '$e',
	fontWeight: '500',
});

export default function Navigation() {
	return (
		<FixedNavigationBar>
			<NavigationItem>
				<Link to='/'>
					<SignatureBar>
						<Avatar shape='circle' src={new URL('../pub/assets/images/avatar.jpg', import.meta.url).toString()} />
						<DesktopOnlySignatureText>HoJeong Go</DesktopOnlySignatureText>
					</SignatureBar>
				</Link>
			</NavigationItem>
			<DesktopOnlyNavigationItem>
			</DesktopOnlyNavigationItem>
			<NavigationItem>
				<HorizontalAligner direction='right'>
					<Link to='/cases'>
						<Button href='/cases' hover='shade'>
						프로젝트 보기
						</Button>
					</Link>
				</HorizontalAligner>
			</NavigationItem>
		</FixedNavigationBar>
	);
}
