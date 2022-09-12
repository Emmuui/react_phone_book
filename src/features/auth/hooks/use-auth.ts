import { useAppDispatch, useAppSelector } from 'src/store';
import { useCallback } from 'react';
import { fetchUser, LoginParams } from '../redux/thunks';
import {login, logout} from '../redux/user-slice';

const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth);

  const onLogin = useCallback((data: LoginParams) => dispatch(fetchUser(data)), [dispatch]);

  const onTokenLogin = useCallback(() => {
    const email = localStorage.getItem('email');
    if (email) dispatch(login({ email }));
  }, [dispatch]);

  const onLogout = useCallback(() => {
    dispatch(logout());
    localStorage.removeItem('email');
  }, [dispatch]);

  return {
    ...auth,
    onLogin,
    onTokenLogin,
    onLogout,
  }

}

export default useAuth;
