import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/books/books';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  return (
    <li id={id}>
      <h3>{category}</h3>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={(e) => { dispatch(remove(e.target.parentNode.id)); }}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
