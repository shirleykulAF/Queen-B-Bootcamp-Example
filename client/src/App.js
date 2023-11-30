import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FocusMentor from "./pages/FocusMentor";
import HomeDetailedView from "./pages/HomeDetailedView";

// const port = process.env.PORT || 5001;


function App() {

    return (
     <Router>
        <Routes>
          <Route path="/" element={<HomeDetailedView/>}/>
          <Route path="/mentor/:id" element={<FocusMentor/>}/>
        </Routes>
     </Router>
  );
}

export default App;