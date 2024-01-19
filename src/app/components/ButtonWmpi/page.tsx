
'use client'
import { useSelector } from 'react-redux';
import { getHashPayment } from '@/app/lib/util/getHashPayment';
import { useEffect, useState } from 'react';
import { formatMoney } from '@/app/lib/util/formatMoney';

const ButtonWmpi:any = async () =>{
  const [integrity, setIntegrity] = useState<string>();
  
  const data = useSelector((state: any) => state.user);

  const handleData = async () =>{
    const hashHex = await getHashPayment({
      amount: data.total,
      expirationData: '2023-06-09T20:28:50.000Z',
      idTransaction: data.idTran
      });
    setIntegrity(hashHex);
  }

  useEffect(() => {
    handleData();
  }, [data]);

  // const html = `
  // <form>
  //   <script
  //     src="https://checkout.wompi.co/widget.js"
  //     data-render="button"
  //     data-public-key="pub_test_3PjC5NhtsBTCkoIbfYS1OcAMnEzu4ZvR"
  //     data-currency="COP"
  //     data-amount-in-cents=${+data.total * 100} 
  //     data-reference=${data.idTran}
  //     data-signature:integrity=${integrity}
  //     data-redirect-url="http://localhost:3000/payment"
  //     ></script>
  //   <button type="submit">Go to payment</button>
  // </form>`
  
  return (
    <div>
        {/* <Suspense fallback={<>cargando...</>}> */}
          {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
        {/* </Suspense> */}
        <form action="https://checkout.wompi.co/p/" method="GET">
          <input type="hidden" name="public-key" value="pub_test_3PjC5NhtsBTCkoIbfYS1OcAMnEzu4ZvR"/>
          <input type="hidden" name="currency" value="COP" />
          <input type="hidden" name="amount-in-cents" value={data.total * 100} />
          <input type="hidden" name="reference" value={data.idTran} />
          <input type="hidden" name="signature:integrity" value={integrity}/>
          <input type="hidden" name="redirect-url" value="https://prueba-tecnica-alexander-guiza.netlify.app/pages/payment" />
          <button type="submit">{formatMoney(data.total)} Pagar con Wompi</button>
        </form>
    </div>
)};

export default ButtonWmpi;
