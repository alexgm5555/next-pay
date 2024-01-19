'use client'
import { useSelector } from 'react-redux';
import styles from './page.module.css'
import Image from 'next/image';
import { Suspense } from 'react';
// import ButtonWompi from '../ButtonWompi/page';

const ShoppingCar:any = () =>{
  const data = useSelector((state: any) => state.user);
console.log(data);

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
        {/* {data.total !== 0 && 
        <Suspense fallback={<>cargando...</>}>
          <ButtonWompi/>
        </Suspense>
        } */}
      </div>
    </div>
)}
export default ShoppingCar;
