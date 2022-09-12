import { ReactElement } from 'react';
import styles from './styles.module.scss';

const HomePage = (): ReactElement => {
    const email = localStorage.getItem('email')
  return (
      <div className={styles.main__div}>
        <h1 className={styles.main_text}>Hello {email}</h1>
      </div>
  );
};

export default HomePage;
