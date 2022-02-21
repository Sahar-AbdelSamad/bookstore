import PropTypes from 'prop-types';

const Book = ({ category, title, author }) => (
  <li>
    <h3>{category}</h3>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <button type="button">Remove</button>
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
