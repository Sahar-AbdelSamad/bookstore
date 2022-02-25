const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_SUCCESS = 'bookStore/books/FETCH_SUCCESS';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BOOK:
      return (state.filter((book) => book.item_id !== action.id));
    case ADD_BOOK:
      return ([...state, action.payload]);
    case FETCH_SUCCESS:
      return ([...action.payload]);
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
export const fetchBooksSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});
export const fetchBooks = () => async (dispatch) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WsQJJJQ05Rg6MbRzcWLl/books');
  const bookData = await response.json();
  const books = Object.entries(bookData).map(([key, value]) => ({
    item_id: key,
    title: {
      title: value[0].title.title,
      author: value[0].title.author,
    },
    category: value[0].category,
  }));
  dispatch(fetchBooksSuccess(books));
};
export const removeBook = (id) => async (dispatch) => {
  dispatch(remove(id));
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WsQJJJQ05Rg6MbRzcWLl/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/JSON' },
  });
};
export const addBookToAPI = (payload) => async (dispatch) => {
  dispatch(addBook(payload));
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WsQJJJQ05Rg6MbRzcWLl/books', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-type': 'application/JSON' },
  });
};
