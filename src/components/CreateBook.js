import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const categories = ['Action', 'Science Fiction', 'Economy'];

const CreateBook = () => (
  <>
    <h2 className="add-book">Add new Book</h2>
    <form className="form">
      <input type="text" placeholder="Book title" name="title" />
      <select placeholder="Category" name="category">
        {categories.map((category) => (
          <option key={uuidv4()} value={category}>{category}</option>
        ))}
      </select>
      <input type="submit" className="submit" value="Add Book" />
    </form>
  </>
);
export default CreateBook;
