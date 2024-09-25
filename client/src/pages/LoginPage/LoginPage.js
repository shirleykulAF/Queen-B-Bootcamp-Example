import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgAsterisk } from "react-icons/cg";
import axios from "axios";

const API_BASE_URL = "http://localhost:5001";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
    <div className="login-continer">
      <div className="input-continer">
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
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {error && <p>{error}</p>}

        <button className="signin-button" onClick={handleClickOnLoginButton}>
          Login
        </button>
        <div className="link-continer">
          <p>Don't have an account yet?</p>
          <a href="/">SignUp</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
