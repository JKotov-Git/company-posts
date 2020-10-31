import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar";
import { useStateValue } from "../../context/StateProvider";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [startIndexPosts, setIndexPosts] = useState(0);

  const [isSearchByPostTitle, setIsSearchByPostTitle] = useState(false);

  const [isSearchByUsername, setIsSearchByUsername] = useState(false);

  const searchHandleChange = (e) => {
    console.log(e.target.value);
  };

  const sortByPostTitle = () => {
    console.log("Sort by Post Title");
  };

  const searchByPostTitle = () => {
    setIsSearchByPostTitle(true);
    setIsSearchByUsername(false);
  };

  const searchByUsername = () => {
    setIsSearchByPostTitle(false);
    setIsSearchByUsername(true);
  };

  return (
    <div className="home">
      <Navbar onChange={searchHandleChange} sortByPostTitle={sortByPostTitle}
      searchByPostTitle={searchByPostTitle} 
      searchByUserName={searchByUsername} 
      checkedIndicIsSearchByPost={isSearchByPostTitle} checkedIndicIsSearchByUsername={isSearchByUsername}/>
      <div className="posts-list-container"></div>
      <div className="post-list-paginate-container"></div>
    </div>
  );
};

export default HomePage;
