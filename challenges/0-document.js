/**
 * Given a number, returns the negative version of that number
 * @param {number} n - input number
 * @returns {number} 'n' as a negative
 */
function asNegative(n) {
  let number = n;
  if (n > 0) {
    number = -n;
  }

  return number;
}

console.log(`asNegative(100):`, asNegative(100), `should be -100`);
console.log(`asNegative(-110):`, asNegative(-110), `should be -110`);
console.log(`asNegative(5000):`, asNegative(5000), `should be -5000`);
console.log(`asNegative(50.55):`, asNegative(50.55), `should be -50.55`);
