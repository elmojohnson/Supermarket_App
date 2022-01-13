export const numberFormat = (value) =>
  new Intl.NumberFormat('default', {
    style: 'currency',
    currency: 'AUD'
  }).format(value);