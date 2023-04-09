import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginStyle from "./Login.module.css"
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const url = "http://localhost:5000/api/users";
    //         const { data: res } = await axios.post(url, data);
    //         console.log(res.message)
    //         navigate("/login")
    //     } catch (error) {
    //         if (error.response && error.response.status >= 400 && error.response <= 500) {
    //             setError(error.response.data.message)
    //             console.log(error)
    //         }
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = user;

        try {
            const res = await fetch("http://localhost:5000/api/auth", {
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
            </form>
        </div>
    );
};

export default Login;
