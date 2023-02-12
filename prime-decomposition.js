/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

function primeFactors(n){
  let factors = [];
  let d = 2;
  while (n > 1) {
    while (n % d === 0) {
      factors.push(d);
      n /= d;
    }
    d += 1;
    if (d * d > n && n > 1) {
      factors.push(n);
      break;
    }
  }

  let counts = {};
  for (let i = 0; i < factors.length; i++) {
    counts[factors[i]] = (counts[factors[i]] || 0) + 1;
  }

  let result = "";
  for (let factor in counts) {
    if (counts.hasOwnProperty(factor)) {
      if (result.length > 0) {
        result += ")(";
      }
      result += factor;
      if (counts[factor] > 1) {
        result += "**" + counts[factor];
      }
      result = result;
    }
  }

  return "("+result+")";}