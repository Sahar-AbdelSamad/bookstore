import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const categories = ['Action', 'Science Fiction', 'Economy'];

const CreateBook = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const submitBookToStore = (e) => {
    e.preventDefault();
    if (e.target.parentNode.lastChild[0].value && e.target.parentNode.lastChild[1].value
       && e.target.parentNode.lastChild[2].value) {
      const newBook = {
        id: uuidv4(),
        title: e.target.parentNode.lastChild[0].value,
        author: e.target.parentNode.lastChild[1].value,
        category: e.target.parentNode.lastChild[2].value,
      };
      dispatch(addBook(newBook));
      e.target.parentNode.lastChild[0].value = '';
      e.target.parentNode.lastChild[1].value = '';
    }
  };
  return (
    <>
      <h2 className="add-book">Add new Book</h2>
      <form
        className="form"
        onSubmit={submitBookToStore}
      >
        <input
          type="text"
          placeholder="Book title"
          name="title"
          value={books.title}
        />
        <input
          type="text"
          placeholder="Book author"
          name="author"
          value={books.author}
        />
        <select placeholder="Category" name="category">
          {categories.map((category) => (
            <option key={uuidv4()} value={category}>{category}</option>
          ))}
        </select>
        <input type="submit" className="submit" value="Add Book" />
      </form>
    </>
  );
};

export default CreateBook;
