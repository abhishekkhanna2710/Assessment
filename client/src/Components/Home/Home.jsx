import React from 'react'
import { Link } from 'react-router-dom'
const handleOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
}


const Home = () => {
    return (
        <div>
            <h1>Home</h1>

            <Link to="/signup">Register</Link>

            <button onClick={handleOut}>Logout</button>
        </div>


    )
}

export default Home