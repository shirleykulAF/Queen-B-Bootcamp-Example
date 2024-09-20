import React, { useState, useEffect } from 'react';
import { useLogout } from '../hooks/useLogout';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import './Auth.css'; // Assuming you are using the same auth styles for consistency

const MentorHome = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [mentorDetails, setMentorDetails] = useState(null);

  const [approveDeleteError, setApproveDeleteError] = useState(null);
  const [approveDeleteSuccess, setApproveDeleteSuccess] = useState(null);
  const [showDeleteApproveMsg, setShowDeleteApproveMsg] = useState(false);

  const handleCloseDeleteApproveMsg = () => {
    if (approveDeleteSuccess) {
      logout();
      navigate('/');
    }
    setShowDeleteApproveMsg(false);
  };

  const handleShowDeleteApproveMsg = () => setShowDeleteApproveMsg(true);
  const handleLogoutBtn = () => logout();

  useEffect(() => {
    setError(null);

    const fetchMentorDetails = async () => {
      const response = await fetch(
        `http://localhost:5001/api/getMentorDetailsByEmail/${user.email}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const json = await response.json();

      if (!response.ok) {
        setError(json.error);
      }

      if (response.ok) {
        setMentorDetails(json);
      }
    };

    if (user) fetchMentorDetails();
  }, [user]);

  const handleMentorDetailsInput = (e) => {
    const { name, value } = e.target;
    setMentorDetails({ ...mentorDetails, [name]: value });
  };

  const handleUpdateBtn = async () => {
    setError(null);
    setSuccess(null);

    const emptyFields = Object.entries(mentorDetails).filter(
      ([key, value]) => !value || value.trim() === ''
    );

    if (emptyFields.length > 0) {
      setError('All fields must be filled');
      return;
    }

    const response = await fetch('http://localhost:5001/api/updateMentorsDetails', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mentorDetails),
    });

    const json = await response.json();

    if (!response.ok) {
      setSuccess(null);
      setError(json.error);
    }

    if (response.ok) {
      setSuccess(json.success);
    }
  };

  const handleDeleteBtn = async () => {
    setApproveDeleteError(null);
    setApproveDeleteSuccess(null);

    const response = await fetch(
      `http://localhost:5001/api/deleteMentors/${user.email}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setApproveDeleteError(json.error);
    }

    if (response.ok) {
      setApproveDeleteSuccess(json.success);
      handleShowDeleteApproveMsg();
    }
  };

  return (
    <section className="mentor-home">
      <div className="auth-container">
        <h2>Mentor Home</h2>
        <a href="/" onClick={handleLogoutBtn} className="logout-link">Log Out</a>

        {mentorDetails && (
          <>
            <label>First Name</label>
            <input
              name="first_name"
              value={mentorDetails.first_name}
              onChange={handleMentorDetailsInput}
              placeholder="First Name"
            />

            <label>Last Name</label>
            <input
              name="last_name"
              value={mentorDetails.last_name}
              onChange={handleMentorDetailsInput}
              placeholder="Last Name"
            />

            <label>Phone Number</label>
            <input
              name="phone_number"
              value={mentorDetails.phone_number}
              onChange={handleMentorDetailsInput}
              placeholder="Phone Number"
            />

            <label>LinkedIn</label>
            <input
              name="linkedin"
              value={mentorDetails.linkedin}
              onChange={handleMentorDetailsInput}
              placeholder="LinkedIn URL"
            />
          </>
        )}

        <button onClick={handleUpdateBtn} className="auth-button">
          Update Details
        </button>

        <button onClick={handleDeleteBtn} className="auth-button delete">
          Delete Account
        </button>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <Modal show={showDeleteApproveMsg} onHide={handleCloseDeleteApproveMsg} animation={false} centered>
          <Modal.Body>
            {approveDeleteError && <p>{approveDeleteError}</p>}
            {approveDeleteSuccess && <p>{approveDeleteSuccess}</p>}
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleCloseDeleteApproveMsg} className="modal-close-btn">
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
};

export default MentorHome;
