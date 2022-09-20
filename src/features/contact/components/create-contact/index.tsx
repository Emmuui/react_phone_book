import React, { useState } from 'react';
import styles from './styles.module.scss';
import CreateContactHook from '../../hooks/create-contact';
const { v4: uuidv4 } = require('uuid');
import PhoneInput from 'react-phone-number-input';

export const CreateContact = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState<string>('');
  const [first_name, setFirstName] = useState('');
  const [sec_name, setSecName] = useState('');
  const [age, setAge] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const { isLoading, createContact } = CreateContactHook();

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const today_date = yyyy + '-' + mm + '-' + dd;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createContact({
      id: uuidv4(),
      isActive: true,
      age: +age,
      name: {
        first: first_name,
        last: sec_name,
      },
      company: company,
      email: email,
      phone: phone,
      address: address,
      registered: today_date,
    });
  };

  return (
    <div className={styles.contact__div}>
      <form className={styles.contact__form} onSubmit={e => handleSubmit(e)}>
        <h1 className={styles.contact__form_h1}>Create new contact</h1>
        <div className={styles.form__contact_name}>
          <input
            className={styles.contact__field}
            type="text"
            placeholder="Name"
            value={first_name}
            onChange={e => setFirstName(e.target.value)}
            required
          />
          <input
            className={styles.contact__field}
            type="text"
            placeholder="Second name"
            value={sec_name}
            onChange={e => setSecName(e.target.value)}
          />
          <input
            className={styles.contact__field}
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
          />
          <input
            className={styles.contact__field}
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            className={styles.contact__field}
            type="text"
            placeholder="Age"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
          <input
            className={styles.contact__field}
            type="text"
            placeholder="Company"
            value={company}
            onChange={e => setCompany(e.target.value)}
          />
          <input
            className={styles.contact__field}
            type="text"
            placeholder="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <button disabled={isLoading} type="submit" className={styles.submit__btn}>
            {isLoading ? 'Loading' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};
