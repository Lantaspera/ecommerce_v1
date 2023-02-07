import React, { useState } from 'react';
import './register.css'
const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add code to submit the form data to your backend
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Sign Up</button>
            <div className="or-text">or</div>
            <button type="button" className="google-signin-btn">
                <i className="fa fa-google" aria-hidden="true"></i>
                Sign Up with Google
            </button>
        </form>
    );
};

export default Signup;
