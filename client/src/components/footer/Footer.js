import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-company">
        <h2>Company Posts</h2>
      </div>
      <div className="footer-copyright">
        <h4>Copyright</h4>
      </div>
      <div className="footer-links">
        <ul>
          <li>Posts</li>
          <li>Users</li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
