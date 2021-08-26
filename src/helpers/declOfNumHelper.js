export const declOfNumHelper = (n, text) => {
  n = Math.abs(n) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) {
    return text[2];
  }
  if (n1 > 1 && n1 < 5) {
    return text[1];
  }
  if (n1 === 1) {
    return text[0];
  }
  return text[2];
};
