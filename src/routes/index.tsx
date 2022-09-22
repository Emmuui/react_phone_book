import React, { ReactElement } from 'react';
import { ROUTES } from './routes';

import LoginPage from '../pages/login';
import HomePage from '../pages/home';
import DetailView from '../pages/contact-detail';
// import CreateView from '../pages/create-update-contact';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './private-route';
import NotFoundPage from '../pages/not-found-page';
import Layout from '../shared/layout/layout';

type RouteType = {
  path: string;
  element: ReactElement;
};

const AppRoutes = (): ReactElement => {
  const routes = {
    publicRoutes: [{ path: ROUTES.login, element: <LoginPage /> }],
    privateRoutes: [
      { path: ROUTES.homePage.path, element: <HomePage /> },
      { path: ROUTES.contactDetail.path, element: <DetailView /> },
      // { path: ROUTES.contactCreate.path, element: <CreateView /> },
    ],
  };
  return (
    <Routes>
      {Object(routes.publicRoutes).map((route: RouteType, index: number) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      {Object(routes.privateRoutes).map((route: RouteType, index: number) => (
        <Route key={index} path={route.path} element={<PrivateRoute />}>
          <Route key={index} path={route.path} element={<Layout />}>
            <Route path={route.path} element={route.element} />
          </Route>
        </Route>
      ))}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
