export const handleVitraunCartEvent = async (
  type: string,
  detail: unknown,
): Promise<void> => {
  if (type === 'addToCart') {
    console.info('[Vitraun] addToCart — send to your store backend:', detail)
    return
  }
  if (type === 'removeFromCart') {
    console.info('[Vitraun] removeFromCart — send to your store backend:', detail)
    return
  }
  if (type === 'redirectToCart') {
    console.info('[Vitraun] redirectToCart — redirect to checkout:', detail)
    return
  }
  if (type === 'analysisFinished') {
    console.info('[Vitraun] analysisFinished — camera ready:', detail)
  }
}
