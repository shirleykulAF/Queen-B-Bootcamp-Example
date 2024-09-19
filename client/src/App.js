import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// components
import Home from "./pages/Home";
import Welcome from "./pages/WelcomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MentorHome from './pages/MentorHome';
import Navbar from './components/Navbar'; // if Navbar is inside a components folder


function App() {
  
  const { user } = useAuthContext()

  return (
    <div className="App">
      <Navbar />
      <div style={{ paddingTop: '60px' }}>
      <BrowserRouter>
        <div className='pages'> 
          <Routes>
            <Route
              path="/"
              element={ 
                  <Welcome />
              }
            />
            <Route
              path="/login"
              element={ !user ?
                <Login />
                : user.userType==='mentee' ? <Navigate to='/home'/> : <Navigate to='/mentorHome'/>
              }
            />
            <Route
              path="/signup"
              element={ !user ?
                <Signup />
                : user.userType==='mentee' ? <Navigate to='/home'/> : <Navigate to='/mentorHome'/>
              }
            />
            <Route
              path="/home"
              element={ <Home/> }
            />
            <Route
              path="/mentorHome"
              element={ <MentorHome/> }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div></div>
  );
}

export default App;
