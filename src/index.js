import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import MainNavigation from "./components/MainNavigation";

import { Provider } from "react-redux";
import store from "./configureStore";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";

// store.subscribe(() => {
//   console.log("coming from index", store.getState());
// });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <MainNavigation />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/addbook" component={AddBook} />
          <Route path="/editbook/:id" component={EditBook} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
