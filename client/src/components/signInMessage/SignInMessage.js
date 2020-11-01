import React from "react";
import "./SignInMessage.css";
import { useHistory } from "react-router-dom";

const SignInMessage = () => {
  let history = useHistory();

  const openLoginPage = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  const openCreateAccountPage = (e) => {
    e.preventDefault();
    history.push("/createAccount");
  };

  return (
    <div className="message-container">
      <h1 className="message">Please sign in to create a post</h1>

      <div className="message-container-options">
        <button onClick={openLoginPage}>Sign In</button>
        <button onClick={openCreateAccountPage}>Create Account</button>
      </div>
    </div>
  );
};

export default SignInMessage;
