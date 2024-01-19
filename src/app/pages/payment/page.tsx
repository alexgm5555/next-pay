'use client'
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';
import { findIdTransaction } from '../../lib/data';
import Link from 'next/link';
import Products from '../../components/Products/page';

export default async function Payment() {
  const serachParams = useSearchParams();
  
  let idParam = serachParams.get('id');
  // To mock api backend
  idParam = '166600-670000-676777';

  const transaction = await findIdTransaction(idParam);
  
  return (
  <div className={`${styles['Payment-container']}`}>
    {
      transaction.state === 'aprove' ?
      <span className={`${styles['green']}`}>
        The purchase was sucessfull
      </span>:
      <span className={`${styles['red']}`}>
        The request was rejected, please try again!
      </span>
    }
    <Products
      products={transaction.products}
      title=''
      action=''
    ></Products>
    <br />
    <Link key={'back'} href={'/'}>
      <button>
        Return to Comerce
      </button>
    </Link>
  </div>
)}
