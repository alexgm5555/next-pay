'use client'
import React, { useState } from 'react';
import styles from './page.module.css';
import { useDispatch } from 'react-redux';
import { dataToPay } from '../../../../provider/redux/userSlice';

import { useRouter } from 'next/navigation'

const PaymentForm: any = ({ onClose }: { onClose: () => void }) => {
  const dispatch =  useDispatch();
  const router = useRouter();

  const [showUserForm, setShowUserForm] = useState(true);

  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');

  const [messageError, setMessageError] = useState('');

  const [cardNumber, setCardNumber] = useState('');
  const [expirationM, setExpirationM] = useState('');
  const [expirationA, setExpirationA] = useState('');
  const [cvc, setCvc] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [installments, setInstallments] = useState('');
  const [cardType, setCardType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let validate = '';
    
    if(!showUserForm) {
      setCardType(determineCardType(cardNumber));
      if(!/^[0-9]*$/.test(idNumber) || idNumber === '') validate = 'Id Number';
      if(!/^[0-9]{3}$/.test(cvc)) validate = 'CVC';
      if(!/[0-9]{16}/.test(cardNumber.replaceAll(' ',''))) validate = 'Card Number';
      if(validate !== '') setMessageError(`Something wrong in ${validate} field. `)
      if(validate === '') {
        dispatch(dataToPay({
          fullName,
          phone,
          cardNumber,
          expirationM,
          expirationA,
          cvc,
          idNumber,
          installments,
        }));
        setMessageError('');
        router.push('/pages/payment?id=1236817263')
        onClose();
      }
    }
  };

  const determineCardType = (input: string) => {
    if (/^4/.test(input)) {
      return 'Visa';
    } else if (/^5[1-5]/.test(input)) {
      return 'MasterCard';
    }
    return '';
  };

  const bucle = (ini: number, n: number) => {
    let array = []
    for (let i = ini; i < n; i++) {
      let j = `${i+1}`;
      if (i <= 8) j = `0${i+1}`
      array.push(j);
    }
    return array;
  }

  const onHandleContinue = () => {
    let validate = '';
    if(!/^[0-9]{3}[0-9]{7}$/.test(phone.replaceAll(' ', ''))) validate = 'Phone'
    if(fullName === '') validate = 'Full Name';
    if(!/^\S*@\S*\.\S*$/.test(email)) validate = 'email'
    if(validate !== '') setMessageError(`Something wrong in ${validate} field. `)
    if(validate === '') setMessageError('')
    setShowUserForm(validate !== '');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {showUserForm ?
       <div>
        <label className={styles.label}>
          Email:
          <input className={styles.input} type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className={styles.label}>
          Full Name:
          <input className={styles.input} type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </label>
        <label className={styles.label}>
          Phone Number:
          <input className={styles.input} type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <button onClick={onHandleContinue}>Continue ...</button>
       </div> :
       <div>
        <label className={styles.label}>
        Card Number:
         <input className={styles.input} type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          </label>
          <label className={styles.label}>
            Expiration:
            <div className={styles.exp}>
              <select className={styles.select} value={expirationM} onChange={(e) => setExpirationM(e.target.value)}>
                {bucle(0, 12).map((i)=>{
                  return <option key={`mes${i}`} value={`${i}`}>{i}</option>
                })}
              </select>
              <select className={styles.select} value={expirationA} onChange={(e) => setExpirationA(e.target.value)}>
                {bucle(1924, 2006).reverse().map((i)=>{
                  return <option key={`año${i}`}value={`${i}`}>{i}</option>
                })}
              </select>
            </div>
          </label>
          <label className={styles.label}>
            CVC:
            <input className={styles.input} type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} />
          </label>
          <label className={styles.label}>
            ID Number:
            <input className={styles.input} type="text" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
          </label>
          <label className={styles.label}>
            Installments:
            <select className={styles.select} value={installments} onChange={(e) => setInstallments(e.target.value)}>
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="6">6</option>
            </select>
          </label>
          <button type="submit">Submit</button>
       </div>
      }
      {messageError && 
      <p>{messageError}</p>
      }
      {cardType}
    </form>
  );
};

export default PaymentForm;