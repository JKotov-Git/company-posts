import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li
          data-testid="navbarPosts"
          className="navbar-list-item"
          //   onClick={props.showPosts}
        >
          Posts
        </li>
        <Link to="/createPost" className="navbar-list-item-link">
          <li className="navbar-list-item">Add new post</li>
        </Link>
      </ul>
      <div className="navbar-search">
        <input
          type="text"
          className="navbar-search-box"
          placeholder="Search..."
          onChange={props.onChange}
        />
        <div className="navbar-search-options">
          <h5 className="navbar-search-option-title">Search by:</h5>
          <div className="navbar-search-option-by-post">
            <input
              className="search-option"
              // onChange={props.searchByPostName}
              type="checkbox"
              checked={props.checkIsSearchByPost}
            />
            <label>post name</label>
          </div>
          <div className="navbar-search-option-by-user">
            <input
              className="search-option"
              // onChange={props.searchByUserName}
              type="checkbox"
              checked={props.checkIsSearchByUsername}
            />
            <label>user name</label>
          </div>
        </div>
        <button
          data-testid="btnSortByTitle"
          type="button"
          onClick={props.sortByPostTitle}
        >
          Sort By post
        </button>
      </div>
    </div>
  );
};

export default Navbar;
