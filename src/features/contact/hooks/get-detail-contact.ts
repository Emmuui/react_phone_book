import { useAppDispatch, useAppSelector } from 'src/store';
import { useCallback } from 'react';
import { FetchDetailContact } from '../redux/thunks';


const getDetailContactHook = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(state => state.contacts);

  const getDetailContact = useCallback((id: string) => dispatch(FetchDetailContact(id)), [dispatch]);

  return {
    ...contacts,
    getDetailContact,
  };
};

export default getDetailContactHook;
