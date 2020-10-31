import React, { useState } from "react";
import "./LoginPage.css";

import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../../context/StateProvider";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [userpassword, setUserPassword] = useState("");

  const [state, dispatch] = useStateValue();

  let history = useHistory();

  //   const signIn = () => {
  //     const url = `http://localhost:8000/users?username=${username}`;
  //     console.log(url);
  //     axios
  //       .get(`http://localhost:8000/users?username=${username}`)
  //       .then((response) => {
  //         if (response.data[0].userpassword === userpassword) {
  //           console.log(response.data[0]);
  //           dispatch({
  //             type: "SIGNIN_USER",
  //             userObject: response.data[0],
  //           });
  //           history.push("/");
  //         } else {
  //           console.log("User not found");
  //         }
  //       })
  //       .catch((error) => console.log(error));
  //   };

  return (
    <div className="login">
      <div className="login-form-container">
        <h1>Sign-in</h1>
        <form action="/" className="login-form" autoComplete="off">
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
          />

          <button
            type="button"
            //    onClick={signIn}
          >
            Sign In
          </button>
        </form>
        {/* Link to create account page form */}
        <p>
          <Link className="login-link" to="/createAccount">
            Create new user account.
          </Link>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
