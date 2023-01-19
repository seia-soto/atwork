import {useEffect, useRef, useState} from 'react';
import {type IconType} from 'react-icons';
import {IoArrowBack, IoArrowForward} from 'react-icons/io5';
import {Button} from '../components/interaction/button';
import {ListBar, ListItem} from '../components/navigation/list';
import {HorizontalAligner, IconContainer} from '../components/position/any';
import {styled} from '../style/theme';

const StackListRoot = styled('div', {
	position: 'relative',
});

const StackListBar = styled(ListBar, {
	margin: '0 8px',
});

const StackListItem = styled(ListItem, {
	width: '80px',

	paddingTop: 0,
	padding: '8px',

	fontSize: '$f',
	textAlign: 'center',

	cursor: 'pointer',

	variants: {
		active: {
			true: {
				color: '$acentActive',
			},
		},
	},

	transition: 'ease color 0.4s',

	// eslint-disable-next-line @typescript-eslint/naming-convention
	'&:active': {
		transition: 'ease color 0s',

		color: '$acent',
	},
});

const StackListScrollableButton = styled(Button, {
	color: '$black',
	fontSize: '$e',
	boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 3px 0px',

	position: 'absolute',
	padding: '8px',
	top: '25%',

	variants: {
		direction: {
			left: {
				left: '8px',
			},
			right: {
				right: '8px',
			},
		},
	},
});

export type StackListEntry = {
	displayName: string;
	icon: IconType;
};

export type StackListIngridents = {
	options: StackListEntry[];
	selection: string;
	setSelection: React.Dispatch<React.SetStateAction<string>>;
};

export const useStackList = (options: StackListEntry[]) => {
	const [selection, setSelection] = useState(options[0].displayName);

	return {
		selection,
		setSelection,
	};
};

export function StackList({
	options,
	selection,
	setSelection,
}: StackListIngridents) {
	const listBarRef = useRef<HTMLOListElement>();
	const [scrollAvailability, setScrollAvailability] = useState({left: false, right: false});
	const [scrollSize, setScrollSize] = useState(window.screen.availWidth);

	const scroll = (x: number) => {
		const target: HTMLOListElement = listBarRef.current!;

		if (!target) {
			throw new Error('Target element to handle scroll not found!');
		}

		target.scroll(target.scrollLeft + x, 0);
	};

	useEffect(() => {
		const target: HTMLOListElement = listBarRef.current!;

		if (!target) {
			return;
		}

		const calculateScrollable = () => {
			const isLeftScrollable = target.scrollLeft > 0;
			const isRightScrollable = target.offsetWidth + target.scrollLeft < target.scrollWidth;

			setScrollAvailability({
				left: isLeftScrollable,
				right: isRightScrollable,
			});
			setScrollSize(window.screen.availWidth);
		};

		calculateScrollable();

		target.addEventListener('scroll', calculateScrollable);
		window.addEventListener('resize', calculateScrollable);

		return () => {
			target.removeEventListener('scroll', calculateScrollable);
			window.removeEventListener('resize', calculateScrollable);
		};
	}, [listBarRef]);

	return <StackListRoot>
		<StackListBar
			// @ts-expect-error It's actual OList reference
			ref={listBarRef}
		>
			{
				scrollAvailability.left && (
					<StackListScrollableButton
						direction='left'
						onClick={() => {
							scroll(-scrollSize);
						}}
					>
						<HorizontalAligner direction='center'>
							<IoArrowBack />
						</HorizontalAligner>
					</StackListScrollableButton>
				)
			}
			{
				options.map(option => {
					const Icon = option.icon;

					return (
						<StackListItem
							key={option.displayName}
							onClick={() => {
								setSelection(option.displayName);
							}}
							active={option.displayName === selection}
						>
							<IconContainer direction='center'>
								<Icon />
							</IconContainer>
							{option.displayName}
						</StackListItem>
					);
				})
			}
			{
				scrollAvailability.right && (
					<StackListScrollableButton
						direction='right'
						onClick={() => {
							scroll(scrollSize);
						}}
					>
						<HorizontalAligner direction='center'>
							<IoArrowForward />
						</HorizontalAligner>
					</StackListScrollableButton>
				)
			}
		</StackListBar>
	</StackListRoot>;
}
