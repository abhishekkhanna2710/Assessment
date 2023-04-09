import React from "react"
import { Routes, Route } from "react-router-dom";
import Sign_up from "./Components/Login_Form/SignUp/Sign_up"
import Login from "./Components/Login_Form/Login/Login";
import Home from "./Components/Home/Home";


function App() {
  const user = localStorage.getItem("token")
  return (
    <div className="App">

      <Routes>
        <Route path="/" exact element={<Home />} />

        <Route path="/login" exact element={<Login />} />

        <Route path="/signup" exact element={<Sign_up />} />
      </Routes>
    </div>
  )
}

export default App
