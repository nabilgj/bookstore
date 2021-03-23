import React from "react";
import classes from "./BookList.module.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { removeBook } from "../store/actions/addBook";

const BookList = (props) => {
  const { id, name, price, category, description } = props;

  return (
    <div className={classes.book}>
      <Link to={`/editbook/${id}`}>
        <li>
          <h2>Book: {name}</h2>
          <p>Price: ${price}</p>
          <p>Category: {category}</p>
          <span>Description: {description}</span>
        </li>
      </Link>

      <button
        onClick={() => props.bookRemoved({ id: id })}
        style={{ marginTop: "12px" }}
      >
        Delete
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    bookRemoved: (id) => dispatch(removeBook(id)),
  };
};

// into app
export default connect(null, mapDispatchToProps)(BookList);
