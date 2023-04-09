import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginStyle from "./Login.module.css"
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = user;

        try {
            const res = await fetch("https://deeployassements.onrender.com/api/auth", {
                // const res = await fetch("https://assessment-f5mu.onrender.com/api/auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await res.json();

            if (!data.success) {
                setError(data.message);
                console.log(data);
            } else {
                setLoggedIn(true);
                console.log(data.message);
                window.location.href = "/home"
                // navigate = "/home"
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div className={LoginStyle.login}>
            <h1>Enter Your Credentials</h1>
            <form className={LoginStyle.loginForm} onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" value={user.email} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={user.password} onChange={handleInputChange} />
                </label>
                <br />
                {error && <div className={LoginStyle.error}>{error}</div>}
                <button className={LoginStyle.loginButton} type="submit">Login</button> <br />
                <NavLink className={LoginStyle.navs}
                    to="/"
                >
                    Back to Registration
                </NavLink>
                <br />
                {/* {loggedIn && ( */}
                <NavLink
                    to="/products"
                >
                    Go to Home page
                </NavLink>
                {/* )} */}
            </form>
        </div>
    );
};

export default Login;
