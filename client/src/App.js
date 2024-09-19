import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate
import { useAuthContext } from "./hooks/useAuthContext";

// components
import Home from "./pages/Home";
import WelcomePage from "./pages/WelcomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MentorHome from "./pages/MentorHome";
import Navbar from "./components/Navbar"; // if Navbar is inside a components folder

function App() {
  const { user } = useAuthContext();

  return (
    <Router>
      <div>
        {/* Navbar appears on all pages */}
        <Navbar />
        <div style={{ paddingTop: '60px' }}>

        {/* Wrap routes in Routes */}
        <Routes>
          {/* Route for the welcome page */}
          <Route path="/" element={<WelcomePage />} />

          {/* Route for the signup page */}
          <Route
            path="/signup"
            element={
              !user ? (
                <Signup />
              ) : user.userType === "mentee" ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/mentorHome" />
              )
            }
          />

          {/* Route for the login page */}
          <Route
            path="/login"
            element={
              !user ? (
                <Login />
              ) : user.userType === "mentee" ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/mentorHome" />
              )
            }
          />

          {/* Routes for home pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/mentorHome" element={<MentorHome />} />
        </Routes>
      </div></div>
    </Router>
  );
}

export default App;
