import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
//import { navigate } from "react-router-dom";

function Login() {

  const [user_email, setEmail] = useState("");
  const [user_password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataLogin = {
      email: user_email,
      password: user_password
    };

    axios.get("http://localhost:8070/login/check_login_credentials", formDataLogin)
      .then(() => {
        window.location.href = '/home';
        //navigate.vibrate('/home');
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "IN",
          text: "Invalid credentials or server error.",
          icon: "error"
        });
      });
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="login-input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user_email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="login-input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={user_password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="login-button" type="submit">
              Login
            </button>

            <div className="login-links">
              <a href="#">Forgot Password?</a>
              <a onClick={() => { window.location.href = '/signup'; }}>Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;