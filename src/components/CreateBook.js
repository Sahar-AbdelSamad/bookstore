import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBookToAPI } from '../redux/books/books';

const categories = ['Action', 'Science Fiction', 'Economy'];

const CreateBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title && category) {
      const newBook = {
        item_id: uuidv4(),
        title,
        category,
      };
      dispatch(addBookToAPI(newBook));
      setTitle('');
      setCategory('');
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select placeholder="Category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>Choose Category</option>
          {categories.sort().map((categ) => (
            <option key={uuidv4()} value={categ}>
              {categ}
            </option>
          ))}
        </select>
        <input type="submit" className="submit" value="Add Book" />
      </form>
    </>
  );
};

export default CreateBook;
