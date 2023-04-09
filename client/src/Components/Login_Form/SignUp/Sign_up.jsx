import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"

const Sign_up = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password } = user;

        try {
            const res = await fetch("http://localhost:5000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const data = await res.json();


            if (!data.success) {
                setError(data.message);
                console.log(data);

            } else if (data.success) {
                console.log(data.message);
                window.location.href = "/login";

            }

        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response <= 500) {
                setError(error.response.data.message)
                console.log(error)
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={user.name} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={user.email} onChange={handleInputChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={user.password} onChange={handleInputChange} />
                </label>
                {error && <div>{error}</div>}
                <button type="submit">Sign up</button>
            </form>

            <NavLink className='navs'
                to="/login"
            >
                Already Have an Account
            </NavLink>
        </>
    );
};

export default Sign_up;
