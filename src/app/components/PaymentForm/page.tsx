'use client'
import React, { useState } from 'react';
import styles from './page.module.css';

const PaymentForm: any = ({ onClose }: { onClose: () => void }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvc, setCvc] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [installments, setInstallments] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log('Form submitted:', { cardNumber, expiration, cvc, idNumber, installments });
    onClose();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
       <label className={styles.label}>
        Card Number:
         <input className={styles.input} type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </label>
       <label className={styles.label}>
        Expiration:
         <input className={styles.input} type="text" value={expiration} onChange={(e) => setExpiration(e.target.value)} />
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
          {/* Agrega más opciones según sea necesario */}
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentForm;