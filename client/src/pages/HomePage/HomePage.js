import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar";

import ReactPaginate from "react-paginate";

import PostCard from "../../components/postCard/PostCard";
import { getAllPosts } from "../../utils/api";
import { sortListBysPostName } from "../../utils/helper";

const HomePage = () => {
  const [postsList, setPostsList] = useState([]);
  const [filteredPostsList, setFilteredPostsList] = useState([]);
  const [startIndexPosts, setIndexPosts] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [isSearchByPostTitle, setIsSearchByPostTitle] = useState(true);

  const [isSearchByUsername, setIsSearchByUsername] = useState(false);

  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(async () => {
    try {
      const response = await getAllPosts("posts");

      setPostsList(response);
      setNumberOfPages(Math.ceil(response.length / 6));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    
      if (isSearchByPostTitle) {
        setFilteredPostsList(
          postsList
            .filter((post) => {
              return post.posttitle
                .toLowerCase()
                .includes(searchInput.toLowerCase());
            })
            .slice(startIndexPosts, startIndexPosts + 6)
        );
      } else if (isSearchByUsername) {
        setFilteredPostsList(
          postsList.filter((post) => {
            return post.username
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          })
        );
      }
    
  }, [searchInput, postsList]);

  // searched value from input
  const searchHandleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // sort posts by post title
  const sortByPostTitle = () => {
    setFilteredPostsList(sortListBysPostName(postsList));
  };

  // check box determine search property post title
  const searchByPostTitle = () => {
    setIsSearchByPostTitle(true);
    setIsSearchByUsername(false);
  };

  // check box determine search property username
  const searchByUsername = () => {
    setIsSearchByPostTitle(false);
    setIsSearchByUsername(true);
  };

  // change page content
  const onPageChange = (e) => {
    let selectedPage = e.selected;
    let nextIndex = selectedPage * 6;
    const nextPosts = postsList.slice(nextIndex, nextIndex + 6);
    setFilteredPostsList(nextPosts);
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
        {filteredPostsList.length > 0 ? (
          filteredPostsList.map((post) => (
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
          ))
        ) : (
          <h4 className="no-posts-yet-message">No Posts Yet.</h4>
        )}
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
