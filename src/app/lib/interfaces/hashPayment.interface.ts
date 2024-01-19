
export interface HashPayment {
  expirationData: string;
  securityCode?: string;
  numberCard?: string;
  name?: string;
  amount: number;
  idTransaction: string
}