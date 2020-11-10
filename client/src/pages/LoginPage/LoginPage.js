import React, { useState } from "react";
import "./LoginPage.css";

import { Link, useHistory } from "react-router-dom";

import { useStateValue } from "../../context/StateProvider";

import { loginUser } from "../../utils/api";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [wrongMessage, setWrongMessage] = useState("");

  const [state, dispatch] = useStateValue();

  let history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    loginUser("get", `users?username=${username}`)
      .then((response) => {
        if (response.data.length > 0) {
          if (response.data[0].password === userpassword) {
            dispatch({
              type: "SIGNIN_USER",
              userObject: response.data[0],
            });
            history.push("/");
          } else {
            setWrongMessage("Wrong username or password.");
          }
        } else {
          setWrongMessage("Such a user doesn't exist.");
        }
      })
      .catch((error) => {
        console.log(error);
        setWrongMessage("No access to the server");
      });

    // try {
    //   const response = await loginUser("users", {
    //     username: username,
    //   });

    //   if (response.data.length > 0) {
    //     if (response.data[0].password === userpassword) {
    //       dispatch({
    //         type: "SIGNIN_USER",
    //         userObject: response.data[0],
    //       });

    //
    //     } else {
    //       setWrongMessage("Wrong username or password.");
    //     }
    //   } else {
    //     setWrongMessage("Such a user doesn't exist. ");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

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

          <button type="button" onClick={signIn}>
            Sign In
          </button>
        </form>
        {/* Link to create account page form */}
        <p>
          <Link className="login-link" to="/createAccount">
            Create new user account.
          </Link>
        </p>

        <h4 className="wrong-message">{wrongMessage}</h4>
      </div>
    </div>
  );
};
export default LoginPage;
