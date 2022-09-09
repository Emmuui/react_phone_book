import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import { PrivateRoute } from './routes/private-route';
import { PublicRoute } from './routes/public-route';
import { login } from './features/auth/redux/user-slice';
import { useAppDispatch } from './store';
import NotFoundPage from './pages/not-found-page/not-found-page';
import LogoutPage from './pages/logout';

function App() {
  const email = localStorage.getItem('email');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (email) dispatch(login({ email }));
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/logout"
        element={
          <PrivateRoute>
            <LogoutPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
