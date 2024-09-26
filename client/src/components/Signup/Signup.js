import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgAsterisk } from "react-icons/cg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import "./Signup.css";
import queenbImage from "../../assets/QueenB.png";

const API_BASE_URL = "http://localhost:5001";

const options = [
  { value: "Mentor", label: "Mentor" },
  { value: "Mentee", label: "Mentee" },
];

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
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

  const handleClickOnSignupButton = async () => {
    if (!email || !password || !userType) {
      setError("All fields are required!");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const data = { email, password, type: userType };

    try {
      const response = await axios.put(`${API_BASE_URL}/api/users`, data);
      if (response.status === 201) {
        if (userType === "Mentee") {
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
      <div className="signup-wrapper">
        <div className="form-wrapper">
          <label>
            <div className="label-container">
              Email <CgAsterisk color="red" className="asterisk-icon" />
            </div>
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <div className="label-container">
              Password <CgAsterisk color="red" className="asterisk-icon" />
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
          <label>
            <div className="label-container">
              Type <CgAsterisk color="red" className="asterisk-icon" />
            </div>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="" disabled>
                Select type
              </option>{" "}
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          {error && <p className="error-message">{error}</p>}
          <button className="signup-btn" onClick={handleClickOnSignupButton}>
            SignUp
          </button>
        </div>

        <div className="signup-image-wrapper">
          <img className="signup-image" src={queenbImage} />
        </div>
      </div>

      <div className="login-link-container">
        <p>Already have an account?</p>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Signup;
