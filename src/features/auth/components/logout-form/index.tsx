import React, { ReactElement } from 'react';
import styles from './styles.module.scss';
import useAuth from "../../hooks/use-auth";

const LogoutForm = (): ReactElement => {
  const {onLogout} = useAuth();
  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    onLogout();
  };
  return (
    <a className={styles.logout__button_form} onClick={e => handleLogout(e)}>Logout</a>
  );
};

export default LogoutForm;
