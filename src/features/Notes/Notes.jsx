import {
	NotesContainer,
	NotesCount,
	NotesHeading,
	UnorderedList,
} from './Notes.style';
import { useSelector } from 'react-redux';
import Note from 'features/Note/Note';
import Message from 'components/Elements/Message/Message';

const Notes = () => {
	const notes = useSelector((state) => state.notes);

	return notes.length > 0 ? (
		<NotesContainer>
			<NotesHeading>List of added notes</NotesHeading>

			<UnorderedList>
				{notes.map((note, index) => (
					<Note
						key={note.id}
						id={note.id}
						title={note.title}
						index={index}
						complete={note.complete}
					/>
				))}
			</UnorderedList>

			<NotesCount>{notes.length > 0 && `Notes: ${notes.length}`}</NotesCount>
		</NotesContainer>
	) : (
		<Message messageText="Don't forget - write it down." />
	);
};

export default Notes;
