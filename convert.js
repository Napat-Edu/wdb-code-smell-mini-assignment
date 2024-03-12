function dollarsToRubles(dollars) {
  const exchangeRate = 1.25;
  const rublesValueToDollar = 60;
  let dollarsCount = dollars * exchangeRate;
  return dollarsCount * rublesValueToDollar;
}
module.exports = dollarsToRubles;
