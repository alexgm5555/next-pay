import styles from './page.module.css';
import { findIdTransaction } from '../../lib/data';
import Link from 'next/link';
import Products from '../../components/Products/page';
import { ProductsInterface } from '@/app/lib/interfaces';

export async function getServerSideProps(context: any) {
  let { id } = context.params;
  // To mock api backend
  id = '166600-670000-676777';
  const transaction: {
    id: string;
    state: string;
    idPayAway: string;
    products: ProductsInterface[];
} = await findIdTransaction(id);
  return {
    props: {
      transaction
    }
  } 
}

export default async function Payment({transaction}: {transaction: {
  id: string;
  state: string;
  idPayAway: string;
  products: ProductsInterface[];
}}) {
  
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
