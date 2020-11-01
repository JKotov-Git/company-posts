import React from "react";
import "./ReadPost.css";
import { useLocation } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";

const ReadPost = () => {
  let location = useLocation();
  return (
    <div className="post-article">
      <h1 className="post-article-title">{location.postDetails.title}</h1>
      <div className="post-article-batch">
        <p className="post-article-author">
          <PersonIcon className="post-article-author-icon" />
          {location.postDetails.author}
        </p>
        <p className="post-article-date">{location.postDetails.date}</p>
      </div>

      <h2 className="post-article-subtitle">{location.postDetails.subTitle}</h2>
      <div className="post-article-content-container">
        <p>{location.postDetails.description}</p>
      </div>
    </div>
  );
};

export default ReadPost;
