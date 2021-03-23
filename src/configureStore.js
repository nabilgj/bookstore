import { createStore, combineReducers } from "redux";

import bookReducer from "./store/reducers/addBook";

const rootReducer = combineReducers({
  books: bookReducer,
});

const store = createStore(rootReducer);

// into app
export default store;
