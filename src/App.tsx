import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home';
import LoginPage from './pages/login';
import { PrivateRoute } from './routes/private-route';
import { PublicRoute } from './routes/public-route';
import NotFoundPage from './pages/not-found-page';
import useAuth from './features/auth/hooks/use-auth';
import Layout from './shared/layout/layout';
import DetailView from "./pages/detail_view";

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
        path="/contacts/:id"
        element={
          <PrivateRoute>
            <Layout>
              <DetailView />
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
