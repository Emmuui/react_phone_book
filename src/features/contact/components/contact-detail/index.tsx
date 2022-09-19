import React from 'react';
import styles from './styles.module.scss';
import { useAppSelector } from 'src/store';
import { useNavigate } from 'react-router-dom';


export const ContactDetailForm = () => {
  const current_contact = useAppSelector(state => state.contacts.current_contact);
  const navigate = useNavigate();
  const routeChange = () =>{
    const path = `/`;
    navigate(path);
  }

  return (
    <div>
      <div className={styles.container}>
        <div className="container__left">
          <p className={styles.contact__text_left}>Name</p>
          <p className={styles.contact__text_left}>Second name</p>
          <p className={styles.contact__text_left}>Age</p>
          <p className={styles.contact__text_left}>Phone</p>
          <p className={styles.contact__text_left}>Email</p>
          <p className={styles.contact__text_left}>Company</p>
          <p className={styles.contact__text_left}>Address</p>
          <p className={styles.contact__text_left}>Registered</p>
        </div>
        <div className="container__right">
          <p className="contact__text_right">{current_contact?.name.first}</p>
          <p className="contact__text_right">{current_contact?.name.last}</p>
          <p className="contact__text_right">{current_contact?.age}</p>
          <p className="contact__text_right">{current_contact?.phone}</p>
          <p className="contact__text_right">{current_contact?.email}</p>
          <p className="contact__text_right">{current_contact?.company}</p>
          <p className="contact__text_right">{current_contact?.address}</p>
          <p className="contact__text_right">{current_contact?.registered}</p>
        </div>
      </div>
      <div className={styles.contact__button_div}>
        <button className={styles.contact__button_back} onClick={routeChange}>
          Back
        </button>
      </div>
    </div>
  );
};
