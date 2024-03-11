import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Nav = ({ search, setSearch }) => {
  return (
    <nav className="Nav">
      <form action="" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="Search">Search Posts</label>
        <input
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
          <Link to="/posts">New-Posts</Link>
        </li>
        <li>
          <Link to="/post/:id">Post Page</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
