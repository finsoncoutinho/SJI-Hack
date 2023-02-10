import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ManagerSignup from "./components/ManagerSignup/ManagerSignup";
import UserLogin from "./components/UserLogin/UserLogin";
import UsersScreen from "./screens/UsersScreen";
import ManagerLogin from "./components/ManagerLogin/ManagerLogin";
import AddTeamScreen from "./screens/AddTeamScreen";
import AddUserScreen from "./screens/AddUserScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TeamsScreen from "./screens/TeamScreen";
import Main from "./screens/Main";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        {/* <Route path="/TeamsScreen" element={<TeamsScreen />} /> */}
        <Route path="/" element={<TeamsScreen />} />
        <Route path="/ManagerSignup" element={<ManagerSignup />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/ManagerLogin" element={<ManagerLogin />} />
        <Route path="/users" element={<UsersScreen />} />

        <Route path="/AddUser" element={<AddUserScreen />} />
        <Route path="/AddTeam" element={<AddTeamScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
