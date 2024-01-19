'use client'
import styles from './page.module.css'
import { ProductsInterface } from '@/app/lib/interfaces';
import { formatMoney } from '@/app/lib/util/formatMoney';
import { addProduct, removeProduct } from '../../../../provider/redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Products: any = ({products, title, action}: {
  products?: ProductsInterface[];
  title?: string,
  action: 'add' | 'remove'
}) =>{
  console.log('Products');
  
  const dispatch =  useDispatch();
  const data = useSelector((state: any) => state.user.products);

  const handleRemoveProduct = (product: ProductsInterface)=>{
    
    const index = data.findIndex((prod: ProductsInterface) => prod.id === product.id );
    let _data = [ ...data ]
    _data.splice(index, 1);
    dispatch(removeProduct({
      products: _data
    }));
  };

  const handleAddProduct = (product: ProductsInterface)=>{
    dispatch(addProduct({
      product
    }));
  };

  const handleClick = (product: ProductsInterface)=>{
    if(action === 'add')
      handleAddProduct(product)
    if(action === 'remove')
      handleRemoveProduct(product)
  };

  return (
    <div className={`${styles['Products-container']}`}>
      {products && products.map((product: any)=>(
        <div
          key={product.id}
          onClick={()=>handleClick(product)}
          className={`${styles['item']}`}
          title={title}
          data-testid={`item${product.id}`}
        >
          <p className={`${styles['pItem']}`}> {product.name}</p>
          <img 
            className={`${styles['img-car']}`}
            src={product.thumbnail}
            alt="Add to car"
          />
          <p className={`${styles['pItem']}`}> {product.description}</p>
          <p className={`${styles['pItem']}`}> {formatMoney(+product.cost)}</p>
          {product.quantity && <p> 
            Quantity: {product.quantity}
          </p>}
        </div>
      ))}
    </div>
)}

export default Products;
