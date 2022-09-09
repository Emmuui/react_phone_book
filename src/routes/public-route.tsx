import React, { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../features/auth/hooks/use-auth';

type Props = {
  children?: ReactElement;
};

const PublicRoute: React.FC<Props> = ({ children }) => {
  const { loggedIn } = useAuth();

  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
};

export { PublicRoute };
