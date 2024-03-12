function total(numbers) {
  const result = numbers
    .split(",")
    .map((part) => parseInt(part))
    .filter((integer) => checkIsInteger(integer))
    .filter((integer) => checkIsIntergerInValidRange(integer))
    .reduce((acc, curr) => acc + curr, 0);

  return result;
}

function checkIsInteger(integer) {
  return !isNaN(integer);
}

function checkIsIntergerInValidRange(integer) {
  return integer >= 0 && integer <= 1000;
}

module.exports = total;
