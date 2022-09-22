import { useAppDispatch, useAppSelector } from 'src/store';
import { useCallback } from 'react';
import { PhoneContactInterface } from '../ts/contact';
import { UpdateContactThunk } from '../redux/thunks';

const UpdateContactHook = () => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector(state => state.contacts);
  const updateContact = useCallback(
    (data: PhoneContactInterface) => dispatch(UpdateContactThunk(data)),
    [dispatch]
  );

  return {
    ...contacts,
    updateContact,
  };
};

export default UpdateContactHook;
