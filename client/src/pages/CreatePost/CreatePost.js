import React, { useState } from "react";
import "./CreatePost.css";
import { useStateValue } from "../../context/StateProvider";
import { createPost } from "../../utils/api";
import SignInMessage from "../../components/signInMessage/SignInMessage";

function generateDate() {
  let currentDate = new Date();
  let month = currentDate.toLocaleString("default", { month: "short" });
  let date = currentDate.getDate();
  let year = currentDate.getFullYear();
  return `${month} ${date}, ${year}`;
}

const CreatePost = () => {
  const [{ user }] = useStateValue();
  const [postTitle, setPostTitle] = useState("");
  const [postSubTitle, setPostSubTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [isWrongBorderColor, setIsWrongBorderColor] = useState(false);
  const [showWrongMessage, setShowWrongMessage] = useState(false);

  // get text from input title
  const postTitleValue = (e) => {
    const title = e.target.value;
    setPostTitle(title);
  };
  // get text from input subtitle
  const postSubTitleValue = (e) => {
    const subTitle = e.target.value;
    setPostSubTitle(subTitle);
  };

  // get text from textarea

  const postContentValue = (e) => {
    const content = e.target.value;
    setPostContent(content);
  };

  const submitPost = async () => {
    const postObject = {
      posttitle: postTitle,
      postsubtitle: postSubTitle,
      description: postContent,
      userId: user.id,
      username: user.username,
      createpostdate: generateDate(),
    };
    console.log(postObject);

    if (postTitle === "") {
      setIsWrongBorderColor(true);
      setShowWrongMessage(true);
    } else if (postContent === "") {
      setIsWrongBorderColor(true);
      setShowWrongMessage(true);
    } else {
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
              onChange={postTitleValue}
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
              onChange={postSubTitleValue}
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
              onChange={postContentValue}
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
