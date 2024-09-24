// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bookstore</h1>
        {/* <nav>
          <a href="#bestsellers">Bestsellers</a>
          <a href="#categories">Categories</a>
          <a href="#contact">Contact</a>
        </nav> */}
      </header>
      <div className="banner">
          <div className="banner-img">
            <img src="/banner.jpg" alt="stack-of-books"/>
        </div>
      </div>
      <section id="bestsellers">
        <h2>Bestselling Books</h2>
        {/* Add a list or carousel of books here */}
      </section>
      <section id="categories">
        {/* <h2>Shop by Category</h2>
        Add book categories here */}
      </section>
      <footer>
        <p>Contact us at bookstore@example.com</p>
      </footer>
    </div>
  );
}

export default App;
