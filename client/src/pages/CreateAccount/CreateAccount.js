import React, { useState } from "react";
import "./CreateAccount.css";

import { Link, useHistory } from "react-router-dom";
import { createUserAccount } from "../../utils/api";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [wrongMessage, setWrongMessage] = useState("");
  const history = useHistory();

  const createAccount = async () => {
    const userObject = {
      username: username,
      email: email,
      password: password,
    };

    if (password === rePassword) {
      try {
        await createUserAccount("users", userObject);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    } else {
      setWrongMessage("Passwords not match");
    }
  };

  return (
    <div className="create-account">
      <div className="create-account-container">
        <h1>Create Account</h1>
        <form className="create-account-form">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Re-enter password</label>
          <input
            type="password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />

          <button type="button" onClick={createAccount}>
            Create your account
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="login-link" to="/login">
            Sign-In.
          </Link>
        </p>
        <h4 className="wrong-message">{wrongMessage}</h4>
      </div>
    </div>
  );
};

export default CreateAccount;
