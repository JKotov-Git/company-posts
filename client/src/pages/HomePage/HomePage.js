import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar";
import { useStateValue } from "../../context/StateProvider";
import axios from "axios";
import ReactPaginate from "react-paginate";

import PostCard from "../../components/postCard/PostCard";

const HomePage = () => {
  const [postsList, setPostsList] = useState([]);
  const [filteredPostsList, setFilteredPostsList] = useState([]);
  const [startIndexPosts, setIndexPosts] = useState(0);

  const [isSearchByPostTitle, setIsSearchByPostTitle] = useState(false);

  const [isSearchByUsername, setIsSearchByUsername] = useState(false);

  const [numberOfPages, setNumberOfPages] = useState(0);

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

  const onPageChange = (e) => {
    let selectedPage = e.selected;
    console.log("Page is changed to " + selectedPage);
  };

  return (
    <div className="home">
      <Navbar
        onChange={searchHandleChange}
        sortByPostTitle={sortByPostTitle}
        searchByPostTitle={searchByPostTitle}
        searchByUserName={searchByUsername}
        checkedIndicIsSearchByPost={isSearchByPostTitle}
        checkedIndicIsSearchByUsername={isSearchByUsername}
      />
      <div className="posts-list-container">
        {filteredPostsList.length > 0 ?  filteredPostsList.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            author={post.username}
            title={post.posttitle}
            subTitle={post.postsubtitle}
            date={post.createpostdate}
            description={post.description}
            date={post.createpostdate}
          />
        )) : <h4 className="no-posts-yet-message">No Posts Yet.</h4>}
      </div>
      <div className="post-list-paginate-container">
        <ReactPaginate
          pageCount={numberOfPages}
          activeLinkClassName={"paginate-list-item-active"}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default HomePage;
