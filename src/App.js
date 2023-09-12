import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";

import './App.css';
import { MobileView } from "./components/MobileView";

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/mobile' element={<MobileView />} />
      </Routes>
    </Router>
  );
}

export default App;
