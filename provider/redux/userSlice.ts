import { UserInterface } from '@/app/lib/interfaces';
import { getHashPayment } from '@/app/lib/util/getHashPayment';
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';



const initialState: UserInterface = {
  name: "",
  email: "",
  products: [],
  total: 0,
  idTran: ''
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
  }
});

export const {
  addProduct,
  removeProduct,
  sumTotal,
} = userSlice.actions;
export default userSlice.reducer;
