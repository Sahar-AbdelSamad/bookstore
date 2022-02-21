import { Link } from 'react-router-dom';
import '../assets/Header.css';

const Header = () => (
  <header className="header">
    <Link to="/">Bookstore CMS</Link>
    <Link to="/">Books</Link>
    <Link to="/Categories">Categories</Link>
  </header>
);

export default Header;
