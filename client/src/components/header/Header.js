import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <HomeIcon className="header-home-icon" />
      </Link>
      <div className="header-title">
        <h2 data-testid="headerTitle">Company Posts</h2>
      </div>
      <div className="header-nav">
        <Link className="header-link" to="/login">
          <div className="header-option">
            <h5>Hello</h5>
            <h5>Sign In</h5>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
