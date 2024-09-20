import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import './Auth.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error } = useLogin();

    const handleLoginBtn = async (e) => {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <section>
            <div className="auth-container">
                <h2>Login</h2>
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
                <form>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="name@example.com"
                    />

                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Password"
                    />

                    <button onClick={handleLoginBtn}>Login</button>

                    {error && <p>{error}</p>}
                </form>
            </div>
        </section>
    );
};

export default Login;
