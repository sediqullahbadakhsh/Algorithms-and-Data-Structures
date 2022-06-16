// Solutions for adding numbers

// Frst Solution
function addUpToFrst(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Second Solution
function addUpToScnd(n) {
  return (n * (n + 1)) / 2;
}

// First Solution
let t1 = performance.now();
addUpToFrst(10000000);
let t2 = performance.now();
console.log(`1st Solution Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
// Second solution
let t3 = performance.now();
addUpToScnd(10000000);
let t4 = performance.now();
console.log(`2nd Solution Time Elapsed: ${(t4 - t3) / 1000} seconds.`);
