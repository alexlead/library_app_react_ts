import { createStore, combineReducers } from 'redux'
import bookReducer from './book/bookReducer';

const store = createStore(combineReducers({
    book: bookReducer
}));

export default store;

export type RootState = ReturnType<typeof store.getState>