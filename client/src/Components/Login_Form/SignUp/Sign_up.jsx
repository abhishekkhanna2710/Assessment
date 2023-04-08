import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sign_up = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, password } = user;

        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
        });

        try {
            const data = await res.json();

            console.log(data)

            if (response.ok) {
                alert("Happy");
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
