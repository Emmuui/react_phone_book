import React from 'react';
import {Routes, Route, Navigate, Outlet} from 'react-router-dom'
import HomePage from './pages/home';
import LoginPage from './pages/login';
import LogoutPage from './pages/logout';
import {selectUser} from "./features/auth/redux/user-slice";
import {useSelector} from "react-redux";
import {PrivateRoute} from "./pages/PrivateRoute";




function App() {
  return (
      <Routes>
          <Route path="/home" element={
                  <PrivateRoute>
                      <HomePage />
                  </PrivateRoute>
          }/>
          <Route path="/login" element={<LoginPage />} />
      </Routes>
  );
}

export default App

