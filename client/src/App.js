import React from 'react';
import {
  BrowserRouter as Router,
  Route, Routes,
} from "react-router-dom";
import MyComp from './Components/MyComp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyComp />}/>
      </Routes>
    </Router>

  );
}

export default App;