import PropTypes from 'prop-types';
import { HeaderContainer, HeaderTitle, HeaderLogo } from './Header.style';
import logo from 'assets/images/logo.png';

const Header = ({ heading }) => {
	return (
		<HeaderContainer>
			<HeaderTitle>{heading}</HeaderTitle>
			<HeaderLogo imageSource={logo} imageAlt="My notes logo" />
		</HeaderContainer>
	);
};

Header.defaultProps = {
	heading: 'myNotes',
};

Header.propTypes = {
	heading: PropTypes.string.isRequired,
};

export default Header;
