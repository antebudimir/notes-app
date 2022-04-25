import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import noteReducer from './noteSlice';

const reducers = combineReducers({
	notes: noteReducer,
});

const persistConfig = {
	key: 'notes',
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,

	devTools: process.env.NODE_ENV !== 'production',

	middleware: [thunk],
});
