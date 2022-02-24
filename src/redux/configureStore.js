import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import booksReducer, { fetchBooks } from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
store.dispatch(fetchBooks());
export default store;
