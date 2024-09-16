import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// components
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MentorHome from './pages/MentorHome';

function App() {
  
  const { user } = useAuthContext()

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
