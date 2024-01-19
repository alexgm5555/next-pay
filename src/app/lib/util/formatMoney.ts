export const formatMoney = (number = 0) => {
  //TODO: genera error de hidratacion en next con versiones de node menores a 14.xx
  const options = {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  };
  const numberFormat = new Intl.NumberFormat('es-CO', options);
  return numberFormat.format(number).replace(/\s/g, '');
};