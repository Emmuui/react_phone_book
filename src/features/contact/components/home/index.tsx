import React, { ReactElement } from 'react';
import { useAppSelector } from 'src/store';
import styles from 'src/features/contact/components/home/styles.module.scss';
import { PhoneContactInterface } from '../../ts/contact';
import { Link } from 'react-router-dom';

export const ContactListForm = () => {
  const contacts = useAppSelector(state => state.contacts.contacts);
  const PhoneContactList = ({
    configuration,
  }: {
    configuration: PhoneContactInterface;
  }): ReactElement => {
    return (
      <Link to={`/contact/${configuration.id}`}>
        <button className={styles.contact__info}>
          <p className={styles.contact__text}>{configuration.name.first}</p>
          <p className={styles.contact__text}>{configuration.phone}</p>
          <p className={styles.contact__text}>{configuration.email}</p>
        </button>
      </Link>
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
