import React, { useState } from "react";
import "./CreateAccount.css";

import axios from "axios";

import { Link } from "react-router-dom";
import { createUserAccount } from "../../utils/api";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const createAccount = async () => {
    const userObject = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const response = await createUserAccount("users", userObject);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // const createAccount = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = createUserAccount("users", {
  //       id: generateRandomId,
  //       username: username,
  //       email: email,
  //       password: password,
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
      </div>
    </div>
  );
};

export default CreateAccount;
