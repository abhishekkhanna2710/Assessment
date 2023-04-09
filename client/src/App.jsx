import React from "react"
import { Routes, Route } from "react-router-dom";
import Sign_up from "./Components/Login_Form/SignUp/Sign_up"
import Login from "./Components/Login_Form/Login/Login";
import Home from "./Pages/Home/Home";


function App() {
  const user = localStorage.getItem("token")
  return (
    <div className="App">

      <Routes>
        <Route path="/" exact element={<Sign_up />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/home" exact element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
