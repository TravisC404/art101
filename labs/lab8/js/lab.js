/*
* Logs to console 10th number of Fibonacci Sequences of given array
* Travis Carlen.
* 10.26.2022
*/
function FibToTheTenth(x){
    var count = 2; //Accounts for first two numbers, x and x
    var last = x;
    var result = x + x;
    while (count != 9){
        var temp = result;
        count += 1;
        result += last;
        last = temp;
    }
    return result;
}
function outputs(){
  var outputEl = document.getElementById("output");


  console.log("10th number of Fibonacci sequence starting at 1: ", FibToTheTenth(1));
  console.log("10th number of Fibonacci sequence starting at 10: ", FibToTheTenth(10));

  var array = [1, 25, 1.1, 40, 12, 13];
  console.log("My Array: ", array);

  var p = document.createElement('p');
  p.innerHTML = "THE ARRAY: " + array;
  outputEl.appendChild(p);

  var resultArray = array.map(FibToTheTenth);
  console.log("10th number of Fib Sequence starting with each element of array: ", resultArray);

  var p = document.createElement('p');
  p.innerHTML = "THE FIBONACCI ARRAY: " + resultArray;
  outputEl.appendChild(p);

  var resultArray = array.map(function(x){
    return 1/x;
  });
  console.log("Inverse of array: ", resultArray);

  var p = document.createElement('p');
  p.innerHTML = "THE INVERSE ARRAY: " + array;
  outputEl.appendChild(p);
}

setTimeout(outputs, 500);
