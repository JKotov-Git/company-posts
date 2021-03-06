import React from "react";
import { useHistory } from "react-router-dom";

import "./PostCard.css";

import PersonIcon from "@material-ui/icons/Person";

const PostCard = (props) => {
  let history = useHistory();


  // read post on the new page
  const openPost = () => {
   
    history.push({ pathname: "/readPost", postDetails: props });
  };

  return (
    <div className="post-card">
      <div className="post-card-author">
        <PersonIcon className="post-card-icon" />
        <h3>{props.author}</h3>
      </div>
      <div className="post-card-title" onClick={openPost}>
        <h1>{props.title}</h1>
      </div>
      <div className="post-card-subtitle">{props.subTitle}</div>
      <div className="post-card-additional-time">
        <h5>{props.date}</h5>
      </div>
    </div>
  );
};

export default PostCard;
