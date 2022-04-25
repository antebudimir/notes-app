import PropTypes from 'prop-types';
import { Text } from './Message.style';

const Message = ({ messageText }) => {
	return <Text>{messageText}</Text>;
};

Message.propTypes = {
	messageText: PropTypes.string.isRequired,
};

export default Message;
