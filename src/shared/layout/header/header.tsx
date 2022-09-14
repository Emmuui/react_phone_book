import React, { ReactElement } from 'react';
import styles from './styles.module.scss';
import LogoutForm from '../../../features/auth/components/logout-form';

const Header = (): ReactElement => {
  return (
    <div className={styles.header}>
      <p className={styles.header__p}>Header</p>
      <ul className={styles.nav__ul}>
        <li>
          <LogoutForm />
        </li>
      </ul>
    </div>
  );
};

export default Header;
