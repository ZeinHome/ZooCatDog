export function leavePrice9(prices) {
  const rusult = [];

  for (let price of prices) {
    const lastNumber = String(price).slice(-1);
    if (lastNumber === '9') {
      rusult.push(price);
    }
  }
  return rusult;
}
const array = [399, 1599, 399, 50, 10, 10, 70, 79, 20, 89];
