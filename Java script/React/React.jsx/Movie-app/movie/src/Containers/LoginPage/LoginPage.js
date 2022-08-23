import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const inititalValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(inititalValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isActive, setIsActive] = useState(false);

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate ("/home");
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setIsActive(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters!";
    }
    return errors;
  };
  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <>Signed is successfully</>
      ) : ""}
      <form onSubmit={handleSubmit}>
        <div className="home_button">
          <FaHome onClick={() => navigate("/home")} />
        </div>
        <h1 className="acc">Login to your account:</h1>
        <div className="ui-divider"></div>
        <div className="ui-form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p style={{ color: "red" }}>{formErrors.password}</p>
          <button
            className="btn-submit"
            style={{
              backgroundColor: isActive ? "#91C788" : "",
              color: isActive ? "white" : "",
            }}
            type="submit"
            onClick={handleSubmit}
          >
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
