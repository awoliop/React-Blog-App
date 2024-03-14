import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form action="" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="Search" className="nav_label">
          Search Posts
        </label>
        <input
          className="nav_input"
          type="text"
          id="search"
          placeholder="Search Posts"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Post</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
