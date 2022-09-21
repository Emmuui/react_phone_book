import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import { PrivateRoute } from './routes/private-route';
import { PublicRoute } from './routes/public-route';
import NotFoundPage from './pages/not-found-page';
import useAuth from './features/auth/hooks/use-auth';
import Layout from './shared/layout/layout';
import DetailView from './pages/contact-detail';
import CreateView from './pages/create-contact';
import getContactsHook from './features/contact/hooks/get-list-contacts';

function App() {
  const { onTokenLogin } = useAuth();
  const { getListContact, contacts, isLoading, error } = getContactsHook();

  useEffect(() => {
    onTokenLogin();
  }, [onTokenLogin]);

  useEffect(() => {
    if (contacts.length == 0) {
      getListContact();
    }
  }, [getListContact, contacts, isLoading, error]);

  return (
    <Routes>
      <Route
        path="/add"
        element={
          <Layout>
            <CreateView />
          </Layout>
        }
      />
      <Route
        path="/contact/:id"
        element={
          <Layout>
            <DetailView />
          </Layout>
        }
      />
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
