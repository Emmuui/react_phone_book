import React, { ReactElement } from 'react';
import { useAppSelector } from 'src/store';
import styles from 'src/features/contact/components/home/styles.module.scss';
import { PhoneContactInterface } from '../../ts/contact';
import {Link, useNavigate} from 'react-router-dom';
import getDetailContactHook from "../../hooks/get-detail-contact";

export const ContactListForm = () => {
  const contacts = useAppSelector(state => state.contacts.contacts);
  const PhoneContactList = ({
    configuration,
  }: {
    configuration: PhoneContactInterface;
  }): ReactElement => {
    const { getDetailContact } = getDetailContactHook();
    const navigate = useNavigate();
    const routeChange = () =>{
      const path = `/contact/${configuration.id}`;
      navigate(path);
    }
    return (
      <button className={styles.contact__info} onClick={routeChange}>
        <p className={styles.contact__text}>{configuration.name.first}</p>
        <p className={styles.contact__text}>{configuration.phone}</p>
        <p className={styles.contact__text}>{configuration.email}</p>
      </button>
    );
  };
  return (
    <div className={styles.contact__main_div}>
      {contacts?.map(data => {
        return <PhoneContactList key={data.id} configuration={data} />;
      })}
    </div>
  );
};

export default ContactListForm;
