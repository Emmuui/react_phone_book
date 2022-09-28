import React, { useCallback, useMemo, useState } from 'react';
import styles from './styles.module.scss';
import CreateContactHook from 'src/features/contact/hooks/create-contact';
const { v4: uuidv4 } = require('uuid');
import {useAppDispatch, useAppSelector} from 'src/store';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'src/shared/components/loader';
import { Error } from 'src/shared/components/error';
import UpdateContactHook from 'src/features/contact/hooks/update-contact';
import { PhoneContactInterface } from 'src/features/contact/ts/contact';
import {deleteContactThunk} from "../../redux/thunks";

export const CreateContact = ({ action }: { action: string }) => {
  const current_contact = useAppSelector(state => state.contacts.current_contact);
  const dispatch = useAppDispatch();
  const { isLoading, error, createContact } = CreateContactHook();
  const { updateContact } = UpdateContactHook();

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const today_date = yyyy + '-' + mm + '-' + dd;
  const navigate = useNavigate();

  const initialData = useMemo(
    () => ({
      id: uuidv4(),
      isActive: true,
      age: 0,
      name: {
        first: '',
        last: '',
      },
      company: '',
      email: '',
      phone: '',
      address: '',
      registered: today_date,
    }),
    [today_date]
  );

  const [state, setState] = useState(current_contact || initialData);

  const handleState = useCallback(
    (type: keyof PhoneContactInterface) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(prevState => ({ ...prevState, [type]: e.target.value }));
    },
    []
  );

  const handleName = useCallback(
    (type: keyof PhoneContactInterface['name']) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setState(prevState => ({
        ...prevState,
        name: { ...prevState.name, [type]: e.target.value },
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!current_contact) {
        createContact(state);
      }
      if (current_contact) {
        updateContact(state);
      }
      navigate('/');
    },
    [navigate, createContact, updateContact, state, current_contact]
  );

  const routeBack = () => {
    const path = `/`;
    navigate(path);
  };

  const handleDelete = () => {
      dispatch(deleteContactThunk(state.id))
  }

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className={styles.contact__div}>
      <form className={styles.contact__form} onSubmit={e => handleSubmit(e)}>
        <h1 className={styles.contact__form_h1}>{action} contact</h1>
        <div className={styles.form__contact_name}>
          <input
            className={styles.contact__field}
            type="text"
            placeholder="Name"
            value={state.name.first}
            onChange={handleName('first')}
            required
          />
          <input
            className={styles.contact__field}
            type="text"
            placeholder="Second name"
            value={state.name.last}
            onChange={handleName('last')}
          />
          <input
            className={styles.contact__field}
            type="text"
            placeholder="Phone"
            value={state.phone}
            onChange={handleState('phone')}
            required
          />
          <input
            className={styles.contact__field}
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={handleState('email')}
            required
          />
          <input
            className={styles.contact__field}
            type="text"
            placeholder="Age"
            value={state.age}
            onChange={handleState('age')}
          />
          <input
            className={styles.contact__field}
            type="text"
            placeholder="Company"
            value={state.company}
            onChange={handleState('company')}
          />
          <input
            className={styles.contact__field}
            type="text"
            placeholder="Address"
            value={state.address}
            onChange={handleState('address')}
          />
          <button disabled={isLoading} type="submit" className={styles.submit__btn}>
            {isLoading ? 'Loading' : 'Submit'}
          </button>
          <div className={styles.contact__button_div}>
            <button className={styles.contact__button_back} onClick={routeBack}>
              Back
            </button>
            {action == 'Create' ? (
              <button className={styles.contact__button_delete_no_display}>
                Delete
              </button>
            ) : (
              <button className={styles.contact__button_delete_display} onClick={handleDelete}>
                Delete
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
