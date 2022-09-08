import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/home';
import LoginPage from './pages/login';
import LogoutPage from './pages/logout';


function App() {

  return (
      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/home" element={<HomePage />} />
      </Routes>
  );
}

export default App

