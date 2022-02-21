import '../assets/BookList.css';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import CreateBook from './CreateBook';

const Books = () => {
  const store = [
    {
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <div className="book-list">
      <ul className="book">
        {store.map((book) => (
          <Book category={book.category} title={book.title} author={book.author} key={uuidv4()} />
        ))}
      </ul>
      <hr />
      <CreateBook />
    </div>
  );
};

export default Books;
