import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Complaints from "./pages/Complaints";
import Notices from "./pages/Notices";
import Marketplace from "./pages/Marketplace";

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
    </Routes>
  );
}

export default App;