import products  from "../products.json";

export const findAllProducts = async () => {
  await new Promise ((resolve)=>{
    setTimeout(resolve, 0);
  });
  return products
}
