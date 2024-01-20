import { ProductsInterface } from "./products.interface";

export interface UserInterface {
  name?: string,
  email?: string,
  products?: ProductsInterface[],
  total?: number,
  idTran?: string,
  fullName?: string,
  phone?: string,
  cardNumber?: string,
  expirationM?: string,
  expirationA?: string,
  cvc?: string,
  idNumber?: string,
  installments?: string,
}