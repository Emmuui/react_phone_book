import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/user-slice';
import { logout } from '../../redux/user-slice';
import styles from './styles.module.scss';

const LogoutForm = (): ReactElement => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      <h1 className={styles.name}>Hello {user.user}</h1>
      <button className={styles.logout__button_form} onClick={e => handleLogout(e)}></button>
    </div>
  );
};

export default LogoutForm;
