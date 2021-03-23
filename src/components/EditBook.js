import React from "react";

import { connect } from "react-redux";
import { editBook } from "../store/actions/addBook";

import { useHistory } from "react-router-dom";

import BookForm from "./BookForm";

const EditBook = (props) => {
  let history = useHistory();

  return (
    <div style={{ margin: "2rem" }}>
      <BookForm
        book={props.book}
        onSubmit={(book) => {
          props.dispatch(editBook(props.book.id, book));
          history.push("/");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    book: state.books.find((book) => book.id === props.match.params.id),
  };
};

// into app
export default connect(mapStateToProps)(EditBook);
