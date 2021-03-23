import React from "react";

import "./App.css";

import { connect } from "react-redux";

import BookList from "./components/BookList";

const App = (props) => {
  return (
    <div className="booklist">
      <ul>
        {props.books.length > 0 ? (
          props.books.map((book) => <BookList key={book.id} {...book} />)
        ) : (
          <h2>Start Adding your book</h2>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

// into index
export default connect(mapStateToProps)(App);
