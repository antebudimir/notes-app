import {
	NotesContainer,
	NotesCount,
	NotesHeading,
	UnorderedList,
} from 'features/Notes/Notes.style';
import { useSelector, useDispatch } from 'react-redux';
import { rearrangeNotes } from 'redux/noteSlice';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Note from 'features/Note/Note';
import Message from 'components/Elements/Message/Message';

const Notes = () => {
	const notes = useSelector((state) => state.notes),
		dispatch = useDispatch();

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;

		dispatch(
			rearrangeNotes({
				source: result.source.index,
				destination: result.destination.index,
			}),
		);
	};

	return notes.length > 0 ? (
		<NotesContainer>
			<NotesHeading>List of added notes</NotesHeading>

			<DragDropContext onDragEnd={handleOnDragEnd}>
				<Droppable droppableId="notes">
					{(provided) => (
						<UnorderedList ref={provided.innerRef} {...provided.droppableProps}>
							{notes.map((note, index) => (
								<Note
									key={note.id}
									id={note.id}
									index={index}
									title={note.title}
									complete={note.complete}
								/>
							))}
							{provided.placeholder}
						</UnorderedList>
					)}
				</Droppable>
			</DragDropContext>

			<NotesCount>{notes.length > 0 && `Notes: ${notes.length}`}</NotesCount>
		</NotesContainer>
	) : (
		<Message messageText="Don't forget - write it down." />
	);
};

export default Notes;
