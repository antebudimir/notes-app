import { Fragment, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import {
	PopperArrow,
	PopperButton,
	PopperContainer,
	PopperText,
} from './Popper.style';

const Popper = () => {
	const [showPopper, setShowPopper] = useState(false),
		[arrowElement, setArrowElement] = useState(null),
		buttonRef = useRef(null),
		popperRef = useRef(null);

	const { styles, attributes } = usePopper(
		buttonRef.current,
		popperRef.current,
		{
			placement: 'top',
			modifiers: [
				{
					name: 'arrow',
					options: {
						element: arrowElement,
					},
				},
				{
					name: 'offset',
					options: {
						offset: [0, 16],
					},
				},
			],
		},
	);

	const handleButtonClick = () => {
		setShowPopper(!showPopper);
	};

	return (
		<Fragment>
			<PopperButton
				buttonType="button"
				buttonRef={buttonRef}
				handleClick={handleButtonClick}
				buttonTitle="Popper demo"
				buttonText={showPopper ? 'Close Popper' : 'Open Popper'}
			/>

			{showPopper && (
				<PopperContainer
					role="tooltip"
					ref={popperRef}
					style={styles.popper}
					{...attributes.popper}
				>
					<PopperArrow ref={setArrowElement} style={styles.arrow} />

					<PopperText>
						This is a popper demo. Add enough notes so you can see it in action.
						😉
					</PopperText>
				</PopperContainer>
			)}
		</Fragment>
	);
};

export default Popper;
