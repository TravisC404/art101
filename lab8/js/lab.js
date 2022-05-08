/*
  I Travis Carlen wrote the following code the 7th of May 2022.
*/

function isEven(x){
  var result = x % 2 == 0;
  return result;
}

function isPrime(x){
  if (x == 1){
    return false;
  }
  if (x <= 3){
    return true;
  }
  var root = x ** 0.5;
  for (let i = 2; i < x; i++){
    if (x % i == 0){
      return false;
    }
  }
  return true;
}

var tokens = [0,0,0,0,0,0,0,0,0,0];
tokens = tokens.map(function (x){
  var result = Math.floor(Math.random() * 100);
  return result;
});

var outputDiv = document.getElementById("output");
outputDiv.innerHTML = "<p>"+"Original (Randomly generated) Array: " + tokens
  + "</p><p>List of evens in array: " + tokens.map(isEven)
  + "</p><p>List of primes in array: " + tokens.map(isPrime);
