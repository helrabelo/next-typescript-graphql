export const formatPrice = (price: number | null) => {
  if (price === null) {
    return '0'
  }

  const formattedPrice = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD'
  }).format(price)

  return formattedPrice
}
