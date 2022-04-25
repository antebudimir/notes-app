import { useDispatch } from 'react-redux';
import { toggleComplete, deleteNote } from 'redux/noteSlice';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import {
	ListItem,
	Icon,
	CheckboxContainer,
	CheckboxLabel,
	CheckboxInput,
} from './Note.style';

const Note = ({ id, index, title, complete }) => {
	const dispatch = useDispatch();

	const handleDeleteNote = () => {
		dispatch(deleteNote({ id: id }));
	};

	const handleToggleNote = () => {
		dispatch(toggleComplete({ id: id, complete: !complete }));
	};

	return (
		<ListItem index={index} tabIndex="0" noteComplete={complete}>
			<CheckboxContainer title="Mark note processed">
				<CheckboxLabel htmlFor="complete">Mark note processed</CheckboxLabel>
				<CheckboxInput
					type="checkbox"
					checked={complete}
					onChange={handleToggleNote}
				></CheckboxInput>
			</CheckboxContainer>
			{title}{' '}
			<Icon tabIndex="0" onClick={handleDeleteNote}>
				<FaTimes title="Delete the note" />
			</Icon>
		</ListItem>
	);
};

Note.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	complete: PropTypes.bool.isRequired,
};

export default Note;
