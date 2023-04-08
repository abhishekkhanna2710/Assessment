import React from "react"
import { Routes, Route } from "react-router-dom";
import Sign_up from "./Components/Login_Form/SignUp/Sign_up"
import Login from "./Components/Login_Form/Login/Login";
import Home from "./Components/Home/Home";


function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/signup" element={<Sign_up />} />
      </Routes>
    </div>
  )
}

export default App
