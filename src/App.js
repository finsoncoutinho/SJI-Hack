import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManagerLogin from "./components/ManagerLogin/ManagerLogin";
import ManagerSignup from "./components/ManagerSignup/ManagerSignup";
import UserLogin from "./components/UserLogin/UserLogin";
import Main from "./screens/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ManagerLogin" element={<ManagerLogin />} />
        <Route path="/ManagerSignup" element={<ManagerSignup />} />
        <Route path="/UserLogin" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
