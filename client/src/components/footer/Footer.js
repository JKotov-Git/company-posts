import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-company">
        <Link to="/" className="links-footer">
          <HomeIcon className="header-home-icon" />
          <h4>Company Posts</h4>
        </Link>
      </div>
      <div className="footer-copyright">
        <h4>Copyright © 2020</h4>
      </div>
      <div className="footer-links">
        <ul>
          <Link to="/login" className="links-footer">
            <li>Sign In</li>
          </Link>
          <Link to="/createAccount" className="links-footer">
            <li>Create an Account</li>
          </Link>
          <Link to="/createPost" className="links-footer">
            <li>Add new Post</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
