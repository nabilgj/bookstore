import React from "react";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { addBook } from "../store/actions/addBook";

import BookForm from "./BookForm";

const AddBook = (props) => {
  let history = useHistory();

  return (
    <div style={{ margin: "2rem" }}>
      <BookForm
        onSubmit={(book) => {
          props.dispatch(addBook(book));
          history.push("/");
        }}
      />
    </div>
  );
};

// into index
export default connect()(AddBook);
