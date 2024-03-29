
import styles from './page.module.css'
import Products from '../Products/page';
import { findAllProducts } from '../../lib/data';

const AllProducts:any = async () =>{
  const products = await findAllProducts();
  return (
    <div className={`${styles['ListProducts-container']}`}>
    <Products
        products={products}
        title='Add product'
        action='add'
    />
    </div>
)}

export default AllProducts;
