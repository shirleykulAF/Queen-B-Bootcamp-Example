import React, { useState } from "react";
import { CgAsterisk } from "react-icons/cg";
import ProgressStepper from "../ProgressStepper/ProgressStepper";
import "./FormStep1.css";

const FormStep1 = ({ onNext, onChange, formData }) => {
  const [fullName, setFullName] = useState(formData.fullName || "");
  const [email, setEmail] = useState(formData.email || "");
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || "");
  const [location, setLocation] = useState(formData.location || "");
  const [photo, setPhoto] = useState(formData.photo || "");
  const [about, setAbout] = useState(formData.about || "");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update local state for the corresponding field
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "photo":
        setPhoto(URL.createObjectURL(e.target.files[0]));
        break;
      case "about":
        setAbout(value);
        break;
      default:
        break;
    }
    // updated data to the parent component (MentorFrom) to store it
    onChange(
      name === "photo"
        ? { [name]: URL.createObjectURL(e.target.files[0]) }
        : { [name]: value }
    );
  };

  const handleClickOnNextButton = () => {
    if (
      fullName === "" ||
      email === "" ||
      phoneNumber === "" ||
      location === "" ||
      about === ""
    ) {
      setError("Please Enter All The Required Fields");
    } else if (!isFullNameValid(fullName)) {
      setError(
        "Please Enter Valid Name: Should Contain Only At Alphabetic Characters And Least 2 Words!"
      );
    } else if (!isEmailValid(email)) {
      setError("Please Enter Valid Email Address!");
    } else if (!isPhoneNumberValid(phoneNumber)) {
      setError("Please Enter Valid Phone Number!");
    } else {
      setError("");
      onNext();
    }
  };

  const isFullNameValid = (fullName) => {
    let alphabeticCharacters = /^[a-zA-Z]/.test(fullName);
    let containsSpace = /\s/g.test(fullName); // Full name should be at least 2 words
    if (alphabeticCharacters && containsSpace) return true;

    return false;
  };

  const isEmailValid = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const isPhoneNumberValid = (phoneNumber) => {
    // Regex for validating Israeli phone numbers
    const israelPhoneNumberPattern =
      /^(?:\+972|972|0)?(5[0-9]|[2-9])[-]?\d{7}$/;

    return israelPhoneNumberPattern.test(phoneNumber);
  };

  return (
    <div className="form-step1-continer">
      <ProgressStepper currentStep={1} />
      <label>
        <div className="label-name-continer">
          Full Name <CgAsterisk color="red" className="asterisk" />
        </div>
        <input name="fullName" value={fullName} onChange={handleChange} />
      </label>
      <label>
        <div className="label-name-continer">
          Email <CgAsterisk color="red" className="asterisk" />
        </div>
        <input name="email" value={email} onChange={handleChange} />
      </label>
      <label>
        <div className="label-name-continer">
          Phone Number <CgAsterisk color="red" className="asterisk" />
        </div>
        <input name="phoneNumber" value={phoneNumber} onChange={handleChange} />
      </label>
      <label>
        <div className="label-name-continer">
          Location <CgAsterisk color="red" className="asterisk" />
        </div>
        <input name="location" value={location} onChange={handleChange} />
      </label>{" "}
      <label>
        <div className="label-name-continer">
          About <CgAsterisk color="red" className="asterisk" />
        </div>
        <textarea name="about" rows={4} value={about} onChange={handleChange} />
      </label>
      <label>
        Photo <input name="photo" type="file" onChange={handleChange} />
      </label>
      {error ? <h4 className="error-text">{error}</h4> : ""}
      <button className="next-button" onClick={handleClickOnNextButton}>
        Next
      </button>
    </div>
  );
};

export default FormStep1;
