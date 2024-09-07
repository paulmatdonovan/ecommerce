import React, { useState } from 'react'
import './CSS/LoginSignup.css';

export const LoginSignup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([])

    function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            username, password, email
        };

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((r) => r.json())
            .then((data) => setUsers((prevUsers) => [...prevUsers, data]));
    }


    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className='loginsignup-fields'>
                        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Your name' />
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
                        <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                    </div>
                    <button>Continue</button>
                    <p className="loginsignup-login">Already have an account? <span>Log in here</span></p>
                    <div className="loginsignup-agree">
                        <input type="checkbox" name='' id='' />
                        <p>By continuing, I agree to use the terms of the privacy policy.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default LoginSignup;
