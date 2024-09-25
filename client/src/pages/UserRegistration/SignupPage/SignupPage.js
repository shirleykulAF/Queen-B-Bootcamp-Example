import React from "react";
import "../UserRegistration.css";

import Signup from "../../../components/Signup/Signup";

const SignupPage = () => {
  return (
    <div>
      <div className="registration-title-wrapper">
        <h3 className="registration-title">SignIn to Queen Match</h3>{" "}
      </div>
      <div className="registration-component-wrapper">
        <Signup />
      </div>
    </div>
  );
};

export default SignupPage;
