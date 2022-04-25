import { FormContainer } from './NewNoteForm.style';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from 'redux/noteSlice';
import InputGroup from 'components/Elements/InputGroup/InputGroup';
import Button from 'components/Elements/Button/Button';

const NewNoteForm = () => {
	const dispatch = useDispatch(),
		[input, setInput] = useState('');

	const onSubmitHandler = (e) => {
		e.preventDefault();

		dispatch(addNote({ title: input }));
		setInput('');
	};

	return (
		<FormContainer onSubmit={onSubmitHandler}>
			<InputGroup
				label="Note"
				name="note"
				type="text"
				placeholder="Write a note"
				value={input}
				setInput={setInput}
			/>

			<Button
				buttonType="submit"
				buttonTitle="Save your new note"
				buttonText="Save note"
			/>
		</FormContainer>
	);
};

export default NewNoteForm;
