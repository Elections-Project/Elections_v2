import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Log_in from './pages/Auth/Login/sign_up';
import Log_in_new from './pages/Auth/Login/log_in_new';
import Log_in_home from './pages/Auth/Login/log_in_home';
import Update_password from './pages/Auth/Login/update_password';
import Candidates from './pages/Candidates/candidates';
import Home from './pages/Home/home';
import AboutUs from './pages/AboutUs/aboutUs';
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
        <Route path="/" element={<Home />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/electionLists" element={<ElectionLists />} />
        <Route path="/results" element={<Results />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/localRequest" element={<LocalRequest />} />
        <Route path="/AddList" element={<AddList />} />

        <Route path="/voting" element={<Voting />} />

        <Route path="/log-in" element={<Log_in />} />
        <Route path="/log-in-new" element={<Log_in_new />} />
        <Route path="/log-in-home" element={<Log_in_home />} />
        <Route path="/update-pass" element={<Update_password></Update_password>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
