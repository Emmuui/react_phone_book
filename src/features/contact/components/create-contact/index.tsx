import React, {useState} from 'react';
import styles from './styles.module.scss';
import CreateContactHook from '../../hooks/create-contact';
const { v4: uuidv4 } = require('uuid');
import PhoneInput from 'react-phone-number-input';
import {useAppSelector} from "src/store";
import {useNavigate} from "react-router-dom";
import {Loader} from "src/shared/components/loader";
import {Error} from "src/shared/components/error";

export const CreateContact = ({action}: {action: string}) => {
  const current_contact = useAppSelector(state => state.contacts.current_contact)

  const [id, setId] = useState(current_contact ? current_contact.id : uuidv4());
  const [email, setEmail] = useState(current_contact ? current_contact.email : '');
  const [phone, setPhone] = useState(current_contact ? current_contact.phone : '');
  const [first_name, setFirstName] = useState(current_contact ? current_contact.name.first : '');
  const [sec_name, setSecName] = useState(current_contact ? current_contact.name.last : '');
  const [age, setAge] = useState(current_contact ? current_contact.age : '');
  const [company, setCompany] = useState(current_contact ? current_contact.company : '');
  const [address, setAddress] = useState(current_contact ? current_contact.address : '');
  const { isLoading, error, createContact } = CreateContactHook();

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const today_date = yyyy + '-' + mm + '-' + dd;
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createContact({
      id: id,
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
    navigate('/');
  };

  const routeBack = () =>{
    const path = `/`;
    navigate(path);
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
          <div className={styles.contact__button_div}>
            <button className={styles.contact__button_back} onClick={routeBack}>
              Back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
