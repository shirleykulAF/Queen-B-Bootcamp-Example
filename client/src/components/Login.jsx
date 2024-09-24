import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css"; // Reuse CSS

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

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleLogin = async (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      alert("Email and password are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Login successful:", data);
      } else {
        console.log("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
    console.log(formData);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          icon={email_icon}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          icon={password_icon}
        />
      </div>
      <div className="submit-container">
        <button className="submit" onClick={handleLogin}>
          Login
        </button>
        <div className="submit gray" onClick={() => navigate("/signup")}>
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Login;
