import { Link } from 'react-router-dom';
import React, { ReactElement, useState } from 'react';
import styles from './styles.module.scss';
import useAuth from '../../hooks/use-auth';

const LoginForm = (): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {onLogin, isLoading} = useAuth();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin({ email: email, password: password, });
  };
  return (
    <div className={styles.login}>
      <form className={styles.login__form} onSubmit={e => handleSubmit(e)}>
        <h1>Login</h1>
        <input
          className={styles.login_form__input}
          type="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className={styles.login_form__input}
          type="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button disabled={isLoading} type="submit" className={styles.submit__btn}>
          {isLoading ? 'Loading' : 'Submit'}
        </button>
        <p className={styles.home_page}>
          Or <Link to="/">return to home page</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
