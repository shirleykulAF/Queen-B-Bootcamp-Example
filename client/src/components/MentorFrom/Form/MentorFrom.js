import React, { useState } from "react";
import "./MentorFrom.css";
import Step1 from "../FormStep1/FormStep1";
import Step2 from "../FormStep2/FormStep2";

const MentorFrom = () => {
  // State to track the current step of the registration flow
  const [step, setStep] = useState(1);
  // State to store form data across steps
  const [formData, setFormData] = useState({});

  // Function to move to the next step
  const handleNextStep = () => {
    setStep(step + 1);
  };
  // Function to move to the previous step
  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  // Function to handle form data changes across steps
  const handleFormDataChange = (data) => {
    setFormData({ ...formData, ...data });
  };

  return (
    <div className="form-continer">
      {/* Render Step1 component if step is 1 */}
      {step === 1 && (
        <Step1
          onNext={handleNextStep}
          onChange={handleFormDataChange}
          formData={formData}
        />
      )}
      {/* Render Step2 component if step is 2 */}
      {step === 2 && (
        <Step2
          onNext={handleNextStep}
          onBack={handlePreviousStep}
          onChange={handleFormDataChange}
          formData={formData}
        />
      )}
    </div>
  );
};

export default MentorFrom;
