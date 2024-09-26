import React from "react";
import "../UserRegistration.css";

import Login from "../../../components/Login/Login";

const LoginPage = () => {
  return (
    <div>
      <div className="registration-title-wrapper">
        <h3 className="registration-title">LogIn to Queen Match</h3>{" "}
      </div>
      <div className="registration-component-wrapper">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
