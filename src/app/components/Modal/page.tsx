'use client'
import styles from './page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import PaymentForm from '../PaymentForm/page';
import { modalOpen } from '../../../../provider/redux/modalSlice';

const Modal: React.FC = () => {
  const modalData = useSelector((state: any) => state.modal);
  const dispatch =  useDispatch();
  
  const onClose = ()=> {
    dispatch(modalOpen({
      open: false
    }));
  }

  return (
    <div className={styles.divcontainer}>
      {modalData.modalOpen && 
        <div className={styles.overlay} >
          <div className={styles.modal} >
            <button className={styles.closeButton} onClick={onClose}>
              X
            </button>
            <PaymentForm onClose={onClose} />
          </div>
        </div>
        }
    </div>
  );
};

export default Modal;
