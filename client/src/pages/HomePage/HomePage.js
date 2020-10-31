import React from "react";
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar";

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="posts-list-container"></div>
      <div className="post-list-paginate-container"></div>
    </div>
  );
};

export default HomePage;
