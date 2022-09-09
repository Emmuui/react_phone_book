import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';

const NotFound = () => {
  return (
    <div className={styles.not_found__div}>
      <p className={styles.not_found__text}>
        Oops. This page doesn`t exist. <Link to={'/'}>Go home</Link>
      </p>
    </div>
  );
};

export default NotFound;
