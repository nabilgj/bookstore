import * as actionTypes from "../actions/actionTypes";

const bookListDefaultState = [];

const bookReducer = (state = bookListDefaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_BOOK:
      return [...state, action.books];

    case actionTypes.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    case actionTypes.EDIT_BOOK:
      return state.map((book) => {
        if (book.id === action.id) {
          return {
            ...book,
            ...action.updates,
          };
        } else {
          return book;
        }
      });

    default:
      return state;
  }
};

// into configureStore
export default bookReducer;
