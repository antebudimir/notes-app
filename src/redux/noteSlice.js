import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
	name: 'notes',
	initialState: [],
	reducers: {
		addNote: (state, action) => {
			const newNote = {
				id: Date.now(),
				title: action.payload.title,
				complete: false,
			};
			state.push(newNote);
		},

		toggleComplete: (state, action) => {
			const index = state.findIndex((note) => note.id === action.payload.id);
			state[index].complete = action.payload.complete;
		},

		deleteNote: (state, action) => {
			return state.filter((note) => note.id !== action.payload.id);
		},

		rearrangeNotes: (state, action) => {
			const [rearrangedNote] = state.splice(action.payload.source, 1);
			state.splice(action.payload.destination, 0, rearrangedNote);
		},
	},
});

export const { addNote, toggleComplete, deleteNote, rearrangeNotes } =
	noteSlice.actions;

export default noteSlice.reducer;
