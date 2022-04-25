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
	},
});

export const { addNote, toggleComplete, deleteNote } = noteSlice.actions;

export default noteSlice.reducer;
