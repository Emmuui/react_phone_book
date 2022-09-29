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
import { ROUTES } from './routes/routes';

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
    <Layout>
      <Routes>
        <Route path="/add" element={<CreateView />} />
        <Route path={ROUTES.dynamic.contact_detail()} element={<DetailView />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
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
    </Layout>
  );
}

export default App;
