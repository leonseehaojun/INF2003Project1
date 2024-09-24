// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My Bookstore</h1>
        <nav>
          <a href="#bestsellers">Bestsellers</a>
          <a href="#categories">Categories</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="bestsellers">
        <h2>Bestselling Books</h2>
        {/* Add a list or carousel of books here */}
      </section>
      <section id="categories">
        <h2>Shop by Category</h2>
        {/* Add book categories here */}
      </section>
      <footer>
        <p>Contact us at bookstore@example.com</p>
      </footer>
    </div>
  );
}

export default App;
