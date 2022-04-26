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
} from 'features/Note/Note.style';
import { Draggable } from 'react-beautiful-dnd';

const Note = ({ id, title, complete, index }) => {
	const dispatch = useDispatch();

	const handleDeleteNote = () => {
		dispatch(deleteNote({ id: id }));
	};

	const handleToggleNote = () => {
		dispatch(toggleComplete({ id: id, complete: !complete }));
	};

	return (
		<Draggable draggableId={String(id)} index={index}>
			{(provided) => (
				<ListItem
					key={id}
					tabIndex="0"
					noteComplete={complete}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<CheckboxContainer title="Mark note processed">
						<CheckboxLabel htmlFor="complete">
							Mark note processed
						</CheckboxLabel>
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
			)}
		</Draggable>
	);
};

Note.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	complete: PropTypes.bool.isRequired,
	index: PropTypes.number.isRequired,
};

export default Note;
