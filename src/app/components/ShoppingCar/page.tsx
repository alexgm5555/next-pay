'use client'
import { useDispatch, useSelector } from 'react-redux';
import styles from './page.module.css'
import Image from 'next/image';
import { Suspense, useState } from 'react';
import { formatMoney } from '@/app/lib/util/formatMoney';
// import ButtonWmpi from '../ButtonWmpi/page';
import { modalOpen } from '../../../../provider/redux/modalSlice';

const ShoppingCar:any = () =>{
  const dispatch =  useDispatch();
  const data = useSelector((state: any) => state.user);

  const handleOpenModal = () => {
    dispatch(modalOpen({
      open: true,
      // onClose:handleCloseModal
    }));
  };

  return (
    <div 
      className={`${styles['ShoppingCar-container']}`}>
      <div className={`${styles['div-car']}`}>
        <span className={`${styles['dot']}`}>
          <span className={`${styles['_span']}`}>
            {data.products.length | 0}
          </span>
        </span>
        <Image 
          className={`${styles['img-car']}`}
          src='/images/shoppin_car.png'
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className={`${styles['total-span']}`}>

        {data.total !== 0 && 
        // <Suspense fallback={<div className={`${styles['loading']}`}>cargando...</div>}>
        //   <ButtonWmpi/>
        // </Suspense>
          <div>
            <button onClick={handleOpenModal}> {formatMoney(data.total)} To Pay</button>
          </div>
        }
      </div>
    </div>
)}
export default ShoppingCar;
