import PropTypes from 'prop-types';
import { ButtonContainer } from './Button.style';

const Button = ({
	buttonType,
	buttonTitle,
	handleClick,
	className,
	buttonText,
	buttonValue,
	buttonRef,
}) => {
	return (
		<ButtonContainer
			type={buttonType}
			title={buttonTitle}
			onClick={handleClick}
			className={className}
			value={buttonValue}
			ref={buttonRef}
		>
			{buttonText}
		</ButtonContainer>
	);
};

Button.propTypes = {
	buttonType: PropTypes.string.isRequired,
	buttonTitle: PropTypes.string.isRequired,
	className: PropTypes.string,
	handleClick: PropTypes.func,
	buttonText: PropTypes.string,
	buttonValue: PropTypes.string,
	buttonRef: PropTypes.oneOfType([
		PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
	]),
};

export default Button;
