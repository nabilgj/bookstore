import React, { Fragment } from "react";

import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation clicked={props.modalShow} />

      <main>{props.children}</main>
    </Fragment>
  );
};

// into App
export default Layout;
