import React, { useState } from "react";
import "./CreatePost.css";
import { useStateValue } from "../../context/StateProvider";
import { createPost } from "../../utils/api";
import SignInMessage from "../../components/signInMessage/SignInMessage";
import { gnerateDate } from "../../utils/helper";



const CreatePost = () => {
  const [{ user }] = useStateValue();
  const [postTitle, setPostTitle] = useState("");
  const [postSubTitle, setPostSubTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [isWrongBorderColor, setIsWrongBorderColor] = useState(false);
  const [showWrongMessage, setShowWrongMessage] = useState(false);


  const submitPost = async () => {
    const postObject = {
      posttitle: postTitle,
      postsubtitle: postSubTitle,
      description: postContent,
      userId: user.id,
      username: user.username,
      createpostdate: gnerateDate(),
    };


    if (postTitle === "" || postContent === "") {
      setIsWrongBorderColor(true);
      setShowWrongMessage(true);
    }  else {
      setIsWrongBorderColor(false);
      setShowWrongMessage(false);
      try {
        await createPost("posts", postObject);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="post">
      {user ? (
        <div className="post-form">
          <div className="post-title">
            <label>Title</label>
            <input
              type="text"
              className={
                "post-title-input " +
                (isWrongBorderColor
                  ? "border-color-red"
                  : "border-color-lightgray")
              }
              onChange={(e) => {
                setPostTitle(e.target.value);
              }}
            />
            {showWrongMessage ? (
              <p className="error-info-input">Post title can not be empty.</p>
            ) : null}
          </div>
          <div className="post-subtitle">
            <label>Subtitle</label>
            <input
              type="text"
              className="post-subtitle-input"
              onChange={(e) => {
                setPostSubTitle(e.target.value);
              }}
            />
          </div>
          <div className="post-content">
            <label>Content</label>
            <textarea
              type="text"
              className={
                "post-form-textarea " +
                (isWrongBorderColor
                  ? "border-color-red"
                  : "border-color-lightgray")
              }
              onChange={(e) => {
                setPostContent(e.target.value);
              }}
            />
            {showWrongMessage ? (
              <p className="error-info-input">Post content can not be empty.</p>
            ) : null}
          </div>

          <button type="button" onClick={submitPost}>
            Submit Post
          </button>
        </div>
      ) : (
        <SignInMessage />
      )}
    </div>
  );
};

export default CreatePost;
