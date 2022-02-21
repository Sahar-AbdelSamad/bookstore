import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
