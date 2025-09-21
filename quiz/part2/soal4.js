
function checkAB(num) {
  let letterA = num.indexOf("a");
  let letterB = num.indexOf("b")

  return letterA
  
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false