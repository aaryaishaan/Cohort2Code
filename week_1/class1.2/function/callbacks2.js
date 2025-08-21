// to calculate the sum of square and sum of cube of a given number

function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}


function sumOfPowers(fn, a, b) {
  const value1 = fn(a);
  const value2 = fn(b);

  return value1 + value2;
}

let finalAns = sumOfPowers(function (n){
    return n*n*n;
}, 3, 5);
console.log(finalAns);
 