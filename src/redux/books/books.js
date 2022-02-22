const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      return ([...state.filter((book) => book.id !== action.id)]);
    case ADD_BOOK:
      return (
        ([...state, action.payload]));
    default:
      return state;
  }
};

export default reducer;

export const remove = (id) => ({
  type: REMOVE_BOOK,
  id,
});
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});
