import React, { useState } from 'react';
import LoginForm from './components/LoginForm'; // Import the LoginForm component
import './Login.css';

function Login(){
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);

    // Function to handle login submission
  const handleLogin = (fullName, password) => {
    setLoading(true); // Start loading state when login is initiated
    setErrorMessage(''); // Clear any previous error messages

    // Simulate an API call (you would replace this with an actual API call)
    setTimeout(() => {
      // Example logic: If fullName and password match these credentials, login is successful
      if (fullName === 'John Doe' && password === 'password123') {
        alert('Login successful!');
        // Here you can redirect to another page or perform another action on success
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
      setLoading(false); // Stop loading state after checking the credentials
    }, 1000);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {/* Render the LoginForm and pass the handleLogin function */}
      <LoginForm onSubmit={handleLogin} />

      {/* Display error message if present */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Login;
