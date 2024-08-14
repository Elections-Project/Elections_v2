import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Candidates from './pages/Candidates/candidates';
import Home from './pages/Home/home';
import AboutUs from './pages/AboutUs/aboutUs';
import Login from './pages/Auth/Login/login';
import ElectionLists from './pages/ElectionLists/electionLists';
import Results from './pages/Results/results';
import Voting from './pages/Voting/voting';
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/electionLists" element={<ElectionLists />} />
        <Route path="/results" element={<Results />} />
        <Route path="/voting" element={<Voting />} />
      </Routes>
    </Router>
  );
}

export default App;
