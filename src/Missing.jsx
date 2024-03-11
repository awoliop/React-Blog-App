import React from "react";
import Header from "./Header";
// this way the page doesn' t have to refresh from the server just rerender the react domponents, hiow react is supposed to be doing it !!
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <main className="route-components">
      <h1>404 : Not Found</h1>
      {/* no need to reload from server, react will do its magic this way!!(🔥🔥 dont forget to import upthere!!) */}
      <Link to="/">Header</Link>
      {/* re-rendering from server happens here(not react way not recommended!!) */}
      {/* <a href="/">Header from "a href"</a> */}
    </main>
  );
};

export default Missing;
