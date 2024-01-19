import transactions  from "../transaction.json";

export const findIdTransaction = async (id: string) => {
  await new Promise ((resolve)=>{
    setTimeout(resolve, 0);
  });
  return transactions[id === '166600-670000-676777'? 1: 0];
}