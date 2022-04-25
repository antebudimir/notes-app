import { MainContainer } from './Main.style';
import PropTypes from 'prop-types';

const Main = ({ className, children }) => {
	return <MainContainer className={className}>{children}</MainContainer>;
};

Main.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
};

export default Main;
