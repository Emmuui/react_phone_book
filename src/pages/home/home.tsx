import React, { ReactElement } from 'react';
import styles from './styles.module.scss';
import { phones } from '../../phones';
import { useNavigate } from 'react-router-dom';

const HomePage = (): ReactElement => {
  const local_email = localStorage.getItem('email');

  interface PhoneContactList {
    id: string;
    name: string;
    email: string;
    phone: string;
  }

  function ButtonHandle(id: string) {
    const navigate = useNavigate();
    navigate(`/${id}`)
  }

  const PhoneContactList: React.FC<PhoneContactList> = ({ id,name, phone, email }) => {
    return (
      <button className={styles.contact__info} onClick={() => ButtonHandle(id)}>
        <p className={styles.contact__text}>{name}</p>
        <p className={styles.contact__text}>{phone}</p>
        <p className={styles.contact__text}>{email}</p>
      </button>
    );
  };

  return (
    <div className={styles.main__div}>
      <h1 className={styles.main_text}>Hello {local_email}</h1>
      <div className={styles.contact__main_div}>
        {phones.map((data, key) => {
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
    </div>
  );
};

export default HomePage;
