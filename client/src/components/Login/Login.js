import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgAsterisk } from "react-icons/cg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import "./Login.css";

import queenbImage from "../../assets/QueenB.png";

const API_BASE_URL = "http://localhost:5001";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [passwordType, setPasswordType] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleToggle = () => {
    if (passwordType === "password") {
      setIsShowPassword(true);
      setPasswordType("text");
    } else {
      setIsShowPassword(false);
      setPasswordType("password");
    }
  };

  const handleClickOnLoginButton = async () => {
    if (!email || !password) {
      setError("All fields are required!");
      return;
    }
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/users?email=${email}&password=${password}`
      );
      if (response.status === 201) {
        setError("");

        if (response.data.data === "Mentee") {
          navigate("/viewAllMentors");
        } else {
          navigate("/MentorRegistration");
        }
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <div className="login-wrapper">
        <div className="form-wrapper">
          <label>
            <div className="label-name-continer">
              Email <CgAsterisk color="red" className="asterisk" />
            </div>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <div className="label-name-continer">
              Password <CgAsterisk color="red" className="asterisk" />
            </div>
            <div className="input-icon-wrapper">
              <input
                type={passwordType}
                name="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: "100%" }}
              />
              <span className="eye-icon" onClick={handleToggle}>
                {isShowPassword ? (
                  <FaEye size={25} />
                ) : (
                  <FaEyeSlash size={25} />
                )}
              </span>
            </div>
          </label>
          {error && <p className="error-message">{error}</p>}

          <button className="login-btn" onClick={handleClickOnLoginButton}>
            Login
          </button>
        </div>

        <div className="login-image-wrapper">
          <img className="login-image" src={queenbImage} />
        </div>
      </div>
      <div className="signup-link-container">
        <p>Don't have an account yet?</p>
        <a href="/signup">SignUp</a>
      </div>
    </div>
  );
};

export default Login;
