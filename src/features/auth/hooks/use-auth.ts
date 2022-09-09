import { useAppDispatch, useAppSelector } from 'src/store';
import { useCallback } from 'react';
import { fetchUser, LoginParams } from '../redux/thunks';
import { login } from '../redux/user-slice';

const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth);

  const onLogin = useCallback((data: LoginParams) => dispatch(fetchUser(data)), []);

  const onTokenLogin = useCallback(() => {
    const email = localStorage.getItem('email');
    if (email) dispatch(login({ email }));
  }, []);


  return {
    ...auth,
    onLogin,
    onTokenLogin
  }

}

export default useAuth;