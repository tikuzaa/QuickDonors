import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
// import FindDonors from "./pages/FindDonors";
// import BloodRequest from "./pages/BloodRequest";
// import Notifications from "./pages/Notifications";
// import Profile from "./pages/Profile";
// import AdminPanel from "./pages/AdminPanel";
// import NotFound from "./pages/NotFound"; // 404 Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/register" element={<Register />} />
        <Route path="/find-donors" element={<FindDonors />} />
        <Route path="/blood-request" element={<BloodRequest />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
