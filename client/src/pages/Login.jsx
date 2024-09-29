import React, { useState } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import './Login.css';

function Login() {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle login submission
  const handleLogin = (username, password) => {
    setLoading(true);
    setErrorMessage('');

    // Encode the parameters for the URL
    const params = new URLSearchParams({ username, password });

    fetch(`http://localhost:5001/login?${params}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Invalid credentials');
        }
        return response.text(); // Or response.json() if you return JSON
      })
      .then(data => {
        alert(data); // Login successful message
        // Handle success (e.g., redirect or update state)
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage('Invalid credentials. Please try again.');
      })
      .finally(() => {
        setLoading(false); // Stop loading state after the API call is complete
      });

  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {/* Render the LoginForm and pass the handleLogin function */}
      <LoginForm onSubmit={handleLogin} />

      {/* Display loading indicator while login is processing */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Display error message if present */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </>
      )}
    </div>
  );
}

export default Login;
