import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const InputField = ({ type, name, placeholder, value, onChange, icon }) => (
  <div className="input">
    {icon && <img src={icon} alt="" />}
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

const LoginSignup = () => {
  // Initalize variable && function for signing up
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "mentee", // Default role
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSignup = async (event) => {
    event.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Check that response is OK
      const data = await response.json();
      if (response.ok) {
        console.log("User created:", data);
      } else {
        console.log("Signup failed:", data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }

    console.log(formData);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <>
            <InputField
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              icon={user_icon}
            />
            <InputField
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              icon={user_icon}
            />

            <div className="input">
              <label>Are you a Mentor or Mentee?</label>
              <select name="role" value={formData.role} onChange={handleChange}>
                <option value="mentee">Mentee</option>
                <option value="mentor">Mentor</option>
              </select>
            </div>
          </>
        )}

        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          icon={email_icon}
        />
      </div>

      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        icon={password_icon}
      />
      {action === "Login" && (
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        {action === "Sign Up" ? (
          <button
            className="submit"
            onClick={handleSignup} // This triggers the form submission
          >
            Submit
          </button>
        ) : (
          <>
            <div
              className="submit gray"
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </div>
            <div
              className={action === "Sign Up" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
