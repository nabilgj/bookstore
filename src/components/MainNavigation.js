import React from "react";
import classes from "./MainNavigation.module.css";

import { Link } from "react-router-dom";

const MainNavigation = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <Link to="/"> BookStore </Link>
      </div>

      <nav>
        <ul>
          <li>
            <button onClick={props.clicked}>
              <Link to="/addbook">add a book</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// into Layout
export default MainNavigation;
