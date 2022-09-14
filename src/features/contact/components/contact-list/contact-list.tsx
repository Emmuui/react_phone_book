import React, { ReactElement } from 'react';
import { useAppSelector } from 'src/store';
import { useNavigate } from 'react-router-dom';
import styles from 'src/features/contact/components/contact-list/styles.module.scss';

export const DetailViewForm = () => {
  interface PhoneContactList {
    id: string;
    name: string;
    email: string;
    phone: string;
  }

  const PhoneContactList: React.FC<PhoneContactList> = ({ id,name, phone, email }) => {
    return (
        <button className={styles.contact__info}>
          <p className={styles.contact__text}>{name}</p>
          <p className={styles.contact__text}>{phone}</p>
          <p className={styles.contact__text}>{email}</p>
        </button>
    );
  };

  const contacts = useAppSelector(state => state.contacts.contacts);
  return (
      <div className={styles.contact__main_div}>
        {contacts.map((data, key) => {
          return (
              <div key={key}>
                <PhoneContactList
                    key={key}
                    id={data.id}
                    name={data.name.first}
                    phone={data.phone}
                    email={data.email}
                />
              </div>
          );
        })}
      </div>
  );
};
