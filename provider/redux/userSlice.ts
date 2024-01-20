import { UserInterface } from '@/app/lib/interfaces';
import { getHashPayment } from '@/app/lib/util/getHashPayment';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';



const initialState: UserInterface = {
  name: "",
  email: "",
  products: [],
  total: 0,
  idTran: '',
  fullName: '',
  phone: '',
  cardNumber: '',
  expirationM: '',
  expirationA: '',
  cvc: '',
  idNumber: '',
  installments: '',
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const { product } = action.payload;
      state.products?.push(product);
    },
    removeProduct: (state, action) => {
      const { products } = action.payload;
      state.products = products;
    },
    sumTotal: (state, action) => {
      const { total } = action.payload;
      state.total = total;
      state.idTran = uuid();
    },
    dataToPay: (state, action) => {
      const {
        fullName,
        phone,
        cardNumber,
        expirationM,
        expirationA,
        cvc,
        idNumber,
        installments,
      } = action.payload;
      state.fullName = fullName;
      state.phone = phone;
      state.cardNumber= cardNumber;
      state.expirationA= expirationA;
      state.expirationM= expirationM;
      state.cvc= cvc;
      state.idNumber= idNumber;
      state.installments= installments;
    }
  }
});

export const {
  addProduct,
  removeProduct,
  sumTotal,
  dataToPay
} = userSlice.actions;
export default userSlice.reducer;
