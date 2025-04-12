"use client"
import "./style.scss"
import { useState } from "react"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

function Auth() {
    const [isRegistered, setIsRegistered] = useState(false)
    const toggleRegistered = (e) => {
        e.preventDefault()
        setIsRegistered(!isRegistered)
    }
    return (
        <div className="auth-container">
            {isRegistered ? <SignIn /> : <SignUp />}

            <div className="toggle-auth-btn-container">
                {
                    !isRegistered
                        ?
                        <p>
                            Already have an account? 
                            <a href="#" onClick={toggleRegistered} className="toggle-auth-btn">Sign in</a>
                        </p>
                        :
                        <p>
                            Don't have an account? 
                            <a href="#" onClick={toggleRegistered} className="toggle-auth-btn">Sign up</a>
                        </p>
                }
            </div>
        </div>
    );
}

export default Auth;