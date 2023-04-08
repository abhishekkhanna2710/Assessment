import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sign_up = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            });

            const data = await response.json();
            console.log(data);

            if (response.ok) {
                window.location.href = '/login';
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                </label>
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
