import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home';
import LoginPage from './pages/login';
import { PrivateRoute } from './routes/private-route';
import { PublicRoute } from './routes/public-route';
import NotFoundPage from './pages/not-found-page';
import LogoutPage from './pages/logout';
import useAuth from './features/auth/hooks/use-auth';
import Layout from './features/layout/layout';

function App() {
  const { onTokenLogin } = useAuth();

  useEffect(() => {
    onTokenLogin();
  }, [onTokenLogin]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout>
              <HomePage />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/logout"
        element={
          <PrivateRoute>
            <Layout>
              <LogoutPage />
            </Layout>
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
