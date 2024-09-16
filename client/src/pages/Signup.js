import React from 'react'
import { useState } from 'react'

// hooks
import { useSignup } from '../hooks/useSignup'

const Signup = () => {
    
    const {signup, error} = useSignup()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState('mentee')

    // variable for mentors fields
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [programming_language, setProgrammingLanguage] = useState('')
    
    const [showMentorFields, setShowMentorFields] = useState(false)

    const handleSignupBtn = async (e) => {
        e.preventDefault()
        await signup(email, password, userType, first_name, last_name, phone_number, linkedin, programming_language)
    }

    const handleUserTypeAccount = (e) => {
        setUserType(e.target.value)

        if(e.target.value === 'mentor') {
            setShowMentorFields(true)
        }
        else {
            setShowMentorFields(false)
        }
    }
    
    return (
        <section>
            <div>
                <h2>Signup</h2>
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

                    <br/>
                    <p>Choose your account</p>
                    <label>
                        <input type="radio" name='account' value='mentee' 
                                checked={userType === 'mentee'} onChange={(e) => handleUserTypeAccount(e)}/>
                        Mentee
                    </label>
                    <label>
                        <input type="radio" name='account' value='mentor' 
                                checked={userType === 'mentor'} onChange={(e) => handleUserTypeAccount(e)}/>
                        Mentor
                    </label>

                    { showMentorFields && 
                        <>
                            <input
                                onChange={(e) => setFirstName(e.target.value)}
                                value={first_name}
                                placeholder="First Name">
                            </input>

                            <input
                                onChange={(e) => setLastName(e.target.value)}
                                value={last_name}
                                placeholder="Last Name">
                            </input>

                            <input
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                value={phone_number}
                                placeholder="Phone Number">
                            </input>

                            <input
                                onChange={(e) => setLinkedin(e.target.value)}
                                value={linkedin}
                                placeholder="Linkedin URL">
                            </input>

                            <input
                                onChange={(e) => setProgrammingLanguage(e.target.value)}
                                value={programming_language}
                                placeholder="Programming Language">
                            </input>
                        </>
                    }

                    { error && <p>{ error }</p>}

                    <button onClick={handleSignupBtn}>Sign up</button>
                </form>

                <p>Already have an account? <a href='/login'>Login</a></p>
            </div>
        </section>
    )
}

export default Signup