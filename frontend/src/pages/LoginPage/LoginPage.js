import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="container">
      <div className="mask">
        <div className="pageHeader">
          <h1>Login to mealCONTROL</h1>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Username{" "}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Password{" "}
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          {isServerError ? (
            <p className="error">Login failed, incorrect credentials!</p>
          ) : null}
          <button id="loginButton">Login!</button>
          <Link to="/register" id="regButton">Click to register!</Link>
          <Link to="/" id="backButton">Back</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
