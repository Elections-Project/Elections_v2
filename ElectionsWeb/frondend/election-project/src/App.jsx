import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Candidates from './pages/Candidates/candidates';
import Home from './pages/Home/home';
import AboutUs from './pages/AboutUs/aboutUs';
import Login from './pages/Auth/Login/login';
import ElectionLists from './pages/ElectionLists/electionLists';
import Results from './pages/Results/results';
import Voting from './pages/Voting/voting';
import LocalRequest from './pages/Requests/localRequest';
import AddList from './pages/Requests/AddList';

import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/electionLists" element={<ElectionLists />} />
        <Route path="/results" element={<Results />} />
        <Route path="/voting" element={<Voting />} /> */}
        <Route path="/localRequest" element={<LocalRequest />} />
        <Route path="/AddList" element={<AddList />} />

      </Routes>
    </Router>
  );
}

export default App;
