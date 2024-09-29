import React from 'react';
import './LoginButton.css'

function LoginButton({ loading }) {
  return (
    <button type="submit" disabled={loading}>
      {loading ? 'Logging in...' : 'Login'}
    </button>
  );
}

export default LoginButton;

