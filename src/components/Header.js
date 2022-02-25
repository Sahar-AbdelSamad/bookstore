/* eslint-disable react/jsx-key */
import { Link } from 'react-router-dom';
import '../assets/Header.css';
import { CgProfile } from 'react-icons/cg';

const Header = () => (
  <header className="header">
    <Link to="/">Bookstore CMS</Link>
    <Link to="/">Books</Link>
    <Link to="/Categories">Categories</Link>
    <div className="icon"><CgProfile size={40} /></div>
  </header>
);

export default Header;
