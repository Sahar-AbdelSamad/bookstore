import '../assets/Books.css';

const Books = () => (
  <div className="books">
    <ul className="book">
      <li>
        <h2>Book 1</h2>
        <button type="button">Remove</button>
      </li>
      <li>
        <h2>Book 2</h2>
        <button type="button">Remove</button>
      </li>
    </ul>
    <hr />
    <h2 className="add-book">Add new Book</h2>
    <form className="form">
      <input type="text" placeholder="Book title" />
      <input type="select" placeholder="Category" />
      <input type="submit" className="submit" value="Add Book" />
    </form>
  </div>
);

export default Books;
