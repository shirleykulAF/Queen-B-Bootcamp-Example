import { useState } from "react"
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, userType, first_name, last_name, phone_number, linkedin, programming_language) => {
        setError(null)
        console.log(email, password, userType, first_name, last_name, phone_number, linkedin, programming_language)
        const response = await fetch('http://localhost:5001/api/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, userType, first_name, last_name, phone_number, linkedin, programming_language})
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})
        }
    }

    return { signup, error}
}