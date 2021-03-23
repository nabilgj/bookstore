import * as actionTypes from "./actionTypes";

import { v4 as uuidv4 } from "uuid";

// into AddBook
export const addBook = ({
  name = "",
  price = 0,
  category = "",
  description = "",
} = {}) => {
  return {
    type: actionTypes.ADD_BOOK,
    books: {
      id: uuidv4(),
      name: name,
      price: price,
      category: category,
      description: description,
    },
  };
};

// into BookList
export const removeBook = ({ id } = {}) => {
  return {
    type: actionTypes.REMOVE_BOOK,
    id: id,
  };
};

// into EditBook
export const editBook = (id, updates) => {
  return {
    type: actionTypes.EDIT_BOOK,
    id: id,
    updates: updates,
  };
};
