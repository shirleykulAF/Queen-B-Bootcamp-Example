import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./MentorFrom.css";
import Step1 from "../FormStep1/FormStep1";
import Step2 from "../FormStep2/FormStep2";
import { LiaCrownSolid } from "react-icons/lia";
import { CgBee } from "react-icons/cg";

const API_BASE_URL = "http://localhost:5001";

const MentorFrom = () => {
  const navigate = useNavigate();
  // State to track the current step of the registration flow
  const [step, setStep] = useState(1);
  // State to store form data across steps
  const [formData, setFormData] = useState({});
  const [submit, setSubmit] = useState(false);

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

  const handleSubmitForm = async () => {
    try {
      const response = await axios.put(`${API_BASE_URL}/api/mentor`, formData);
      setSubmit(true);
    } catch (error) {
      console.error("Error add new mentor to the database:", error);
      throw error;
    }
  };

  return (
    <div>
      {!submit ? (
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
              onNext={handleSubmitForm}
              onBack={handlePreviousStep}
              onChange={handleFormDataChange}
              formData={formData}
            />
          )}
        </div>
      ) : (
        <div className="modal-overlay">
          <div className="modal">
            <div className="text-continer">
              <p>
                Thank you for signing up as a mentor and welcome to the QueenB
                team {""}
                <LiaCrownSolid size={20} />
                {""}
                <CgBee size={20} />
              </p>
            </div>
            <div className="button-continer">
              <button onClick={() => navigate("/")}>Back To Home Page</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorFrom;
