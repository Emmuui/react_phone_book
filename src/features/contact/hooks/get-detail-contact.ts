import { useAppDispatch, useAppSelector } from 'src/store';
import { useCallback } from 'react';
import { fetchDetailContact } from '../redux/thunks';


const getDetailContactHook = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(state => state.contacts);

  const getDetailContact = useCallback((id: string) => dispatch(fetchDetailContact(id)), [dispatch]);

  return {
    ...contacts,
    getDetailContact,
  };
};

export default getDetailContactHook;
