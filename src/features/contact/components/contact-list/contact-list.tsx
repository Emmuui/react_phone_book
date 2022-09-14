import React, { ReactElement } from 'react';
import { useAppSelector } from 'src/store';
import styles from 'src/features/contact/components/contact-list/styles.module.scss';
import { PhoneContactInterface } from '../../ts/contact';



export const ContactListForm = () => {
  const contacts = useAppSelector(state => state.contacts.contacts);
  const PhoneContactList = ({
    configuration,
  }: {
    configuration: PhoneContactInterface;
  }): ReactElement => {
    return (
      <button className={styles.contact__info}>
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
