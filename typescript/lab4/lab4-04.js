// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// const n = 5;
// console.time("Execution time");
// console.log(`Recursively Without memoization: The ${n}th Fibonacci number is ${fibonacci(n)}`);
// console.timeEnd("Execution time");

// var fibonacciMemo = (function () {
//     const memo = {};
  
//     function fibo(n) {
//       let nthNum;
//       if (n in memo) {
//         nthNum = memo[n];
//       } else {
//         if (n === 0 || n === 1) nthNum = n;
//         else nthNum = fibo(n - 1) + fibo(n - 2);
  
//         memo[n] = nthNum;
//       }
  
//       return nthNum;
//     }
  
//     return fibo;
//   })();
//   console.time("Execution time");
//   console.log(`Recursive With memoization: The ${n}th Fibonacci number is ${fibonacciMemo(n)}`);
//   console.timeEnd("Execution time");


//   console.time("Execution time");
//   console.log(`Recursive With non- memoization: The ${n}th Fibonacci number is ${fibonacciMemo(n)}`);
//   console.timeEnd("Execution time");



//solution-2

const fibonacci=(function(){
    const memo=new Map();
function f(n){
    let value;
if(memo.has(n)){
value=memo.get(n);
}
else{
if(n<=1){
    value=n;
}
else{
value=f(n-1)+f(n-2);
}
memo.set(n,value);
}
return value
}
return f;

})();

console.log(fibonacci(8));


console.time("memoized Version");
console.log(fibonacci(100));
console.timeEnd("memoized Version");

console.time(" non-memoized Version");
console.log(fibonacci(100));
console.timeEnd(" non-memoized Version");
