import React, { useState } from 'react';
import LoginButton from '../LoginButton/LoginButton';
import './LoginForm.css';

function LoginForm({ onSubmit }){
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(fullName, password); // Call the parent handler with fullName and password
    };
    return(
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <label htmlFor='fullname'>Full Name:</label>
                        <input
                            type='text'
                            id='fullname'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder='Enter your full name'
                            required
                        />
                    </div>

                    <div className='input-group'>
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                    
                    {/* Use the LoginButton component */}
                    <LoginButton loading={false} />
                </form>
            </div>
    );

}

export default LoginForm