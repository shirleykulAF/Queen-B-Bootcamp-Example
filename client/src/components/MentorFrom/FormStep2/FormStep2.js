import React, { useState } from "react";
import { CgAsterisk } from "react-icons/cg";
import ProgressStepper from "../ProgressStepper/ProgressStepper";
import "./FormStep2.css";

const FormStep2 = ({ onNext, onBack, onChange, formData }) => {
  const [role, setRole] = useState(formData.role || "");
  const [yearsOfExperience, setYearsOfExperience] = useState(
    formData.yearsOfExperience || ""
  );
  const [company, setCompany] = useState(formData.company || "");
  const [linkedinURL, setLinkedinURL] = useState(formData.linkedinURL || "");
  const [expertise, setExpertise] = useState(formData.expertise || []);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update local state for the corresponding field
    switch (name) {
      case "role":
        setRole(value);
        break;
      case "yearsOfExperience":
        setYearsOfExperience(value);
        break;
      case "company":
        setCompany(value);
        break;
      case "linkedinURL":
        setLinkedinURL(value);
        break;
      case "expertise":
        handleSetExpertise(value);
        break;
      default:
        break;
    }
    // updated data to the parent component (MentorFrom) to store it
    onChange({ [name]: value });
  };

  const handleSetExpertise = (data) => {
    console.log("data before: ", data);
    const dataArray = data.split(",");
    setExpertise(dataArray);

    console.log("form2: ", dataArray);
  };

  const handleClickOnSubmitButton = () => {
    if (
      role === "" ||
      yearsOfExperience === "" ||
      company === "" ||
      linkedinURL === "" ||
      expertise === ""
    ) {
      setError("Please Enter All The Required Fields");
    } else if (!isLinkedinURLValid(linkedinURL)) {
      setError("Please Enter Valid Linkedin URL!");
    } else {
      onNext();
    }
  };

  const isLinkedinURLValid = (linkedinURL) => {
    let pattern =
      /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    if (pattern.test(linkedinURL)) return true;
    return false;
  };

  return (
    <div className="form-step2-continer">
      <ProgressStepper currentStep={2} />
      <label>
        <div className="label-name-continer">
          Role <CgAsterisk color="red" className="asterisk" />
        </div>
        <input name="role" value={role} onChange={handleChange} />
      </label>
      <label>
        <div className="label-name-continer">
          Years Of Experience <CgAsterisk color="red" className="asterisk" />
        </div>
        <input
          name="yearsOfExperience"
          type="number"
          inputMode="numeric" // Suggests a numeric keyboard on mobile
          value={yearsOfExperience}
          onChange={handleChange}
        />
      </label>
      <label>
        <div className="label-name-continer">
          Company <CgAsterisk color="red" className="asterisk" />
        </div>
        <input name="company" value={company} onChange={handleChange} />
      </label>
      <label>
        <div className="label-name-continer">
          Linkedin URL <CgAsterisk color="red" className="asterisk" />{" "}
        </div>
        <input name="linkedinURL" value={linkedinURL} onChange={handleChange} />
      </label>
      <label>
        <div className="label-name-continer">
          Expertise Field <CgAsterisk color="red" className="asterisk" />
        </div>
        <h5 className="expertise-label">
          {" "}
          Please enter your areas of expertise, separated by commas (e.g.
          JavaScript,Python).
        </h5>
        <textarea name="expertise" value={expertise} onChange={handleChange} />
      </label>
      {error ? <h4 className="error-text">{error}</h4> : ""}
      <div className="buttons">
        <button className="back-button" onClick={onBack}>
          Back
        </button>
        <button className="submit-button" onClick={handleClickOnSubmitButton}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default FormStep2;
