export function formatNumber(number: number) {
  return new Intl.NumberFormat('de-Da').format(number) // Exmaple 123456 ====> 123,456
}
