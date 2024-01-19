import { ProductsInterface } from "./products.interface";

export interface UserInterface {
  name: string,
  email: string,
  products?: ProductsInterface[],
  total?: number,
  idTran?: string,
}