import { HashPayment } from "../interfaces/hashPayment.interface";


export const getHashPayment= async ({
  expirationData,
  name,
  securityCode,
  numberCard,
  amount,
  idTransaction
}: HashPayment ) => {
  const integrity = 'test_integrity_YhJHRplKgIjPb1Id8Tr8mMjozdKZt9SU';
  amount = amount * 100
  var cadenaConcatenada = `${idTransaction}${amount}COP${integrity}`;
  
  //Ejemplo
  const encondedText = new TextEncoder().encode(cadenaConcatenada);
  const hashBuffer = await crypto.subtle?.digest('SHA-256', encondedText);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // "37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
  return hashHex;
}
