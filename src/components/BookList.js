import '../assets/BookList.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import CreateBook from './CreateBook';
import { fetchBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  useEffect(() => {
    fetchBooks();
  }, [books]);

  return (
    <div className="book-list">
      <ul className="book">
        {books.map((book) => (
          <Book
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            category={book.category}
          />
        ))}
      </ul>
      <hr />
      <CreateBook />
    </div>
  );
};

export default Books;
