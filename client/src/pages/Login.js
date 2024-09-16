import React from 'react'
import { useState } from 'react'

// hooks
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login, error} = useLogin()

    const handleLoginBtn = async (e) => {
        e.preventDefault()
        await login(email, password)
    }
    
    return (
        <section>
            <div>
                <h2>Login</h2>
                <form>
                    <input
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="name@example.com">
                    </input>

                    <input
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Password">
                    </input>

                    <button onClick={handleLoginBtn}>Login</button>

                    { error && <p>{error}</p>}
                </form>

                <p>Don't have an account? <a href='/signup'>Sign up</a></p>
            </div>
        </section>
    )
}

export default Login