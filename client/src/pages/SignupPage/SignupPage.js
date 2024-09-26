import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgAsterisk } from "react-icons/cg";
import axios from "axios";

const API_BASE_URL = "http://localhost:5001";

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const options = [
    { value: "Mentor", label: "Mentor" },
    { value: "Mentee", label: "Mentee" },
  ];

  const handleClickOnSignupButton = async () => {
    if (!email || !password || !type) {
      setError("All fields are required!");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const data = { email, password, type };

    try {
      const response = await axios.put(`${API_BASE_URL}/api/users`, data);
      if (response.status === 201) {
        if (type === "Mentee") {
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
    <div className="signup-continer">
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

        <label>
          <div className="label-name-continer">
            Type <CgAsterisk color="red" className="asterisk" />
          </div>
          <select value={type} onChange={(e) => setType(e.target.value)}>
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
      </div>
      {error && <p>{error}</p>}

      <button className="signup-button" onClick={handleClickOnSignupButton}>
        SignUp
      </button>
      <div className="link-continer">
        <p>Already have an account?</p>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default SignupPage;
