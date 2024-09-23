import React from "react";
import "./ProgressStepper.css";

const ProgressStepper = ({ currentStep }) => {
  return (
    <div className="stepper-container">
      <div className={`step ${currentStep === 1 ? "active" : ""}`}>
        <div className="step-circle">1</div>
        <p>Personal Information</p>
      </div>
      <div className="line"></div>
      <div className={`step ${currentStep === 2 ? "active" : ""}`}>
        <div className="step-circle">2</div>
        <p>Professional Experience</p>
      </div>
    </div>
  );
};

export default ProgressStepper;
