import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const signin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          srcset=""
        />
      </Link>

      <div className="login_content">
        <h2>Sign-In</h2>
        <form>
          <h5>Email or mobile phone number</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => SetEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => SetPassword(e.target.value)}
          />
          <p>
            <input type="checkbox" name="" id="" />
            Keep me signed in
          </p>
          <button type="submitS" onClick={signin}>
            Sign-In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <p className="p1">-----------------New to Amazon?-----------------</p>
        <button onClick={register} className="login_register_button">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
