import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Complaints from "./pages/Complaints";
import Notices from "./pages/Notices";
import Marketplace from "./pages/Marketplace";
import Emergency from "./pages/Emergency";
import Profile from "./pages/Profile";
import Visitors from "./pages/Visitors";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/complaints" element={<Complaints />} />
      <Route path="/notices" element={<Notices />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/visitors" element={<Visitors />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;