import React, { ReactElement } from 'react';
import styles from './styles.module.scss';
import LogoutForm from 'src/features/auth/components/logout-form';
import { Link } from 'react-router-dom';

const Header = (): ReactElement => {
  return (
    <div className={styles.header}>
      <div className={styles.link__section}>
        <Link to={'/'} className={styles.link}>
          <p className={styles.header__p}>Home</p>
        </Link>
        <Link to={'/add'} className={styles.link}>
          <p className={styles.header__p}>Add</p>
        </Link>
      </div>
      <ul className={styles.nav__ul}>
        <li>
          <LogoutForm />
        </li>
      </ul>
    </div>
  );
};

export default Header;
